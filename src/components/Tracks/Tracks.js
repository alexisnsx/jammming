import React from "react";
import './Tracks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";


const Tracks = () => {
  return (
    <div className="track-border">
      <div className="tracks">
        <div>
          <img src='https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543' alt="bmth" />
        </div>
        <div className="tracks-info">
          <h2>Throne</h2>
          <p>Bring Me The Horizon | That's the Spirit</p>
        </div>
        <div className="track-icons">
          <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faPlayCircle} />
        </div>
      </div>
    </div>
  )
}

export default Tracks;
