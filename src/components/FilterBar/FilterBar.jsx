import React, { useState } from "react";
import "./FilterBar.styles.scss";

function FilterBar({ onFilter }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    onFilter(newFilter);
  };

  return (
    <div className="filter-bar">
      <h2>Filter books</h2>
      <input
        type="text"
        placeholder="Search books..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default FilterBar;
