import React from 'react';
import Card from './Card';

function Column({ title, tickets }) {
  return (
    <div className="column">
      <div className="column-header">{title}</div>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
