import React from "react";
import styled from "styled-components";
const StyledWeather = styled.div`
  h2 {
    font-size: 1.3rem;
  }
  p {
    text-align: center;
    color: white;
  }
  .date-container {
    display: flex;
    justify-content: center;
    color: black;
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
    color: white;
  }

  .weather-container img {
    width: 5rem;
    height: 5rem;
  }
  .clear-button{
    display:flex;
    justify-content:center;
    margin:5% 0;
  }
`;

//image arrays

const coldDay = [
  "https://sayingimages.com/wp-content/uploads/walked-outside-cold-weather-meme.png",
  "https://sayingimages.com/wp-content/uploads/cold-weather-im-gonna-need-a-bigger-coat-meme.jpg",
  "https://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme6-600x632.png",
  "https://sayingimages.com/wp-content/uploads/cold-weather-winter-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/cold-weather-wake-up-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/cold-weather-got-me-like-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/frost-bite-cold-weather-meme.png",
  "https://sayingimages.com/wp-content/uploads/cold-weather-i-walk-outside-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/cold-weather-cant-wait-for-winter-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/really-likes-the-cold-weather-meme.jpg",
];
const randomcoldDay = coldDay[Math.floor(Math.random() * coldDay.length)];

const niceDay = [
  "https://media.makeameme.org/created/its-so-nice-89zq6x.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLe0OW_ifPC7ZwiFFrgjKRMl2nhEbrebzG3A&usqp=CAU",
  "https://sayingimages.com/wp-content/uploads/hot-weather-im-so-happy-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/not-sure-hot-weather-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/hot-weather-dog-starts-melting-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/hot-weather-too-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/hot-weather-dear-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/hot-weather-meme-1.jpg",
  "https://sayingimages.com/wp-content/uploads/hot-weather-memes.jpg",
  "https://sayingimages.com/wp-content/uploads/its-hot-outside-but-the-jacket-completes-the-outfit-meme.jpg",
  "https://sayingimages.com/wp-content/uploads/hot-weather-car-meme.jpg",
];
const randomNiceDay = niceDay[Math.floor(Math.random() * niceDay.length)];

const snow = [
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:564/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-bread-eggs.jpg",
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:300/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-coming-street.jpg",
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:533/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-mosqutios.jpg",
  "https://thefunnybeavercomd030b.zapwp.com/q:ultra/retina:true/webp:false/w:442/url:https://thefunnybeaver.com/wp-content/uploads/2018/11/funny-snowman-yes.jpg",
  "https://sayingimages.com/wp-content/uploads/cold-weather-wipers-up-meme.jpg",
  "https://memecentral.org/wp-content/uploads/2019/09/when-your-to-lazy-to-get-rid-of-snow...-snow-meme.jpg",
  "https://memecentral.org/wp-content/uploads/2019/09/tired-of-snow-meme.jpg",
  "https://memecentral.org/wp-content/uploads/2019/09/snow-panic-meme.jpg",
  "https://memecentral.org/wp-content/uploads/2019/09/snow-dog-meme.jpg",
  "https://memecentral.org/wp-content/uploads/2019/09/snow-day-meme-work.jpg",
  "https://memecentral.org/wp-content/uploads/2019/09/snow-dance-meme.jpg",
  "https://memecentral.org/wp-content/uploads/2019/09/oh-dont-worry-itS-just-a-dusting-snow-meme.jpg",
];
const randomSnow = snow[Math.floor(Math.random() * snow.length)];

const rain = [
  "https://images7.memedroid.com/images/UPLOADED857/5f38ed7e5bbfb.jpeg",
  "https://images3.memedroid.com/images/UPLOADED498/5def9cd0b279e.jpeg",
  "https://images7.memedroid.com/images/UPLOADED905/5d46836e78d4f.jpeg",
  "https://images3.memedroid.com/images/UPLOADED354/599675638a4cc.jpeg",
  "https://www.memesmonkey.com/images/memesmonkey/62/629f514a372ab760896df3b71ab3458e.jpeg",
  "https://www.memesmonkey.com/images/memesmonkey/62/62cee65e9323997fdc243e420c2ddf2e.jpeg",
  "https://www.memesmonkey.com/images/memesmonkey/c0/c0f7607487b7e68b59b205d25910fdcd.jpeg",
  "https://www.memesmonkey.com/images/memesmonkey/77/77ee8e25bd105721ef7bd3825846e165.jpeg",
  "https://www.memesmonkey.com/images/memesmonkey/34/34000ccd3c8d4a339f653edad203bf86.jpeg",
];
const randomRain = rain[Math.floor(Math.random() * rain.length)];

const coverWeather = [
  "https://meme-generator.com/wp-content/uploads/mememe/2020/04/mememe_f780462e215782a74a1a52657353712e-1.jpg",
  "https://memegenerator.net/img/instances/48553741.jpg",
  "https://64.media.tumblr.com/tumblr_m1gz5730b41rohs3fo1_400.jpg",
  "https://cdn.guff.com/site_0/media/33000/32179/items/072619be3f312eda10254537.jpg",
  "https://img.memecdn.com/weather-stone_o_2629693.jpg",
  "https://img.memecdn.com/a-rainbow-holds-back-the-bad-weather_o_1391083.jpg",
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
          props.weather.current.condition.text === "Partly cloudy" ? ( //pCloudy cold weather
            <div className="meme-container">
              <img src={randomcoldDay} alt="sunny funny weather" />
            </div>
          ) : null}

          {props.weather.current.temp_f > "59" &&
          props.weather.current.condition.text === "Sunny" ? ( //Sunny warm weather
            <div className="meme-container">
              <img src={randomNiceDay} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f > "59" &&
          props.weather.current.condition.text === "Partly cloudy" ? ( //pCloudy warm weather
            <div className="meme-container">
              <img src={randomNiceDay} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f > "59" &&
          props.weather.current.condition.text === "Clear" ? ( //Clear warm weather
            <div className="meme-container">
              <img src={randomNiceDay} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.condition.text === "Snow" ||
          props.weather.current.condition.text === "Light snow" ||
          props.weather.current.condition.text === "Heavy snow" ||
          props.weather.current.condition.text === "Patchy light snow" ||
          props.weather.current.condition.text === "Blizzard" ? ( //Snow
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
          props.weather.current.temp_f <= "59" &&
          props.weather.current.condition.text === "Sunny" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f >= "39" && //Cover Weather
          props.weather.current.temp_f <= "59" &&
          props.weather.current.condition.text === "Clear" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="Clear funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f >= "39" && //Cover weather
          props.weather.current.temp_f <= "59" &&
          props.weather.current.condition.text === "Partly cloudy" ? (
            <div className="meme-container">
              <img src={randomcoverWeather} alt="sunny funny weather" />
            </div>
          ) : null}
          {props.weather.current.temp_f >= "39" && //Cover weather
          props.weather.current.temp_f <= "59" &&
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
            <div className='clear-button'>
            <button onClick={props.clearWeather}>Clear Weather</button>
            </div>
          </div>
        </div>
      </main>
    </StyledWeather>
  );
}
