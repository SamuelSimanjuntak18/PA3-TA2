import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q= Medan&appid=a48f1558de3938d6cb3af48c90463ae4&units=metric"
      );
      setWeatherData(response.data);
    };
    fetchData();
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, description, icon } = weatherData.weather[0];
  const temperature = weatherData.main.temp;

  return (
    <div>
      <h2>{city}</h2>
      <p>{main}</p>
      <p>{description}</p>
      <p>{temperature} &deg;C</p>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt={description}
      />
    </div>
  );
};

export default Weather;