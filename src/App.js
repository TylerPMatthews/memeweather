import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";
import axios from "axios";
import styled from "styled-components";
const StyledApp = styled.div`
  h2 {
    color: red;
    text-align: center;
    margin-top: 5%;
    font-family: "Architects Daughter", cursive;
  }
  .search-box {
    display: flex;
    justify-content: center;
  }
  input {
    text-align: center;
    box-sizing: border-box;
    border: 2px solid black;
    font-size: 1.3rem;
   
  }
  .no-weather {
    text-align: center;
    margin-top: 15%;
    font-size: 1.5rem;
    color: red;
    margin-right: 5%;
    margin-left: 5%;
    font-family: "Architects Daughter", cursive;
  }
  .send-button{
    display:flex;
    justify-content:center;
    margin-top:5%;
  }
  button {
    font-size: 1rem;
    border-radius: 6px;
    color: red;
    background-color: black;
    border-color: red;
    font-family: "Architects Daughter", cursive;
    text-align:center;
  }
  button:hover {
    color: white;
    border-color: white;
    cursor:pointer;
  }
  footer p {
    text-align: center;
    font-family: "Architects Daughter", cursive;
    color: white;
    margin:10% 0;
  }
 
`;
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState();
 
  const clearWeather = () => {
    setWeather(undefined)
  }
  const search = (evt) => {
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
  };
  const onSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <StyledApp>
      <h2>Meme Weather</h2>
      <div className="search-box">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="City, State"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          ></input>
          <div className='send-button'>
          <button>Send Weather</button>
          </div>
        </form>
      </div>

      {weather === undefined ? (
        <div className="no-weather">
          <p>No weather to display</p>
          <p>Press Send Weather to submit your city , state</p>
        </div>
      ) : (
        <Weather weather={weather} clearWeather={clearWeather}/>
      )}

      <footer>
        <p>Meme Weather 2020</p>
      </footer>
    </StyledApp>
  );
}

export default App;
