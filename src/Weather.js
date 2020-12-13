import React, {useState} from "react";
import "./styles.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";



export default function Weather(props) {
    
    const [weatherData, setWeatherData]=useState({ready:false});
    const[city, setCity]=useState(props.defaultCity);


    

function handleResponse(response){
    console.log(response.data);
    
  setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      date: new Date(response.data.dt*1000),
      humidity:response.data.main.humidity,
      windSpeed:response.data.wind.speed,
      conditions:response.data.weather[0].description,
      city:response.data.name,
      icon:response.data.weather[0].icon,
  })

   
}


function handleSubmit(event){
    event.preventDefault();
    search();
}
function handleCityChange(event){
    setCity(event.target.value);

}
function search(){
  const apiKey="04e33782c3a1504fe52423621fcf24dd";

let units="metric";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);


}

  if (weatherData.ready) {return (
    <div>
      <form className="search"onSubmit={handleSubmit} >
        <input
          type="search"
          placeholder="Type a city.."
          autoComplete="off"
          onChange={handleCityChange}
        />
        <input type="submit" placeholder="submit" />
      </form>
      <WeatherInfo data={weatherData} />
      <Forecast  city={weatherData.city} />
 </div>
  );
  }
 else    {
   search();

return ("Loading...");
}


}