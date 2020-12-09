import React, {useState} from "react";
import "./styles.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";



export default function Search(props) {
    
    const [weatherData, setWeatherData]=useState({ready:false});


    

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
      icon:"https://openweathermap.org/img/wn/10d@2x.png"
  })

   
}


  if (weatherData.ready) {return (
    <div>
      <form className="search" >
        <input
          type="search"
          placeholder="Type a city.."
          autoComplete="off"
          
        />
        <input type="submit" placeholder="submit" />
      </form>
      <h1>{weatherData.city}</h1>
      <br/>
      <FormattedDate  date={weatherData.date} />
      <br/>
      <img className="temp" src= {weatherData.icon} width="80" alt={weatherData.description} />
      <h2 className="temp">{Math.round(weatherData.temperature)}° C|F</h2>
    
    <br />
    <h3 className="conditions">{weatherData.conditions} | </h3>
    <h3 className="conditions"> Humidity: {weatherData.humidity}% | </h3>
    <h3 className="conditions"> Wind Speed: {Math.round(weatherData.windSpeed)} km/h</h3>
    <br />
    </div>
  );
  }
 else    {
const apiKey="04e33782c3a1504fe52423621fcf24dd";
let city="Charlotte";
let units="metric";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);

return ("Loading...");
}


}