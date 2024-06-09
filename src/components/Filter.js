import React from 'react';

function Filter({ setFilter }) {
    return (
        <div className="filter">
            <label>Status Filter: </label>
            <select onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
                <option value="All">All</option>
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
}

export default Filter;
