import "./Main.css";
import React from "react";
import { icons } from "../../icons";

function Main({ main, weather, wind, sys }) {
  const gradus = Math.floor(main?.temp - 273.5);
  const maxGradus = Math.floor(main?.temp_max - 273.5);
  const minGradus = Math.floor(main?.temp_min - 273.5);
  return (
    <main className="main">
      <div className="left">
        {/* icon  */}
        {weather && weather[0]?.description === "smoke"
          ? icons[0]
          : weather && weather[0]?.description === "clear sky"
          ? icons[6]
          : weather && weather[0]?.description === "scattered clouds"
          ? icons[2]
          : weather && weather[0]?.description === "broken clouds"
          ? icons[2]
          : weather && weather[0]?.description === "haze"
          ? icons[0]
          : weather && weather[0]?.description === "fog"
          ? icons[0]
          : weather && weather[0]?.description === "few clouds"
          ? icons[0]
          : weather && weather[0]?.description === "overcast clouds"
          ? icons[3]
          : weather && weather[0]?.description === "light rain"
          ? icons[3]
          : icons[11]}
        {/* /icon  */}

        <div className="mainTemp">
          {gradus >= 0 ? `+${gradus}` : `${gradus}`}
          <sup className="mainSup">o</sup>
          <div className="description">
            {weather && weather[0]?.description}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="up">
          <div className="box">
            <div className="boxNum">
              {maxGradus}
              <sup>o</sup>
            </div>
            <div className="boxText">High</div>
          </div>
          <div className="box">
            <div className="boxNum">
              {Math.floor(wind?.deg)}
              <sup>o</sup>
            </div>
            <div className="boxText">Wind Degree</div>
          </div>
          <div className="box">
            <div className="boxNum">
              {main?.humidity}
              <sup>%</sup>
            </div>
            <div className="boxText">Humidity</div>
          </div>
          {/* <div className="box">
            <div className="boxNum">{sys?.sunrise}</div>
            <div className="boxText">Sunrise</div>
          </div> */}
        </div>
        <div className="down">
          <div className="box">
            <div className="boxNum">
              {minGradus}
              <sup>o</sup>
            </div>
            <div className="boxText">Low</div>
          </div>
          <div className="box">
            <div className="boxNum">
              {Math.floor(wind?.speed)}
              <sup>km/h</sup>
            </div>
            <div className="boxText">Wind Speed</div>
          </div>
          <div className="box">
            <div className="boxNum">
              {main?.pressure / 1000}
              <sup>hPa</sup>
            </div>
            <div className="boxText">Pressure</div>
          </div>
          {/* <div className="box">
            <div className="boxNum">{sys?.sunset}</div>
            <div className="boxText">Sunset</div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default Main;
