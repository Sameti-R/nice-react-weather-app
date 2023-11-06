import react from "react";
export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    let hour = `0${hour}`;
  }
  let minute = props.date.getMinutes();
  if (minute < 10) {
    let minute = `0${minute}`;
  }

  return (
    <span>
      {day}, {hour}:{minute}
    </span>
  );
}
