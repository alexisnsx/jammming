import React, { useCallback } from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";

const Playlist = ( props) => {
  const handleNameChange = useCallback((event) => {
    props.onNameChange(event.target.value);
  }, [props.onNameChange]); 
  return (
    <div>
      <div className="playlist">
      <div>
        <input className="playlist-name" placeholder="New Playlist" onChange={handleNameChange} />
      </div>
      <button>save to spotify</button>
        <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
      </div>
    </div>
  )
}

export default Playlist;
