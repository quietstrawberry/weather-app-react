import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <br/>
        <FormattedDate  date={props.data.date} />
        <br/>
        <div className="temp">
        <WeatherIcon className="temp" code={props.data.icon} />
        </div>
        
        <h2 className="temp">{Math.round(props.data.temperature)}° C|F</h2>
      
      <br />
      <h3 className="conditions">{props.data.conditions} | </h3>
      <h3 className="conditions"> Humidity: {props.data.humidity}% | </h3>
      <h3 className="conditions"> Wind Speed: {Math.round(props.data.windSpeed)} km/h</h3>
      <br />
      </div>
    );
}