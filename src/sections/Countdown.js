import React from "react";
import Countdn from "react-countdown";
import "./countdown.css";

const Completed = () => <span>Hurray!!!</span>;

const formatTime = (value) => {
  const length = String(value).length;
  return "00".slice(length) + String(value);
};
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completed />;
  } else {
    return (
      <div className="countdown">
        <div>{formatTime(days)} days</div>
        <div>{formatTime(hours)} hours</div>
        <div>{formatTime(minutes)} minutes</div>
        <div>{formatTime(seconds)} seconds</div>
      </div>
    );
  }
};

export default function Countdown() {
  // January 10, 2021. Five O'clock in the morning
  const date = new Date(2021, 0, 10, 5);
  return (
    <section id="countdown">
      <Countdn date={date} renderer={renderer} />
      <div className="prompt">
        <h3>Sign up now and get</h3>
        <ul>
          <li>10% off our future services</li>
          <li>First offer on all selective service</li>
          <li>Chance to gain life membership at 50% rate</li>
          <li>Free VIP status for 1 year</li>
        </ul>
        <div>So what are you waiting for?</div>
        <div>
          <a href="#register">Register</a> now for free!
        </div>
      </div>
    </section>
  );
}
