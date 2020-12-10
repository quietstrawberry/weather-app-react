import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div>
        <Weather  defaultCity="Charlotte"/>
        
        <a href="https://github.com/quietstrawberry/World-Weather-Project">
          My GitHub
        </a>
        .
      </div>
    </div>
  );
}
