import React from 'react';

function Card({ ticket }) {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 4:
        return 'priority high';
      case 3:
        return 'priority medium';
      case 2:
        return 'priority low';
      default:
        return 'priority no-priority';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      case 0:
        return 'No Priority';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <div className="meta">
        <span className="tag">{ticket.tag[0]}</span>
        <span className={getPriorityClass(ticket.priority)}>
          Priority: {getPriorityLabel(ticket.priority)}
        </span>
      </div>
    </div>
  );
}

export default Card;
