import React from "react";
import BanjirImage from "assets/images/report.png";
import Card from "react-bootstrap/Card";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col,Row } from 'react-bootstrap';
import Footer from "../components/Footer";
import "../styles/Report.css";

function darurat() {
  return (
    <>
      <div>
        <div className="hero position-relative d-flex justify-content-center align-items-center">
          <img
            src={BanjirImage}
            className="overflow-hidden hero-image"
            alt=""
          />
          <div className="container position-relative hero-container ">
            <div className="row">
              <div className="col-md-10 text-sta d-flex flex-column justify-content-center">
                <h1>LAPOR</h1>
                <p className="subtext-hero">
                  Siap Membantu Masyarakat Dalam Situasi Gawat Darurat
                </p>
              </div>
            </div>
          </div>
        </div>
        <Row>
        <Col md={4}>
        <div className="container mt-5 mb-9">
          <div className="row">
            <div className="col-md-6">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards">
                <br />
                <Card.Title >Dinas Pemadam Kebakaran</Card.Title>
                <Card.Img variant="top" src="/assets/images/damkar.png" />
                <Card.Body>
                  <Card.Text>
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        </Col>
        <Col md={4}>
        <div className="container mt-5 mb-9">
          <div className="row">
            <div className="col-md-12">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards">
                <br />
                <Card.Title>Dinas Pemadam Kebakaran</Card.Title>
                <Card.Img variant="top" src="/assets/images/damkar.png" />
                <Card.Body>
                  <Card.Text>
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        </Col>
        <Col md={4}>
        <div className="container mt-5 mb-9">
          <div className="row">
            <div className="col-md-12">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards">
                <br />
                <Card.Title>Dinas Pemadam Kebakaran</Card.Title>
                <Card.Img variant="top" src="/assets/images/damkar.png" />
                <Card.Body>
                  <Card.Text>
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        </Col>
        <Col md={4}>
        <div className="container mt-5 mb-9">
          <div className="row">
            <div className="col-md-12">
              <Card style={{ width: "20rem", height: "22rem"}}className="cards" >
                <br />
                <Card.Title>Dinas Pemadam Kebakaran</Card.Title>
                <Card.Img variant="top" src="/assets/images/damkar.png" />
                <Card.Body>
                  <Card.Text>
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        </Col>
        <Col md={4}>
        <div className="container mt-5 mb-9">
          <div className="row">
            <div className="col-md-12">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards">
                <br />
                <Card.Title>Dinas Pemadam Kebakaran</Card.Title>
                <Card.Img variant="top" src="/assets/images/damkar.png" />
                <Card.Body>
                  <Card.Text>
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        </Col>
        <Col md={4}>
        <div className="container mt-5 mb-9">
          <div className="row">
            <div className="col-md-12">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards">
                <br />
                <Card.Title>Dinas Pemadam Kebakaran</Card.Title>
                <Card.Img variant="top" src="/assets/images/damkar.png" />
                <Card.Body>
                  <Card.Text>
                    <button className="darurat">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                      <strong>0811 6212 119</strong>
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        </Col>
        </Row>
      </div>
      <Footer/>
    </>
  );
}

export default darurat;
