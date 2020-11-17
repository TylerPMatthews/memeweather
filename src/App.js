import React, { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";
import axios from "axios";
import styled from "styled-components";
const StyledApp = styled.div`
  h2 {
    color: red;
    text-align: center;
    margin-top: 5%;
    font-family: 'Architects Daughter', cursive;
  }
  .search-box {
    display: flex;
    justify-content: center;
  }
  input {
    text-align: center;
    box-sizing: border-box;
    padding: 0% 5%;
    border: 1px solid black;
    font-size: 1.3rem;
  }
  .no-weather {
    text-align: center;
    margin-top: 15%;
    font-size: 1.5rem;
    color: red;
    margin-right: 5%;
    margin-left: 5%;
    font-family: 'Architects Daughter', cursive;
  }
  .code {
    display: flex;
    justify-content: center;
  }
  button {
    font-size: 1.2rem;
    border-radius: 12px;
    margin-bottom: 5%;
    color: red;
    background-color: black;
    border-color: red;
    font-family: 'Architects Daughter', cursive;
  }
  button:hover {
    color: white;
    border-color:white;

  }
  footer p{
    text-align:center;
    font-family: 'Architects Daughter', cursive;
    color:black;
  }
`;
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState();
  const search = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=10cae7ec92fa4e47ac933047200611&q=${query}&days=1 `
        )
        .then((res) => {
          setQuery("");
          const weatherData = res.data;
          setWeather(weatherData);
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  return (
    <StyledApp>
      <h2>Meme Weather</h2>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="City, State"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        ></input>
      </div>

      {weather === undefined ? (
        <div className="no-weather">
          <p>No weather to display</p>
          <p>Press the Enter key to submit City,State</p>
        </div>
      ) : (
        <Weather weather={weather} />
      )}
      <div className="code">
        <button
          onClick={(evt) => {
            window.alert("Created by: https://github.com/TylerPMatthews");
          }}
        >
          Creator
        </button>
      </div>
      <footer>
        <p>Meme Weather 2020</p>
      </footer>
    </StyledApp>
  );
}

export default App;
