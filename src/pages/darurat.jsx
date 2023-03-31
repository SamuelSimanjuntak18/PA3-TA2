import React, { useState } from "react";
import BanjirImage from "../assets/images/report.png";
import Card from "react-bootstrap/Card";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import "../styles/Report.css";

function darurat() {
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
  const [option, setOption] = useState("Bencana");
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
            <div className="col-md-10 text-sta d-flex flex-column justify-content-center">
              <h1
                style={{
                  position: "absolute",
                  width: "224px",
                  height: "82px",
                  left: "609px",
                  top: "-40px",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontSize: "70px",
                  fontWeight: "700",
                }}
              >
                LAPOR
              </h1>
              <p
                style={{
                  position: "absolute",
                  width: "900px",
                  height: "20px",
                  left: "300px",
                  top: "-100px",
                  fontWeight: "300",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontSize: "25px",
                }}
              >
                Siap Membantu Masyarakat Dalam Situasi Gawat Darurat
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Button
        className="btn-danger"
        style={{ width: "200px", height: "55px" }}
        onClick={toggleOpen}
      >
        Kontak Darurat
      </Button>{" "}
      &nbsp; &nbsp;
      <Button style={{ width: "200px", height: "55px" }} onClick={toggleOpens}>
        Lapor
      </Button>
      <br />
      <h2 style={{ fontFamily: "Roboto" }}>
        Keadaan Darurat?{" "}
        <span style={{ color: "red" }}>Segera Hubungi Kami!</span>
      </h2>
      <Fade in={open}>
        <div id="example-fade-text">
          <div className="container">
            <div class="row container">
              <div class="col-md-4 container py-2">
                <Card
                  style={{ width: "20rem", height: "22rem" }}
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
                  style={{ width: "20rem", height: "22rem" }}
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
                  style={{ width: "20rem", height: "22rem" }}
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
                  style={{ width: "20rem", height: "22rem" }}
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
                  style={{ width: "20rem", height: "22rem" }}
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
                  style={{ width: "20rem", height: "22rem" }}
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
      </Fade>
      <Fade in={opens}>
        <div id="example-fade-lapor">
          <div className="report">
            <form
              onSubmit={handleSubmit}
              style={{ paddingBottom: "100px" }}
              className="posisiform"
            >
              <fieldset>
                <legend>FORM PELAPORAN</legend>
                <h6 style={{ fontSize: "20px" }}>
                  {" "}
                  Jika anda ingin melaporkan berita terjadinya bencana alam,
                  Silakan melaporkannya melalui form dibawah ini.
                </h6>
                <hr className="garis"></hr>
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
                  <input
                    type="file"
                    id="gambar"
                    onChange={handleAvatarChange}
                  />
                </div>
                <br />
                <button type="submit">Submit</button>
              </fieldset>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default darurat;
