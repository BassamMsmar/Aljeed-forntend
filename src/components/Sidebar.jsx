import React from 'react';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Add more navigation items here */}
        {/* You might want to create a separate component for nested menu items */}
      </ul>
    </aside>
  );
};

export default Sidebar;