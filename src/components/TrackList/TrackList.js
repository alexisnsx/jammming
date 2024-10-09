import React from "react";
import './TrackList.css'

import Tracks from "../Tracks/Tracks";

const TrackList = (props) => {

  return (
    <div>
      <div className="tracks-card">
        {props.tracks.map((track) => {
          return <Tracks key={track.id} track={track} onAdd={props.onAdd} isRemoval={props.isRemoval} onRemove={props.onRemove} playSound={props.playSound}/>
        })}
      </div>
    </div>
  )
}

export default TrackList;
