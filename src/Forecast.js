import React ,{useState} from "react";
import axios from "axios";
import "./StyleForecast.css";

import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props){
    const[loaded,setLoaded]=useState(false); 
    const[forecast,setForecast]=useState(null);   
    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
        

    }
    if(loaded && props.city===forecast.city.name)
{ return (
    <div >
        <h1 className="ForecastBox">

    <h4 className="HourlyForecast"><WeatherForecastPreview  data={forecast.list[0]}     /></h4>
    <h4 className="HourlyForecast"><WeatherForecastPreview data={forecast.list[1]}  /></h4>
    <h4 className="HourlyForecast"><WeatherForecastPreview data={forecast.list[2]}  /></h4>
    <h4 className="HourlyForecast"> <WeatherForecastPreview data={forecast.list[3]}  /></h4>
    <h4 className="HourlyForecast"> <WeatherForecastPreview data={forecast.list[4]}  /></h4>
    <h4 className="HourlyForecast"> <WeatherForecastPreview data={forecast.list[5]}  /></h4>

    
    </h1>
    </div>
   
   
   
   
   );
}

else{


    let apiKey="04e33782c3a1504fe52423621fcf24dd";
    let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
   
    axios.get(apiUrl).then(handleForecastResponse);
    return <div>Hello {props.city}</div>
}
}