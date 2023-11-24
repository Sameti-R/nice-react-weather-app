import react from "react";
import "./DayTime.css";
export default function FormattedTime(props) {
  let hour = props.time.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minute = props.time.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <span className="dayTime">
      {hour}:{minute}
    </span>
  );
}
