import react from "react";
export default function DailyForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(props.data.dt * 1000);
  let day = days[date.getDay()];
  return (
    <div>
      <div>{day}</div>
      <div>
        <img src={icon} />
      </div>
      <div>
        <span className="tempMin"> {Math.round(props.data.temp.min)}°</span>
        <span className="tempMax"> {Math.round(props.data.temp.max)}°</span>
      </div>
    </div>
  );
}
