import './SearchBar.css'

function SearchBar({ searchTerm, onSearchChange, filterPriority, onFilterChange }) {
  return (
    <div className="search-bar">
      <h3>Search & Filter</h3>

      <div className="search-group">
        <label htmlFor="search-input">Search Tasks</label>
        <input
          id="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title or description..."
          className="search-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="priority-filter">Filter by Priority</label>
        <select
          id="priority-filter"
          value={filterPriority}
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar
