import React, { useRef, useState } from "react";
import BanjirImage from "../assets/images/report.png";
import Card from "react-bootstrap/Card";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Report.css";
import lapor from "../apis/laporan/laporan";

function Darurat() {
  const jenis_bencana = useRef(null);
  const lokasi = useRef(null);
  const keterangan = useRef(null);
  const nama_bencana = useRef(null);
  const file = useRef(null);

  const [option, setOption] = useState("Bencana");
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('jenis_bencana', jenis_bencana.current.value);
    formData.append('lokasi', lokasi.current.value);
    formData.append('keterangan', keterangan.current.value);
    formData.append('nama_bencana', nama_bencana.current.value);
    var files = file.current.files[0];
    formData.append('file', files);
    formData.append('user_id', JSON.parse(localStorage.getItem('user_data'))['id']);
    lapor(formData);
    
  };

  const handleAvatarChange = (event) => { };

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
      </div>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active border btn "
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Kontak Darurat
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
              Lapor
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
              <div className="row container">
                <div className="col-md-4 container py-2">
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
                <div className="col-md-4 container py-2">
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
                <div className="col-md-4 container py-2">
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
                <div className="col-md-4 container py-2">
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
                <div className="col-md-4 container py-2">
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
                <div className="col-md-4 container py-2">
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
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          {/* <div style={{backgroundColor:"#0255A5"}}> */}
          <form onSubmit={handleSubmit} style={{ paddingBottom: "100px" }} className="control" encType="multipart/form-data">
            <fieldset>
              <legend>FORM PELAPORAN</legend>
              <h6 style={{ fontSize: "20px" }}>
                {" "}
                Jika anda ingin melaporkan berita terjadinya bencana alam,
                Silakan melaporkannya melalui form dibawah ini.
              </h6>
              <br />
              <h6 style={{ fontSize: "20px" }}>Hubungi No Berikut : <span style={{color:"red"}}> <b>No Telepon : 063221709</b> </span></h6>
              <hr className=""></hr>
              <div className="form-group">
                <label htmlFor="option">Jenis Bencana</label>
                <select
                  id="option"
                  value={option}
                  onChange={(event) => setOption(event.target.value)}
                  required
                  ref={jenis_bencana}
                  name="jenis_bencana"
                >
                  <option value="bencana alam">Bencana Alam</option>
                  <option value="bencana non alam">Bencana Non Alam</option>
                  <option value="bencana sosial">Bencana Sosial </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Lokasi</label>
                <input
                  type="text"
                  id="name"
                  name="lokasi"
                  placeholder="Lokasi Bencana"
                  ref={lokasi}
                  // onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nama Bencana</label>
                <input
                  type="text"
                  id="name"
                  name="nama_bencana"
                  placeholder="Lokasi Bencana"
                  ref={nama_bencana}
                  // onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Keterangan">Keterangan</label>
                <textarea
                  type="text"
                  id="keterangan"
                  name="keterangan"
                  // value={deskripsi}
                  ref={keterangan}
                  placeholder="Keterangan"
                  // onChange={(event) => setDeskripsi(event.target.value)}
                  required
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="number">Nomor Telepon</label>
                <input
                  type="text"
                  id="number"
                  placeholder="Nomor Telepon Aktif"
                  // onChange={(event) => setNumber(event.target.value)}
                  required
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="gambar">Gambar</label>
                <input type="file" id="gambar" ref={file} onChange={handleAvatarChange} />
              </div>
              <br />
              <button type="submit">Submit</button>
            </fieldset>
          </form>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Darurat;
