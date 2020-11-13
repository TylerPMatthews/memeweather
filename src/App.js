import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";
import axios from "axios";
import styled from 'styled-components';
const StyledApp = styled.div`

h2{
  color:red;
  text-align:center;
  margin-top:5%;
}
.search-box{
  display:flex;
  justify-content:center;
}
input{
  text-align:center;
  box-sizing: border-box;
  padding:0% 5%;
  border:1px solid black;
  font-size:1.3rem;

  
}
.no-weather{
  text-align:center;
  margin-top:15%;
  font-size:1.5rem;
}
.code{
  display:flex;
  justify-content:center;
}
button{
  font-size:1.2rem;
  border-radius:12px;
  margin-bottom:5%;
}


`
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
        <div className='no-weather'>
        <p>No weather to display</p>
        </div>
      ) : (
      
        <Weather weather={weather} />
      )}
      <div className='code'>
      <button onClick={(evt)=>{
        window.alert('Created by: https://github.com/TylerPMatthews')
      }}>
      Creator
    </button>
    </div>
    </StyledApp>
    
  );
}

export default App;
