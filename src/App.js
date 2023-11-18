import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="containter">
        <Weather
          defaultCity="Berlin
        "
        />
      </div>
      <div>
        <span className="source">
          {" "}
          <span className="footage">Coded by: </span>
          <span className="name"> Rezvan Sameti, </span>
          <span className="footage">Open Sourced on: </span>
          <a
            className="myLink"
            href="https://github.com/Sameti-R/nice-react-weather-app"
          >
            GitHub
          </a>
          <span className="footage">, Hosted on:</span>
          <a
            className="myLink"
            href="https://stellar-melba-ba0280.netlify.app/"
          >
            Netlify
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
