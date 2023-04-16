import "./Search.css";
import React, { useState } from "react";

function Search({ city, setCity }) {
  const [inputCity, setInputCity] = useState("");
  return (
    <div className="search">
      <form>
        <input
          value={inputCity}
          type="text"
          placeholder="search city..."
          onChange={(e) => {
            setInputCity(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity(inputCity);
            setInputCity("");
          }}
        >
          ok
        </button>
      </form>
    </div>
  );
}

export default Search;
