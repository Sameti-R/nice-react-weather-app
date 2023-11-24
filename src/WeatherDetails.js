import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <div className="row">
        <div className="col-4">
          <h1 className="city">{props.weatherItems.city}</h1>
          <h5 className="weatherCondition text-capitalize">
            {props.weatherItems.description}
          </h5>
        </div>
        <div className="col-4">
          {" "}
          <img src={props.weatherItems.icon} alt="weather condition"></img>{" "}
          <span className="degree">
            {Math.round(props.weatherItems.temperature)}
          </span>{" "}
          <span className="symbol">℃</span>
        </div>
        <div className="col-4">
          <ul className="details">
            <li>
              <span className="text">humidity:</span>{" "}
              <span>{props.weatherItems.humidity}%</span>
            </li>
            <li>
              {" "}
              <span className="text">wind:</span>
              <span>{Math.round(props.weatherItems.wind)} km/h</span>
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
