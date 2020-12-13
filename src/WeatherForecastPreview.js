import React from "react";
import ForecastIcon from "./ForecastIcon";


export default function WeatherForecastPreview(props){

    function hours(){
        let date=new Date(props.data.dt*1000)
        let hours=date.getHours();
        return `${hours}:00`;
    }
    function temperature(){
        let temperature = Math.round(props.data.main.temp)

        return `${temperature}°C`
    }



return(


<div className="WeatherForecast">
    <div className="time">
    <h4 >{hours()}</h4> 
    <h4 className="Forecast1"><ForecastIcon  code={props.data.weather[0].icon}/></h4>
   <h4 className="Forecast1" >{temperature()}</h4>
  </div>



</div>

);


}
   