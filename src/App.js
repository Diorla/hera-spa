//@ts-check
import React from "react";
import "./App.css";
import Landing from "./sections/Landing";
import Service from "./sections/Service";
import About from "./sections/About";

function App() {
  return (
    <div className="App">
      <Landing />
      <Service />
      <About />
    </div>
  );
}

export default App;
