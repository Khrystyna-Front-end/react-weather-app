import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import DateOfWeather from "./DateOfWeather";
import TemperatureOfDay from "./TemperatureOfDay";
import WeatherForecast from "./WeatherForecast"
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
    console.log(response)
    setWeather({
      city: response.data.city,
      country: response.data.country,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
      ,
    });
    setLoaded(true);
  }

  function search() {
    let apiKey = `tbcc1fc8b6424a08899o39e326e00cc3`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric
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
              {weather.city} <br />
              <h5 className="country">{weather.country}</h5>
            </h1>
            <DateOfWeather date={weather.date} />
            <p>{weather.description}</p>
            <div className="row temperatureCurrent">
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
        <WeatherForecast
          coordinates={weather.coordinates}
          // temperature={weather.temperature}
        />
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
