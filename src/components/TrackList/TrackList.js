import React from "react";
import './TrackList.css'

import Tracks from "../Tracks/Tracks";

const TrackList = () => {
  return (
    <div>
      <div className="tracks-card">
        <h2>tracks</h2>
        <Tracks />
        <Tracks />
      </div>
    </div>
  )
}

export default TrackList;
