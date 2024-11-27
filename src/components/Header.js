import React from 'react';
import { ReactComponent as DisplayIcon } from '../assets/icons/Display.svg';
import downArrow from "../assets/icons/down.svg"

function Header({ groupBy, setGroupBy, sortBy, setSortBy }) {
  return (
    <div className="header">
      <div className="dropdown">
        <button className="dropdown-button">
          <DisplayIcon />
          Display
          <img src={downArrow} alt='Down Arrow'/>
        </button>
        <div className="dropdown-content">
          <div className="dropdown-group">
            <label>Grouping</label>
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-group">
            <label>Ordering</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
