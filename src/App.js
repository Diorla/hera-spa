//@ts-check
import React from "react";
import "./App.css";
import Landing from "./sections/Landing";
import Service from "./sections/Service";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Countdown from "./sections/Countdown";

function App() {
  return (
    <div className="App">
      <Landing />
      <Service />
      <About />
      <Gallery />
      <Countdown />
    </div>
  );
}

export default App;
