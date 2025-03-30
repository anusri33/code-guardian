import React from 'react';

function Sidebar({ onFilterChange, activeFilter }) {
  const filters = ['All', 'OWASP', 'WCAG'];

  return (
    <aside className="sidebar">
      <h2>Filter</h2>
      <div className="filter-section">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;