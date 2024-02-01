import React, { useState } from "react";
import "./TemperatureOfDay.css";

export default function TemperatureOfDay(props) {
  let cels = Math.round(props.temperature);

  let [fahr, setFahr] = useState(null);
  //   let [cels, setCels] = useState(temp);

  function changeToCelsius(event) {
    event.preventDefault();
    setFahr(null);
  }

  function changeToFahrenheit(event) {
    event.preventDefault();
    setFahr(Math.round((cels * 9) / 5 + 32));
  }

  return (
    <p className="numbTemp">
      {fahr !== null ? fahr : cels}
      <span className="unit">
        {" "}
        <a className="link" href="/" onClick={changeToCelsius}>
          ° C I
        </a>
      </span>{" "}
      <span className="unit">
        <a className="link" href="/" onClick={changeToFahrenheit}>
          ° F
        </a>
      </span>
    </p>
  );
}
