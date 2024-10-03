import React, { useState } from "react";
// import css styles
import './SearchBar.css'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <div className='search-bar'>
      <div className="search-input">
        <input placeholder="Enter song name" onChange={handleKeywordChange} />
      </div>
      <div className="search-button">
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchBar;
