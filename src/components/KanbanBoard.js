import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../utils/api';
import { saveViewState, loadViewState } from '../utils/storage';
import Header from './Header';
import Column from './Column';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(loadViewState().groupBy);
  const [sortBy, setSortBy] = useState(loadViewState().sortBy);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const data = await fetchTickets();
        console.log('API Response:', data); // Debug the API response
        setTickets(Array.isArray(data.tickets) ? data.tickets : []); // Extract tickets array
      } catch (error) {
        console.error('Failed to load tickets:', error);
        setError('Unable to load tickets. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadTickets();
  }, []);

  useEffect(() => {
    saveViewState({ groupBy, sortBy });
  }, [groupBy, sortBy]);

  if (loading) {
    return <p className="loading-message">Loading tickets...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!tickets.length) {
    return <p className="empty-message">No tickets to display.</p>;
  }

  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});

  console.log('Grouped Tickets:', groupedTickets); // Debug grouped tickets

  Object.keys(groupedTickets).forEach((key) => {
    groupedTickets[key].sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  });

  return (
    <div className="kanban-board">
      <Header groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <div className="columns">
        {Object.keys(groupedTickets).map((key) => (
          <Column key={key} title={key} tickets={groupedTickets[key]} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
