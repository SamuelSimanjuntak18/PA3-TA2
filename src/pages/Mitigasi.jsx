import React, { useState, useEffect } from "react";
import MitigasiBencana from "../assets/images/mitigasi bencana.png";
import "../styles/mitigasi.css";
import { instance } from "../apis/axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Mitigasi() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    instance
      .get("/mitigasi/bencana")
      .then((response) => {
        setReports(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(reports);

  return (
    <div className="position-relative">
      <div className="container">
        <div className="caption-image">
          <img
            src={MitigasiBencana}
            alt="image not found"
            className="image-mitigasi"
          />
          <h1 className="text-page">MITIGASI BENCANA</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>BUKU PANDUAN EDUKASI BENCANA</h5>
          </div>
        </div>
      </div>
      {reports ? (
        <div className="container mb-5 buku-panduan">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {reports
              .filter((report) => report.attributes.file.includes(".pdf"))
              .slice(0, 3)
              .map((report, index) => (
                <div className="col-md-3" key={index}>
                  <div
                    className="card mx-auto"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      className="card-img-top"
                      style={{
                        borderRadius: "5px 5px 0 0",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={`http://localhost:8000/mitigasi/${report.attributes.file}`}
                      alt={report.attributes.file}
                    />
                    <div className="card-body" style={{ flexGrow: 1 }}>
                      <p className="card-text">{report.attributes.title}</p>
                      <p>{report.attributes.deskripsi}</p>
                      {/* style={{ textDecoration: 'none', color: 'white' }} */}
                      <div className="card-footer">
                        <Link
                          to={`mitigasi/${report.id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <p>Tinjau Edukasi</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>VIDEO PANDUAN EDUKASI BENCANA</h5>
          </div>
        </div>

        <div className="container mb-5 buku-panduan">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {reports ? (
              reports
                .filter((report) => report.attributes.file.includes(".mp4"))
                .slice(0, 3)
                .map((report) => (
                  <div className="col-md-3">
                    <div className="card mx-auto p-0">
                      <video>
                        <source
                          src={`http://localhost:8000/mitigasi/${report.attributes.file}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className="card-body">
                        <p className="card-text">{report.attributes.title}</p>
                        <p>{report.attributes.deskripsi}</p>
                      </div>
                      <div className="card-footer">
                        <Link
                          to={`mitigasi/${report.id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <p>Tinjau Edukasi</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <>
                <p>Loading</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mitigasi;
