import React from "react";

export default function Phonetic(props) {
  let myAudio = new Audio(props.phonetic.audio);
  function playAudio() {
    myAudio.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <button onClick={playAudio} type="button">
          <i className="fa-solid fa-volume-low"></i>
        </button>

        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <span>{props.phonetic.text}</span>
      </div>
    );
  }
}
