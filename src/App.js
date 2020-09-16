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

function App() {
  return (
    <div className="App">
      <Landing />
      <Service />
      <About />
      <Gallery />
      <Countdown />
      <Staff />
      <Form />
    </div>
  );
}

export default App;
