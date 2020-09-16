//@ts-check
import React from "react";
import "./App.css";
import Landing from "./sections/Landing";
import Service from "./sections/Service";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Countdown from "./sections/Countdown";
import Staff from "./sections/Staff";
import Form from "./sections/Form";
import { FaArrowUp } from "react-icons/fa";
// import

function App() {
  return (
    <div className="App" id="top">
      <Landing />
      <Service />
      <About />
      <Gallery />
      <Countdown />
      <Staff />
      <Form />
      <a href="#top" className="up-link">
        <FaArrowUp className="up-icon" />
      </a>
    </div>
  );
}

export default App;
