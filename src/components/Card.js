import React from 'react';
import todo from "../assets/icons/to-do.svg"
import nop from "../assets/icons/no-priority.svg"
import hp from "../assets/icons/Img - High Priority.svg"
import mp from "../assets/icons/Img - Medium Priority.svg"
import lp from "../assets/icons/Img - Low Priority.svg"
import up from "../assets/icons/SVG - Urgent Priority grey.svg"
import pfp from "../assets/icons/Default_pfp.svg"


function Card({ ticket, groupBy }) {

  const getPriority = (priority) => {
    switch (priority) {
      case 4:
        return up;
      case 3:
        return hp;
      case 2:
        return mp;
      case 1:
        return lp;
      case 0:
        return nop;
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="card">
      <div className='card-head'>
        <h3 className='card-id'>{ticket.id}</h3>
        <img src={pfp} alt='img' height='20px' width='20px' />
      </div>
      <h3>{ticket.title}</h3>
      <div className="meta">
        {groupBy === 'priority' ? <></> : <div className='card-p-img'>
          <img src={getPriority(ticket.priority)} alt={getPriority(ticket.priority)} />
        </div>}
        <span className="">
          <div className='tag'>
            <img src={todo} alt='icon' />
            {ticket.tag[0]}
          </div>
        </span>
      </div>
    </div>
  );
}

export default Card;