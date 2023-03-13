import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    
    <>
      <div className="latar">
        <strong className="peringatan">Anda Dalam Darurat?</strong>
        <button className="tombol" >
        <a href="/laporan"  style={{ textDecoration: 'none', color: 'white' }}><strong>LAPOR!</strong></a>
          
        </button>
        <strong className="warnings">
          Sampaikan Laporan Peristiwa Darurat di Sekitar Anda
        </strong>
      </div>
      <div
        style={{
          position: "absolute",
          boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25);",
          top: "50%",
          right:"100%",
          width:"500px",
          left: "80%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#FE9705",
          padding: "1rem",
          color: "white",
          
        
        }}>
    <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
    <hr style={{
      borderTop: '5px solid white',
      fontWeight: 'bold',
      transform:"rotate(180deg)",

    }} />
        <h4>18 Februari 2023 | Laguboti </h4>
  
        <p>
          Waspada potensi hujan sedang hingga lebat disertai kilat/petir dan
          angin kencang pada sore hingga dini hari di wilayah laguboti Sitoluama
          dan Sekitarnya.
        </p>
      </div>
      <div>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </strong>
      </div>
      
    </>
  );
}
