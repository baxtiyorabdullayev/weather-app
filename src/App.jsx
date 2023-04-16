import "./App.css";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "./base";
import { API_KEY } from "./base";
import axios from "axios";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  const [city, setCity] = useState("tashkent");
  const [weather, setWeather] = useState({});
  // const [error, setError] = useState(false);
  // let date = new Date();
  // console.log(date.getTime());
  console.log(weather);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
      .then((response) => setWeather(response.data));
    // .catch((err) => setError(err.message));
  }, [city]);

  return (
    <div className="App">
      <Navbar {...weather} />
      <Main {...weather} />
      <Search city={city} setCity={setCity} />
    </div>
  );
}

export default App;
