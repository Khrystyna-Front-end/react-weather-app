import React, {useState, useEffect} from "react";
import axios from "axios";
// import { AnimatedWeatherIcon } from "animated-weather-icon";
// import WeatherIcon from "./WeatherIcon";
import WeatherDailyForecast from "./WeatherDailyForecast"

function WeatherForecast(props){ 
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

    function answer(response){
      console.log(response.data.daily[0].temperature.maximum)
           setLoaded(true);
     setForecast(response.data.daily);
              };

useEffect(()=>{
setLoaded(false);
},[props.coordinates])
if(loaded){
 return (
   <div className="WeatherForecast">
    
       {forecast.map(function (dailyForecast, index) {
         if (index < 5) {
           return (
             <div className="dailyForecast" key={index}>
               <WeatherDailyForecast data={dailyForecast} />
             </div>
           );
         }
         return null;
       })}
   
   </div>
 );

    //  <>
    //    <WeatherDailyForecast data={forecast} />
  
    //  </>

} else {
    let lon = props.coordinates.longitude;
 
    let lat = props.coordinates.latitude;
    let apikey = "tbcc1fc8b6424a08899o39e326e00cc3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apikey}`;


    axios.get(apiUrl).then(answer);
      return null;
}
   
}

export default WeatherForecast;