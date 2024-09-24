import React from "react";
import './Tracks.css'
import audio from './Lala - N2.mp3'

const Tracks = () => {
  return (
    <div className="tracks">
      <div>
        <img src='https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543' alt="bmth" />
      </div>
      <div className="tracks-info">
        <h2>Throne</h2>
        <p>That's The Spirit</p>
        <p>Bring Me The Horizon</p>
        <audio controls>
          <source src={audio} type="audio/mp3" />
        </audio>
      </div>
    </div>
  )
}

export default Tracks;
