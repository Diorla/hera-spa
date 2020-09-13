//@ts-check
import React from 'react';
import "./landing.css";
import down from "./down.svg";

export function Landing() {
  return (
    <section className="landing" id="top">
      <nav>
        <h1>Hera Salon</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#staff">Staff</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </nav>
      <main>
        <div>Looking for massage, spa treatment and medical rehabilitation</div>
        <div>Your one stop physiotherapy solution</div>
      </main>
      <div className="bottom">
        <a id="icon" href="#bottom"><img src={down} alt="down" /></a>
      </div>
    </section>
  );
}
