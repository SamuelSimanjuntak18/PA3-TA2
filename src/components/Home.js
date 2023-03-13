import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Home = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q= Medan&appid=a48f1558de3938d6cb3af48c90463ae4&units=metric'
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
      <div className="container">
        <h2>{city}</h2>
        <p>{main}</p>
        <p>{description}</p>
        <p>{temperature} &deg;C</p>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
        />

        <div class="warning">
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
              Peringatan Dini
            </div>
            <div
              style={{
                borderLeft: '2px solid black',
                height: '90px',
                marginLeft: '1px',
                marginRight: '2px',
              }}
            ></div>
            <div className="date">
              <strong>18 Februari 2023 | Laguboti</strong>
              <br />
              <span style={{ textAlign: 'center' }}>
                Waspada potensi hujan sedang hingga lebat disertai kilat/petir
                dan angin kencang pada sore hingga dini hari di wilayah laguboti
                Sitoluama dan Sekitarnya.
              </span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
