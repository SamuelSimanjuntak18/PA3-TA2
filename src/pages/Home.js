import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import BanjirImage from "../assets/images/banjir.jpg";
import PemetaanMaps from "../components/PemetaanMaps";

const Home = ({ city }) => {
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

  return (
    <div>
      <div className="hero position-relative d-flex justify-content-center align-items-center">
        <img src={BanjirImage} className="overflow-hidden hero-image" alt="" />
        <div className="container position-relative hero-container ">
          <div className="row">
            <div className="col-md-6 text-start d-flex flex-column justify-content-center">
              <h1 className="text-hero">Anda Dalam Keadaan Darurat?</h1>
              <p className="subtext-hero">
                Sampaikan Laporan Peristiwa Darurat di Sekitar Anda!
              </p>
              <button className="btn-custom-danger">
                <a
                  href="/darurat"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <strong >LAPOR!</strong>
                </a>
              </button>
            </div>
            <div className="col-md-6">
              <div className="box d-flex justify-content-center align-items-center">
                <div className="peringatan-dini">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="warning-icon"
                  />
                  <hr className="hr-peringatan" />
                  <div className="p-3 fs-6">
                    <b>18 Februari 2023 | Laguboti</b>
                    <p>
                      Waspada potensi hujan sedang hingga lebat disertai
                      kilat/petir dan angin kencang pada sore hingga dini hari
                      di wilayah laguboti Sitoluama dan Sekitarnya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-7">
            <PemetaanMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
