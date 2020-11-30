import React from "react";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div>
        <Search />
        <br />
        <h3 className="conditions">conditions | </h3>
        <h3 className="conditions"> humidity | </h3>
        <h3 className="conditions"> wind speed </h3>
        <br />
        <a href="https://github.com/quietstrawberry/World-Weather-Project">
          My GitHub
        </a>
        .
      </div>
    </div>
  );
}
