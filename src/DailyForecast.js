import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DailyForecast.css";
import DailyForecastDay from "./DailyForecastDay";
export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");
  useEffect(() => {
    setLoaded(false);
  }, [props.info]);

  function ShowForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="row  fiveDays">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                {" "}
                <DailyForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    );
  } else {
    let latitude = props.info.lat;
    let longitude = props.info.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(ShowForecast);
    return "";
  }
}
