import React, { useState } from 'react';
import BanjirImage from '../assets/images/report.png';
import Card from 'react-bootstrap/Card';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import '../styles/Report.css';

function Darurat() {
  const [open, setOpen] = useState(true);
  const [opens, setOpens] = useState(false);
  const toggleOpen = () => {
    setOpen(true);
    setOpens(false);
  };

  const toggleOpens = () => {
    setOpens(true);
    setOpen(false);
  };
  const [option, setOption] = useState('Bencana');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server
  };

  const handleAvatarChange = (event) => {};

  return (
    <>
      <div className="hero position-relative d-flex justify-content-center align-items-center">
        <img src={BanjirImage} className="overflow-hidden hero-image" alt="" />
        <div className="container position-relative hero-container ">
          <div className="row">
            <div className="col-md-12 text-sta d-flex flex-column justify-content-center align-items-center">
              <div className="position-absolute w-100">
                <h1
                  style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: '70px',
                    fontWeight: '700',
                  }}
                >
                  LAPOR
                </h1>
                <p
                  style={{
                    fontWeight: '300',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: '25px',
                  }}
                >
                  Siap Membantu Masyarakat Dalam Situasi Gawat Darurat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active border"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link border"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div id="">
            <div className="container">
              <div class="row container">
                <div class="col-md-4 container py-2">
                  <Card
                    style={{ width: '20rem', height: '22rem' }}
                    className="cards  container"
                  >
                    <br />
                    <Card.Title>
                      <p> Dinas Pemadam Kebakaran</p>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src="/assets/images/damkar.png"
                      className="damkar"
                    />
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      &nbsp;
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card>
                </div>
                <div class="col-md-4 container py-2">
                  <Card
                    style={{ width: '20rem', height: '22rem' }}
                    className="cards  container"
                  >
                    <br />
                    <Card.Title>
                      <p> Dinas Pemadam Kebakaran</p>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src="/assets/images/damkar.png"
                      className="damkar"
                    />
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      &nbsp;
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card>
                </div>
                <div class="col-md-4 container py-2">
                  <Card
                    style={{ width: '20rem', height: '22rem' }}
                    className="cards  container"
                  >
                    <Card.Title>
                      <p> Dinas Pemadam Kebakaran</p>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src="/assets/images/damkar.png"
                      className="damkar"
                    />
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      &nbsp;
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card>
                </div>
                <div class="col-md-4 container py-2">
                  <Card
                    style={{ width: '20rem', height: '22rem' }}
                    className="cards  container"
                  >
                    <br />
                    <Card.Title>
                      <p> Dinas Pemadam Kebakaran</p>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src="/assets/images/damkar.png"
                      className="damkar"
                    />
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      &nbsp;
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card>
                </div>
                <div class="col-md-4 container py-2">
                  <Card
                    style={{ width: '20rem', height: '22rem' }}
                    className="cards  container"
                  >
                    <br />
                    <Card.Title>
                      <p> Dinas Pemadam Kebakaran</p>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src="/assets/images/damkar.png"
                      className="damkar"
                    />
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      &nbsp;
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card>
                </div>
                <div class="col-md-4 container py-2">
                  <Card
                    style={{ width: '20rem', height: '22rem' }}
                    className="cards  container"
                  >
                    <br />
                    <Card.Title>
                      <p className="judul"> Dinas Pemadam Kebakaran</p>
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src="/assets/images/damkar.png"
                      className="damkar"
                    />
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      &nbsp;
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <form onSubmit={handleSubmit} style={{ paddingBottom: '100px' }}>
            <fieldset>
              <legend>FORM PELAPORAN</legend>
              <h6 style={{ fontSize: '20px' }}>
                {' '}
                Jika anda ingin melaporkan berita terjadinya bencana alam,
                Silakan melaporkannya melalui form dibawah ini.
              </h6>
              <hr className=""></hr>
              <div className="form-group">
                <label htmlFor="option">Jenis Bencana</label>
                <select
                  id="option"
                  value={option}
                  onChange={(event) => setOption(event.target.value)}
                  required
                >
                  <option value="option1">Bencana Alam</option>
                  <option value="option2">Bencana Non Alam</option>
                  <option value="option3">Bencana Sosial </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Lokasi</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Lokasi Bencana"
                  // onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Keterangan">Keterangan</label>
                <textarea
                  type="text"
                  id="keterangan"
                  // value={deskripsi}
                  placeholder="Keterangan"
                  // onChange={(event) => setDeskripsi(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">Nomor Telepon</label>
                <input
                  type="text"
                  id="number"
                  placeholder="Nomor Telepon Aktif"
                  // onChange={(event) => setNumber(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gambar">Gambar</label>
                <input type="file" id="gambar" onChange={handleAvatarChange} />
              </div>
              <br />
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Darurat;
