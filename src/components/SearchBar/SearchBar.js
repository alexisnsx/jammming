import React from "react";
// import css styles
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className="search-input">
        <input placeholder="Enter song name" />
      </div>
      <div className="search-button">
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchBar;
