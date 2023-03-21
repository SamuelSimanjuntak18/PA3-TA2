import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { CardGroup } from 'react-bootstrap';
import MitigasiBencana from '../assets/images/mitigasi bencana.png';
import EdukasiGempa from '../assets/images/edukasi gempa.png';
import PeringatanDini from '../assets/images/peringatan dini.png'

import '../styles/mitigasi.css';
import Footer from "../components/Footer";
function Mitigasi() {
  return (
    <div className='position-relative'>
      <div className='container'>
        <div className='caption-image'>
          <img src={MitigasiBencana} alt='image not found' className='image-mitigasi' />
          <h1 className='text-page'>MITIGASI BENCANA</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>BUKU PANDUAN EDUKASI BENCANA</h5>
          </div>
        </div>
      </div>

      <div className='container mb-5 buku-panduan'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-md-3">
            <div class="card mx-auto">
              <img src={EdukasiGempa} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Pentingnya Sistem Peringatan Dini Bencana</p>
              </div>
              <div class="card-footer">
                <p>Tinjau Edukasi</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mx-auto">
              <img src={PeringatanDini} class="card-img-top" alt="..." />
              <div class="card-body">

                <p class="card-text">Pentingnya Sistem Peringatan Dini Bencana</p>
              </div>
              <div class="card-footer">
                <p>Tinjau Edukasi</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mx-auto">
              <img src={EdukasiGempa} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Siaga Bencana Gempa Bumi</p>
              </div>
              <div class="card-footer">
                <p>Tinjau Edukasi</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card mx-auto">
              <img src={PeringatanDini} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Siaga Bencana Gempa Bumi</p>
              </div>
              <div class="card-footer">
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

        <div className='container mb-5 buku-panduan'>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col-md-3">
              <div class="card mx-auto">
                <img src={EdukasiGempa} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Pentingnya Sistem Peringatan Dini Bencana</p>
                </div>
                <div class="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mx-auto">
                <img src={PeringatanDini} class="card-img-top" alt="..." />
                <div class="card-body">

                  <p class="card-text">Pentingnya Sistem Peringatan Dini Bencana</p>
                </div>
                <div class="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mx-auto">
                <img src={EdukasiGempa} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Siaga Bencana Gempa Bumi</p>
                </div>
                <div class="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mx-auto">
                <img src={PeringatanDini} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Siaga Bencana Gempa Bumi</p>
                </div>
                <div class="card-footer">
                  <p>Tinjau Edukasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />

    </div>



    // <>
    // <CardGroup>
    //   <Card>
    //     <Card.Img variant="top" src="/assets/images/logo.PNG" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="/assets/images/logo.PNG" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.{' '}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src="/assets/images/logo.PNG" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>
    // </>

  );
}

export default Mitigasi;