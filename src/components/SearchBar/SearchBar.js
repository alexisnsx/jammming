import React, { useCallback, useState } from "react";
// import css styles
import './SearchBar.css'

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  const search = useCallback(() => {
    props.search(keyword);
  }, [props.search, keyword]);

  return (
    <div className='search-bar'>
      <div className="search-input">
        <input placeholder="Enter song name" onChange={handleKeywordChange} />
      </div>
      <div className="search-button" onClick={search}>
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchBar;
