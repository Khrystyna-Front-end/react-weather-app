import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import DateOfWeather from "./DateOfWeather";
import TemperatureOfDay from "./TemperatureOfDay";
import Footer from "./Footer";

import "./App.css";

export default function App(props) {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  function search() {
    let apiKey = `a7f427b104404074749a9da54347acc6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(showWeather);
  }

  if (loaded) {
    return (
      <div className="App ">
        <Header />
        <div className="circle mt-5">
          <form className="form form-control row" onSubmit={handleSubmit}>
            <input
              className="col-8"
              type="text"
              placeholder="Enter a city"
              onChange={handleCity}
              autoFocus="on"
            />
            <input
              className="col-4 btn btn-primary"
              type="submit"
              value="submit"
            />
          </form>

          <div className="descCity">
            <h1 className="nameCity">
              {weather.city} {weather.country}
            </h1>
            <DateOfWeather date={weather.date} />
            <p>{weather.description}</p>
            <div className="row">
              <div className="col-4">
                {" "}
                <img src={weather.iconUrl} alt="Weather Icon" />
              </div>
              <div className="col-8">
                <TemperatureOfDay temperature={weather.temperature} />
              </div>
            </div>
          </div>
        </div>
        <ul className="weatherBubble">
          <li className="oneWeatherBubble">
            1 the above example, I don't specify the radius of the circle.
          </li>
          <li className="twoWeatherBubble">
            2 the above example, I don't specify the radius of the circle.
          </li>
          <li className="thirdWeatherBubble">
            3 the above example, I don't specify the radius of the circle.
          </li>
          <li className="fourWeatherBubble">
            4 the above example, I don't specify the radius of the circle.
          </li>
          <li className="fiveWeatherBubble">
            5 the above example, I don't specify the radius of the circle.
          </li>
        </ul>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
