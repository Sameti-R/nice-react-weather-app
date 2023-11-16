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

  let minute = props.date.getMinutes();

  return (
    <span>
      {day}, {hour}:{minute}
    </span>
  );
}
