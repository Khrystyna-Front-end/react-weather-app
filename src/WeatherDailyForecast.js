import React from "react";

import WeatherIcon from "./WeatherIcon";

function WeatherDailyForecast(){
    return (
      <ul className="weatherBubble">
        <li className="firstWeatherBubble">
          <div>
            <p>Sunday</p>
            <p>
              <WeatherIcon code="02n" />
            </p>
            <span className="max-temp">19</span>
            <span className="min-temp">10</span>
          </div>
        </li>
        <li className="secondWeatherBubble">
          <div>
            <span>19</span>
            <span>10</span>
          </div>
        </li>
        <li className="thirdWeatherBubble">
          <div>
            <span>19</span>
            <span>10</span>
          </div>
        </li>
        <li className="fourWeatherBubble">
          <div>
            <span>19</span>
            <span>10</span>
          </div>
        </li>
        <li className="fiveWeatherBubble">
          <div>
            <span>19</span>
            <span>10</span>
          </div>
        </li>
      </ul>
    );
}

export default WeatherDailyForecast;