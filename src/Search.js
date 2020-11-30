import React, { useState } from "react";
import "./styles.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [display, setDisplay] = useState("Charlotte");
  const [temperature, setTemperature] = useState(24);

  function handleSubmit(event) {
    event.preventDefault();
    setDisplay(city);
    setTemperature("18");
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city.."
          autoComplete="off"
          onChange={changeCity}
        />
        <input type="submit" placeholder="submit" />
      </form>
      <h1>{display}</h1>
      <img className="temp" src="/icon.png" width="80" alt="icon" />
      <h2 className="temp">{temperature}° C|F</h2>
    </div>
  );
}