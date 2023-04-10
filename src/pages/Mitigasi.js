import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { CardGroup } from 'react-bootstrap';
import MitigasiBencana from '../assets/images/mitigasi bencana.png';
import EdukasiGempa from '../assets/images/edukasi gempa.png';
import PeringatanDini from '../assets/images/peringatan dini.png';
import '../styles/mitigasi.css';

function Mitigasi() {
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
      <div className="container mb-5 buku-panduan">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-3">
            <div className="card mx-auto">
              <img src={EdukasiGempa} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Pentingnya Sistem Peringatan Dini Bencana
                </p>
              </div>
              <div className="card-footer">
                <p>Tinjau Edukasi</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mx-auto">
              <img src={PeringatanDini} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Pentingnya Sistem Peringatan Dini Bencana
                </p>
              </div>
              <div className="card-footer">
                <p>Tinjau Edukasi</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mx-auto">
              <img src={EdukasiGempa} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Siaga Bencana Gempa Bumi</p>
              </div>
              <div className="card-footer">
                <p>Tinjau Edukasi</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mx-auto">
              <img src={PeringatanDini} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Siaga Bencana Gempa Bumi</p>
              </div>
              <div className="card-footer">
                <p>Tinjau Edukasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>VIDEO PANDUAN EDUKASI BENCANA</h5>
          </div>
        </div>
        <div className="container mb-5 buku-panduan">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-md-3">
              <div className="card mx-auto">
                <img src={EdukasiGempa} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Pentingnya Sistem Peringatan Dini Bencana
                  </p>
                </div>
                <div className="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-auto">
                <img src={PeringatanDini} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Pentingnya Sistem Peringatan Dini Bencana
                  </p>
                </div>
                <div className="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-auto">
                <img src={EdukasiGempa} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Siaga Bencana Gempa Bumi</p>
                </div>
                <div className="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mx-auto">
                <img src={PeringatanDini} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Siaga Bencana Gempa Bumi</p>
                </div>
                <div className="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Mitigasi;
