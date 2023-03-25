import React from "react";
import BanjirImage from "../assets/images/report.png";
import Card from "react-bootstrap/Card";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <h1 style={{
                  position: 'absolute',
                  width: '224px',
                  height: '82px',
                  left: '609px',
                    top: '-40px',
                    fontFamily:'Roboto',
                    fontStyle:'normal',
                    fontSize:"70px",
                    fontWeight:'700',
              
              }}>LAPOR</h1>
                <p style={{
                  position: 'absolute',
                  width: '900px',
                  height: '20px',
                  left: '300px',
                   top: '-100px',
                   fontWeight:"300",
                  fontFamily:'Roboto',
                  fontStyle:'normal',
                  fontSize:"25px",
                  


                
              
              }}>
                  Siap Membantu Masyarakat Dalam Situasi Gawat Darurat
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h2 style={{fontFamily: 'Roboto'}}>Keadaan Darurat? <span style={{color: 'red'}}>Segera Hubungi Kami!</span></h2>
      </div>
    <div className="container">
    <div class="row container">
            <div class="col-md-4 container py-2">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards  container">
                  <br />
                  <Card.Title ><p className="judul"> Dinas Pemadam Kebakaran</p></Card.Title>
                  <Card.Img variant="top" src="/assets/images/damkar.png" className="damkar"/>
                      <button className="darurat">
                        <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
                        <strong>0811 6212 119</strong>
                      </button>
                </Card>
            </div>
            <div class="col-md-4 container py-2">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards  container">
                  <br />
                  <Card.Title ><p className="judul"> Dinas Pemadam Kebakaran</p></Card.Title>
                  <Card.Img variant="top" src="/assets/images/damkar.png" className="damkar"/>
                      <button className="darurat">
                        <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
                        <strong>0811 6212 119</strong>
                      </button>
                </Card>
            </div>
            <div class="col-md-4 container py-2">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards  container">
                  <br />
                  <Card.Title ><p className="judul"> Dinas Pemadam Kebakaran</p></Card.Title>
                  <Card.Img variant="top" src="/assets/images/damkar.png" className="damkar"/>
                      <button className="darurat">
                        <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
                        <strong>0811 6212 119</strong>
                      </button>
                </Card>
            </div>
            <div class="col-md-4 container py-2">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards  container">
                  <br />
                  <Card.Title ><p className="judul"> Dinas Pemadam Kebakaran</p></Card.Title>
                  <Card.Img variant="top" src="/assets/images/damkar.png" className="damkar"/>
                      <button className="darurat">
                        <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
                        <strong>0811 6212 119</strong>
                      </button>
                </Card>
            </div>
            <div class="col-md-4 container py-2">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards  container">
                  <br />
                  <Card.Title ><p className="judul"> Dinas Pemadam Kebakaran</p></Card.Title>
                  <Card.Img variant="top" src="/assets/images/damkar.png" className="damkar"/>
                      <button className="darurat">
                        <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
                        <strong>0811 6212 119</strong>
                      </button>
                </Card>
            </div>
            <div class="col-md-4 container py-2">
              <Card style={{ width: "20rem", height: "22rem" }} className="cards  container">
                  <br />
                  <Card.Title ><p className="judul"> Dinas Pemadam Kebakaran</p></Card.Title>
                  <Card.Img variant="top" src="/assets/images/damkar.png" className="damkar"/>
                      <button className="darurat">
                        <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
                        <strong>0811 6212 119</strong>
                      </button>
                </Card>
            </div>

          
        </div>
    </div>
      
     
    </>
  );
}

export default darurat;
