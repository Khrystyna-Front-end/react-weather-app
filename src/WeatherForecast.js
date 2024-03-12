import React from "react";
import axios from "axios";
// import { AnimatedWeatherIcon } from "animated-weather-icon";
// import WeatherIcon from "./WeatherIcon";
import WeatherDailyForecast from "./WeatherDailyForecast"

function WeatherForecast(props){ 
    function answer(response){
    //     let lon = response.data.coordinates.lon;
    //     let lat = response.data.coordinates.lat;
        console.log(response.data)
    };
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;

    let apikey = "a7f427b104404074749a9da54347acc6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;

axios.get(apiUrl).then(answer);

    return (
      <>
       <WeatherDailyForecast/>
      </>
    );
}

export default WeatherForecast;