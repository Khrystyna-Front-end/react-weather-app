import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import DateOfWeather from "./DateOfWeather";
import TemperatureOfDay from "./TemperatureOfDay";
import WeatherDailyForecast from "./WeatherForecast"
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
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      // latitude: response.data.

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
                <img src={weather.iconUrl} alt={weather.description} />
              </div>
              <div className="col-8">
                <TemperatureOfDay temperature={weather.temperature} />
              </div>
            </div>
          </div>
        </div>
        <WeatherDailyForecast coordinates={weather.coordinates} />
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
