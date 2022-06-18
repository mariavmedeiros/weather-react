import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function displayTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let units = "imperial";
    let apiKey = "30e80a3062954953f62b5ad133ae6616";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayTemperature);
  }
  function UpdateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit} id="SearchForm" className="mb-3">
        <div className="row">
          <div className=" col-10">
            <input
              type="Search"
              placeholder="Type a city"
              id="cityInput"
              className="form-contorl"
              autocomplete="off"
              onChange={UpdateCity}
            />
          </div>
          <div className=" col-100">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
              id="submitButton"
            />

            <input
              type="Submit"
              value="Current Location"
              className="btn btn-success"
              id="currentButton"
            />
          </div>
        </div>
      </form>
    </div>
  );
  let message = (
    <div className="Temp">
      <div className="row">
        <div className="col-5">
          <ul>
            <li ClassName="city">
              <strong>Sao Paulo</strong>{" "}
            </li>
            <li>Temperature: 70ºF</li>
            <li>Description: Clear Sky</li>
            <li>Humidity: 2 %</li>
            <li>Wind: 3 mph</li>
          </ul>
        </div>
        <div className="img">
          <div className="col-">
            <img
              src=" http://openweathermap.org/img/wn/01d@2x.png"
              alt={description}
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (temperature) {
    return (
      <div className="Weather">
        {form}

        <div className="Temp">
          <div className="row">
            <div className="col-5">
              <ul>
                <li ClassName="city">
                  <strong>{city}</strong>{" "}
                </li>
                <li>Temperature: {temperature}ºF</li>
                <li>Description: {description}</li>
                <li>Humidity: {humidity} %</li>
                <li>Wind: {wind} mph</li>
              </ul>
            </div>
            <div className="img">
              <div className="col-10">
                <img src={icon} alt={description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form} {message}
      </div>
    );
  }
}
