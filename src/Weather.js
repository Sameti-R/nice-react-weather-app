import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherItems, setWeatherItems] = useState({ ready: false });
  function ShowTemp(response) {
    setWeatherItems({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherItems.ready) {
    return (
      <div className="weather">
        <form className="searching-tool">
          <input
            type="search"
            placeholder="Enter a city"
            className="search-bar"
          />{" "}
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </form>{" "}
        <div className="row">
          <div className="col-4">
            <h1>{weatherItems.city}</h1>
            <h5 className="text-capitalize">{weatherItems.description}</h5>
          </div>
          <div className="col-4">
            {" "}
            <img src={weatherItems.icon} alt="weather condition"></img>
            {Math.round(weatherItems.temperature)}℃
          </div>
          <div className="col-4">
            <ul className="details">
              <li>humidity:{weatherItems.humidity}%</li>
              <li>wind:{Math.round(weatherItems.wind)} km/h</li>
            </ul>
          </div>
          <footer>
            Last updated:
            <FormattedDate date={weatherItems.date} />
          </footer>
        </div>
      </div>
    );
  } else {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(ShowTemp);
    return <p>Loading...</p>;
  }
}
