import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./styles.css";

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
        <div className="temp" >
        <Temperature className="temp" celcius={props.data.temperature} />
        </div>
        
      
      <br />
      <h3 className="conditions">{props.data.conditions} | </h3>
      <h3 className="conditions"> Humidity: {props.data.humidity}% | </h3>
      <h3 className="conditions"> Wind Speed: {Math.round(props.data.windSpeed)} km/h</h3>
      <br />
      </div>
    );
}