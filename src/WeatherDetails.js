import React from "react";

export default function WeatherDetails(props) {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <h1>{props.weatherItems.city}</h1>
          <h5 className="text-capitalize">{props.weatherItems.description}</h5>
        </div>
        <div className="col-4">
          {" "}
          <img src={props.weatherItems.icon} alt="weather condition"></img>
          {Math.round(props.weatherItems.temperature)}℃
        </div>
        <div className="col-4">
          <ul className="details">
            <li>humidity:{props.weatherItems.humidity}%</li>
            <li>wind:{Math.round(props.weatherItems.wind)} km/h</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
