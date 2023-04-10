import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import BanjirImage from '../assets/images/banjir.jpg';
import PemetaanMaps from '../components/PemetaanMaps';
import HujanImage from '../assets/images/hujan.png';
import BerawanImage from '../assets/images/berawan.png';
import KabutImage from '../assets/images/kabut.png';
import HujanLebatImage from '../assets/images/hujan_lebat.png';
import HujanSedangImage from '../assets/images/hujan_sedang.png';
import '../styles/Home.css';
import NewestReport from '../components/NewestReport';

const Home = () => {
  const [weatherData, setWeatherData] = useState([]);

  const [weatherDesc, setWeatherDesc] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://cuaca-gempa-rest-api.vercel.app/weather/sumatera-utara/balige'
    );
    const data = await response.json();

    setWeatherData(data.data);

    setWeatherDesc(data.data.params.filter((item) => item.id === 'weather')[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const year = dateString.substr(0, 4);
    const month = dateString.substr(4, 2) - 1; // dikurangi 1 karena indeks bulan dimulai dari 0
    const day = dateString.substr(6, 2);
    const hour = dateString.substr(8, 2);
    const minute = dateString.substr(10, 2);
    const date = new Date(year, month, day, hour, minute);
    const formattedDate = date.toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      // second: '',
      hour12: false,
    });

    return formattedDate;
  };

  return (
    <>
      <div className="hero position-relative d-flex justify-content-center align-items-center">
        <img src={BanjirImage} className="overflow-hidden hero-image" alt="" />
        <div className="container position-relative hero-container">
          <div className="row">
            <div className="col-md-6 col-sm-5 text-start d-flex flex-column justify-content-center left-hero">
              <h1 className="text-hero">Anda Dalam Keadaan Darurat?</h1>
              <p className="subtext-hero">
                Sampaikan Laporan Peristiwa Darurat di Sekitar Anda!
              </p>
              <button className="btn-custom-danger">
                <a
                  href="/darurat"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <strong>LAPOR!</strong>
                </a>
              </button>
            </div>
            <div className="col-md-6 col-sm-7 right-hero">
              <div className="box d-flex justify-content-center align-items-center">
                <div className="peringatan-dini-hero">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="warning-icon"
                  />
                  <hr className="hr-peringatan" />
                  <div className="p-3 fs-6">
                    <b style={{ fontFamily: 'Inter' }}>
                      18 Februari 2023 | Laguboti
                    </b>
                    <p style={{ fontFamily: 'Inter' }}>
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
      <div className="container">
        <div className="col-md-12">
          <div className="box d-flex justify-content-center align-items-center">
            <div className="peringatan-dini text-white">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="warning-icon"
              />
              <hr className="hr-peringatan" />
              <div className="p-3 fs-6">
                <b>18 Februari 2023 | Laguboti</b>
                <p>
                  Waspada potensi hujan sedang hingga lebat disertai kilat/petir
                  dan angin kencang pada sore hingga dini hari di wilayah
                  laguboti Sitoluama dan Sekitarnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-blue p-1 text-white">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-7 mb-5">
              <h5 className="text-start mb-3 fw-bold">
                PETA DAERAH RAWAN BENCANA
              </h5>
              <PemetaanMaps />
            </div>
            <div className="col-md-5 md-7">
              <h5 className="text-start mb-3 fw-bold ">PRAKIRAAN CUACA</h5>
              <div
                className="bg-primary w-100 text-white text-start p-3 box-weather shadow "
                style={{ backgroundColor: '#0255A5' }}
              >
                <h3>{weatherData.description}</h3>
                <div className="d-flex overflow-auto shadow  ">
                  {weatherDesc.times &&
                    weatherDesc.times.map((item, index) => (
                      <div
                        className="mt-5 ms-3 border px-3 cuaca-box "
                        key={index}
                      >
                        <img
                          src={
                            item.name === 'Hujan Lebat'
                              ? HujanLebatImage
                              : item.name === 'Kabut'
                              ? KabutImage
                              : item.name === 'Berawan'
                              ? BerawanImage
                              : item.name === 'Hujan Ringan'
                              ? HujanImage
                              : item.name === 'Hujan Sedang'
                              ? HujanSedangImage
                              : ''
                          }
                          alt=""
                        />
                        <p>{formatDate(item.datetime)}</p>
                        <p>{item.name}</p>
                      </div>
                    ))}
                </div>
                {/* <p>{weatherData.params.id}</p> */}
              </div>
              {/* <img
                src="/assets/images/prakiraan.png"
                alt="Logo Kebencanaan"
                style={{ width: "580px", height: "350px" }}
              /> */}
            </div>
          </div>
        </div>
      </section>
      <NewestReport />
      <section className="bg-blue p-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="fw-bold my-5 text-white">PENGUMUMAN</h5>
              <div className="row">
                <div className="col-md-3">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        <button
                          className="btn btn-primary"
                          style={{
                            marginRight: '-50%',
                            backgroundColor: '#0255A5',
                          }}
                        >
                          <a
                            href="/pengumuman"
                            style={{ textDecoration: 'none', color: 'white' }}
                          >
                            <strong>Baca Selengkapnya&gt;&gt;</strong>
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body text-start">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        <button
                          className="btn btn-primary"
                          style={{
                            marginRight: '-50%',
                            backgroundColor: '#0255A5',
                          }}
                        >
                          <a
                            href="/pengumuman"
                            style={{ textDecoration: 'none', color: 'white' }}
                          >
                            <strong>Baca Selengkapnya&gt;&gt;</strong>
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
        <div className="sharethis-sticky-share-buttons"></div>
        <div className="col-md-12 ftco-animate"></div>
      </div>
    </div> */}
                <div className="col-md-3">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        <button
                          className="btn btn-primary"
                          style={{
                            marginRight: '-50%',
                            backgroundColor: '#0255A5',
                          }}
                        >
                          <a
                            href="/pengumuman"
                            style={{ textDecoration: 'none', color: 'white' }}
                          >
                            <strong>Baca Selengkapnya&gt;&gt;</strong>
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        <button
                          className="btn btn-primary"
                          style={{
                            marginRight: '-50%',
                            backgroundColor: '#0255A5',
                          }}
                        >
                          <a
                            href="/pengumuman"
                            style={{ textDecoration: 'none', color: 'white' }}
                          >
                            <strong>Baca Selengkapnya&gt;&gt;</strong>
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;