import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherDailyForecast(props) {
  console.log(props.data);
  function day() {
    let days = ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
       return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }
  return (
    <ul className="weatherBubble">
      <li className="firstWeatherBubble">
        <div>
          <p className="day">{day()}</p>
          <p>
            <WeatherIcon code={props.data.condition.icon} />
          </p>
          <div className="temperatures">
            {" "}
            <span className="max-temp fw-semibold">{maxTemp()}</span>
            {"    ...    "}
            <span className="min-temp fw-semibold">{minTemp()}</span>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default WeatherDailyForecast;
