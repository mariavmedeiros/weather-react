import React from "react";
import Search from "./Search";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div class="weather-app-wraper">
        <Search />
      </div>
      <div className="mariamedeiros">
        <small>
          <a href="">Open-source code</a> by Maria Medeiros
        </small>
      </div>
    </div>
  );
}
