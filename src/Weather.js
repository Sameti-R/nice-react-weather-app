import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherDetails from "./WeatherDetails";
import DailyForecast from "./DailyForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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

      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(ShowTemp);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherItems.ready) {
    return (
      <div className="weather">
        <form className="searching-tool" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="search-bar"
            onChange={updateCity}
          />{" "}
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>{" "}
        <WeatherDetails weatherItems={weatherItems} />
        <DailyForecast info={weatherItems.coordinates} />
        <footer>
          Last updated:
          <FormattedDate date={weatherItems.date} />
        </footer>
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
