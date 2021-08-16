import React from "react";

export default function Phonetic(props) {
  return (
    <div class="Phonetic">
      <a href={props.Phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      {props.Phonetic.text}
    </div>
  );
}
