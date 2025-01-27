import React from "react";
import './Tracks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";


const Tracks = (props) => {
  const renderAction = () => {
    // make playsound toggle
    // grab preview_url

    if (props.isRemoval) {
      return (
        <div className="track-icons">
          <FontAwesomeIcon icon={faTrash} onClick={() => props.onRemove(props.track)} />
          <FontAwesomeIcon icon={faPlayCircle} />
        </div>
      )
    }
    return (
      <div className="track-icons">
          <FontAwesomeIcon icon={faPlus} onClick={() => props.onAdd(props.track)} />
          <FontAwesomeIcon icon={faPlayCircle} onClick={() => props.playSound(props.track)} />
        </div>
    )
  }
  return (
    <div className="track-border">
      <div className="tracks">
        <div>
          <img src={props.track.img} alt={props.track.song} />
        </div>
        <div className="tracks-info">
          <h2 className="second-line">{props.track.song}</h2>
          <p className="second-line">{props.track.artist} | {props.track.album}</p>
        </div>
        {renderAction()}
      </div>
    </div>
  )
}

export default Tracks;
