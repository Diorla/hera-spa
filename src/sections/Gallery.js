import React from "react";
import "./gallery.css";
import gym from "./gallery/gym.jpg";
import physio from "./gallery/physio.jpg";
import relaxing from "./gallery/relaxing.jpg";
import sauna from "./gallery/sauna.jpg";
import spa from "./gallery/spa.jpg";
import sports from "./gallery/sports.jpg";
import wellness from "./gallery/wellness.jpg";
import wheelchair from "./gallery/wheelchair.jpg";

export default function Gallery() {
  return (
    <div id="gallery" className="grid">
      <h1>Gallery</h1>
      <div className="gallery">
        <figure className="gallery__item div1">
          <img src={gym} alt="gym" className="gallery__img" />
        </figure>
        <figure className="gallery__item div3">
          <img src={physio} alt="physio" className="gallery__img" />
        </figure>
        <figure className="gallery__item div4">
          <img src={relaxing} alt="relaxing" className="gallery__img" />
        </figure>
        <figure className="gallery__item div5">
          <img src={sauna} alt="sauna" className="gallery__img" />
        </figure>
        <figure className="gallery__item div6">
          <img src={spa} alt="spa" className="gallery__img" />
        </figure>
        <figure className="gallery__item div7">
          <img src={sports} alt="sports" className="gallery__img" />
        </figure>
        <figure className="gallery__item div8">
          <img src={wellness} alt="wellness" className="gallery__img" />
        </figure>
        <figure className="gallery__item div2">
          <img src={wheelchair} alt="wheelchair" className="gallery__img" />
        </figure>
      </div>
    </div>
  );
}
//<img
// className="grid-item"
// key={idx}
// src={gym}
// alt="gym"
// style={{ height: generate(), width: generate() }}
// />
