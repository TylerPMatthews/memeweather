import React, { useState } from "react";
import styled from "styled-components";
const StyledWeather = styled.div`
  h2 {
    font-size: 1.3rem;
  }
  p {
    text-align: center;
  }
  .date-container {
    display: flex;
    justify-content: center;
  }
  .img-container {
    display: flex;
    justify-content: center;
  }
  .meme-container {
    display: flex;
    justify-content: center;
  }
  img {
    width: 15rem;
    height: 15rem;
  }
  .date-container {
    margin-bottom: 3%;
  }

  .weather-container img {
    width: 5rem;
    height: 5rem;
  }
`;

//image arrays

const coldDay = [
  "https://sayingimages.com/wp-content/uploads/walked-outside-cold-weather-meme.png",
  "https://sayingimages.com/wp-content/uploads/cold-weather-im-gonna-need-a-bigger-coat-meme.jpg",
  "https://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme6-600x632.png",
];
const randomcoldDay = coldDay[Math.floor(Math.random() * coldDay.length)];

const niceDay = [
  "https://media.makeameme.org/created/its-so-nice-89zq6x.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLe0OW_ifPC7ZwiFFrgjKRMl2nhEbrebzG3A&usqp=CAU",
];
const randomNiceDay = niceDay[Math.floor(Math.random() * niceDay.length)];

const snow = [
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:564/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-bread-eggs.jpg",
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:300/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-coming-street.jpg",
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:533/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-mosqutios.jpg",
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:442/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-snowman-yes.jpg",
];
const randomSnow = snow[Math.floor(Math.random() * snow.length)];

const rain = [
  "https://images7.memedroid.com/images/UPLOADED857/5f38ed7e5bbfb.jpeg",
  "https://images3.memedroid.com/images/UPLOADED498/5def9cd0b279e.jpeg",
  "https://images7.memedroid.com/images/UPLOADED905/5d46836e78d4f.jpeg",
  "https://images3.memedroid.com/images/UPLOADED354/599675638a4cc.jpeg",
];
const randomRain = rain[Math.floor(Math.random() * rain.length)];

const coverWeather = [
  "https://meme-generator.com/wp-content/uploads/mememe/2020/04/mememe_f780462e215782a74a1a52657353712e-1.jpg",
  "https://memegenerator.net/img/instances/48553741.jpg",
];
const randomcoverWeather =
  coverWeather[Math.floor(Math.random() * coverWeather.length)];

export default function Weather(props) {
  //current date
  const buildDate = (d) => {
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `;
  };

  return (
    <StyledWeather>
      <main>
        <div>
          <div className="location-container">
            <h2>
              {props.weather.location.name} , {props.weather.location.region}
            </h2>
          </div>
          <div className="date-container">{buildDate(new Date())}</div>
          {props.weather.current.temp_f < "39" &&
          props.weather.current.condition.text === "Sunny" ? ( //Sunny cold weather
            <div className="meme-container">
              <img src={randomcoldDay} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f < "39" &&
          props.weather.current.condition.text === " Partly cloudy" ? ( //pCloudy cold weather
            <div className="meme-container">
              <img src={randomcoldDay} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f < "39" &&
          props.weather.current.condition.text === "Cloudy" ? ( //Cloudy cold weather
            <div className="meme-container">
              <img src={randomcoldDay} alt="sunny funny weather" />
            </div>
          ) : null}

          {props.weather.current.temp_f > "50" &&
          props.weather.current.condition.text === "Sunny" ? ( //Sunny warm weather
            <div className="meme-container">
              <img src={randomNiceDay} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f > "50" &&
          props.weather.current.condition.text === "Partly cloudy" ? ( //pCloudy warm weather
            <div className="meme-container">
              <img src={randomNiceDay} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.condition.text === "Snow" ||
          props.weather.current.condition.text === "Light snow" ||
          props.weather.current.condition.text === "Heavy snow" ? ( //Snow
            <div className="meme-container">
              <img src={randomSnow} alt="snow funny weather" />
            </div>
          ) : null}

          {props.weather.current.condition.text === "Rain" || //rain
          props.weather.current.condition.text === "Light rain" ||
          props.weather.current.condition.text === "Heavy rain" ||
          props.weather.current.condition.text === "Mist" ? (
            <div className="meme-container">
              <img src={randomRain} alt="snow funny weather" />
            </div>
          ) : null}

          {props.weather.current.temp_f >= "39" && //Cover Weather
          props.weather.current.temp_f <= "49" &&
          props.weather.current.condition.text === "Sunny" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="sunny funny weather" />
            </div>
          ) : null}
            {props.weather.current.temp_f >= "39" && //Cover Weather
          props.weather.current.temp_f <= "49" &&
          props.weather.current.condition.text === "Clear" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="Clear funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f >= "39" && //Cover weather
          props.weather.current.temp_f <= "49" &&
          props.weather.current.condition.text === "Partly cloudy" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f >= "39" && //Cover weather
          props.weather.current.temp_f <= "49" &&
          props.weather.current.condition.text === "Cloudy" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.condition.text === "Overcast" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="sunny funny weather" />
            </div>
          ) : null}
          <div className="weather-container">
            <p>Temp: {Math.round(props.weather.current.temp_f)}f</p>
            <p>Condition: {props.weather.current.condition.text}</p>
            <div className="img-container">
              <img
                src={props.weather.current.condition.icon}
                alt={props.weather.current.condition.code}
              />
            </div>
            <p>Wind MPH: {props.weather.current.wind_mph} mph</p>
            <p>Wind Direction: {props.weather.current.wind_dir}</p>
            <p>Humidity: {props.weather.current.humidity} %</p>
            <p>Feels like: {Math.round(props.weather.current.feelslike_f)} f</p>
          </div>
        </div>
      </main>
    </StyledWeather>
  );
}
