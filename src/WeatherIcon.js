import React from "react";

import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const icon = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "fog",
    "mist-night": "fog",
    "shower-rain-day": "pouring",
    "shower-rain-night": "pouring",
    "thunderstorm-day": "lightning-rainy",
    "thunderstorm-night": "lightning-rainy",
    "rain-day": "rainy",
    "rain-night": "rainy",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "cloudy",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
  };
  return <WeatherSvg state={icon[props.code]} width={80} height={80} />;
}
