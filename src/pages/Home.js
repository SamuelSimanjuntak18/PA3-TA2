import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import BanjirImage from 'assets/images/banjir.jpg';
import PemetaanMaps from 'components/PemetaanMaps';
import '../styles/Home.css';
import Footer from 'components/Footer';

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


  return (
    <div>
      <div className="hero position-relative d-flex justify-content-center align-items-center">
        <img src={BanjirImage} className="overflow-hidden hero-image" alt="" />
        <div className="container position-relative hero-container ">
          <div className="row">
            <div className="col-md-6 col-sm-5 text-start d-flex flex-column justify-content-center left-hero">
              <h1 className="text-hero">Anda Dalam Keadaan Darurat?</h1>
              <p className="subtext-hero">
                Sampaikan Laporan Peristiwa Darurat di Sekitar Anda!
              </p>
              <button className="btn-custom-danger">
                <a href="/Report" style={{ textDecoration: 'none', color: 'white' }}><strong>LAPOR!</strong></a>
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
            <div className="col-md-7">
              <h5 className="text-start mb-3 fw-bold">
                PETA DAERAH RAWAN BENCANA
              </h5>
              <PemetaanMaps />
            </div>
            <div className="col-md-5">
              <h5 className="text-start mb-3 fw-bold">BENCANA TERKINI</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-oranye text-white p-1">
        <div className="container">
          <div className="col-md-12">
            <h5 className="fw-bold my-5">Prakiraan Cuaca</h5>
            <div className="mb-5 box-cuaca">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eos ipsam ad corporis! Recusandae soluta assumenda vero hic vitae!
              Tempora enim facilis in accusamus perferendis laborum. Fugit,
              laudantium! Fuga, impedit.
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue p-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="fw-bold my-5 text-white">Pengumuman</h5>
              <div className="row">
                <div className="col-md-3">
                  <div class="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      b5
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      b5
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      b5
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div class="card" style={{ width: '18rem' }}>
                    <img
                      src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted ">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      b5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <div className="container">
        <h2>{city}</h2>
        <p>{main}</p>
        <p>{description}</p>
        <p>{temperature} &deg;C</p>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
        />
      </div> */}
    </div>
  );
};

export default Home;
