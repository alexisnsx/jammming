import React from "react";
// importing components
import TrackList from "../TrackList/TrackList";
// import css styles
import './SearchResults.css'

const SearchResults = ( props ) => {

  return (
    <div>
      <div className="search-results">
        <h2>tracks</h2>
        <TrackList tracks={props.searchResults} onAdd={props.onAdd} playSound={props.playSound} />
      </div>
    </div>
  )
}

export default SearchResults;
