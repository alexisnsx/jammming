import React from "react";
// importing components
import TrackList from "../TrackList/TrackList";
import Playlist from "../Playlist/Playlist";
// import css styles
import './SearchResults.css'

const SearchResults = () => {
  return (
    <div>
      <div className="search-results">
        <TrackList />
        <Playlist />
      </div>
    </div>
  )
}

export default SearchResults;
