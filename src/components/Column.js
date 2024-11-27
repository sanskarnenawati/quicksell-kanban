import React from 'react';
import Card from './Card';
import addIcon from '../assets/icons/add.svg';
import menuIcon from '../assets/icons/3 dot menu.svg';
import nop from "../assets/icons/No-priority.svg"
import hp from "../assets/icons/Img - High Priority.svg"
import mp from "../assets/icons/Img - Medium Priority.svg"
import lp from "../assets/icons/Img - Low Priority.svg"
import up from "../assets/icons/SVG - Urgent Priority grey.svg"
import todo from "../assets/icons/To-do.svg"
import inprogress from "../assets/icons/in-progress.svg"
import done from "../assets/icons/Done.svg"
import backlog from "../assets/icons/Backlog.svg"
import cancel from "../assets/icons/Cancelled.svg"
import pfp from "../assets/icons/Default_pfp.svg"

function Column({ title, tickets, groupBy }) {

  const getPriorityLabel = (p) => {
    switch (p) {
      case '4':
        return "Urgent";
      case '3':
        return "High Priority";
      case '2':
        return "Medium Priority";
      case '1':
        return "Low Priority";
      case '0':
        return "No Priority";
      default:
        return 'Unknown';
    }
  }

  const getPriority = (priority) => {
    switch (priority) {
      case '4':
        return up;
      case '3':
        return hp;
      case '2':
        return mp;
      case '1':
        return lp;
      case '0':
        return nop;
      default:
        return 'Unknown';
    }
  };

  const getStatus = (status) => {
    switch (status) {
      case 'Todo':
        return todo;
      case 'In progress':
        return inprogress;
      case 'Backlog':
        return backlog;
      case 'Cancelled':
        return cancel;
      case 'Done':
        return done;
      default:
        return 'Unknown';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'Todo':
        return "Todo";
      case 'In progress':
        return "In Progress";
      case 'Backlog':
        return "Backlog";
      case 'Cancelled':
        return "Cancelled";
      case 'Done':
        return "Done";
      default:
        return 'Unknown';
    }
  };

  const renderTitle = () => {
    if (groupBy === 'userId') {
      return (
        <div className="column-header-title">
          <img src={pfp} height='23px'/> 
          {tickets[0]?.userName || 'Unknown User'}
          <div>{tickets.length}</div>
        </div>
      );
    } else if (groupBy === 'status') {
      return (
        <div className="column-header-title">
          <img src={getStatus(title)} /> 
          {getStatusLabel(title)}
          <div>{tickets.length}</div>
        </div>
      );
    } else if (groupBy === 'priority') {
      return (
        <div className="column-header-title">
          <img src={getPriority(title)} /> 
          {getPriorityLabel(title)}
          <div>{tickets.length}</div>
        </div>
      );
    } else {
      return (
        <div className="column-header-title">
          {title}
          <div>{tickets.length}</div>
        </div>
      );
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        {renderTitle()}
        <div>
          <img src={addIcon} alt="add" />
          <img src={menuIcon} alt="menu" />
        </div>
      </div>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} groupBy={groupBy} />
      ))}
    </div>
  );
}

export default Column;
