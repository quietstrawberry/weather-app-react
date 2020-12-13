import React, {useState} from "react";
import "./styles.css";


export default function Temperature(props){
    const [unit,setUnit]=useState("celcius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function convertToCelcius(event){
   event.preventDefault();
    setUnit("celcius");
    }
    function fahrenheit(){
       return (props.celcius*9)/5+32;

    }

    if (unit==="celcius"){
    return (
    <div>
    <h2 className="temp" >{Math.round(props.celcius)} <span className="units">°C |<a  href="/" onClick={convertToFahrenheit}>°F</a></span></h2>
    </div>
    );
    } else {
        
        return (
        <div>
    <h2 className="temp" >{Math.round(fahrenheit())}  <span className="units"><a  href="/" onClick={convertToCelcius}> °C  </a>|°F</span></h2>
    </div>
        );
    }
}