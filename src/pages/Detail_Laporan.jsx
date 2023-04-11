import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const Cuaca = ({ title, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="row container">
        <div className="col-md-4 container py-2">
          <br />
          <Card style={{ width: '18rem' }}>
            <img src="/assets/images/banjirr.jpg" alt="Logo Kebencanaan" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary" onClick={handleShowModal}>
                Lihat Selengkapnya
              </Button>
            </Card.Body>
          </Card>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <center>
                <img
                  src="/assets/images/banjirr.jpg"
                  alt="Logo Kebencanaan"
                  style={{ width: '300px', height: '200px' }}
                />{' '}
                <br /> <br />
              </center>
              <button type="button" className="btn btn-warning">
                Pending
              </button>

              <br />
              <strong>Banjir</strong>
              <p>Banjir Huta II Jl. Protokol, Kelurahan Marihat Bandar</p>
              <p>
                Banjir akibat selokan yang dipenuhi dengan sampah dapat menjadi
                bencana lingkungan yang serius dan mengancam kehidupan manusia
                serta hewan yang tinggal di sekitar area tersebut.
              </p>
              <strong>Data Korban</strong>
              <p>
                Meninggal : 10 <br />
                Luka Berat : 10
                <br />
                Luka Ringan : 10
                <br />
                Hilang : 10
              </p>
              <strong>Kerusakan Infrastruktur</strong>
              <p>
                Rumah Umum : 10
                <br />
                Fasilitas : 10
                <br />
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <br />
          <br />
          <br />
        </div>
        <div className="col-md-4 container py-2">
          <br />
          <Card style={{ width: '18rem' }}>
            <img src="/assets/images/banjirr.jpg" alt="Logo Kebencanaan" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary" onClick={handleShowModal}>
                Lihat Selengkapnya
              </Button>
            </Card.Body>
          </Card>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <center>
                <img
                  src="/assets/images/banjirr.jpg"
                  alt="Logo Kebencanaan"
                  style={{ width: '300px', height: '200px' }}
                />{' '}
                <br /> <br />
              </center>
              <button type="button" className="btn btn-warning">
                Pending
              </button>

              <br />
              <strong>Banjir</strong>
              <p>Banjir Huta II Jl. Protokol, Kelurahan Marihat Bandar</p>
              <p>
                Banjir akibat selokan yang dipenuhi dengan sampah dapat menjadi
                bencana lingkungan yang serius dan mengancam kehidupan manusia
                serta hewan yang tinggal di sekitar area tersebut.
              </p>
              <strong>Data Korban</strong>
              <p>
                Meninggal : 10 <br />
                Luka Berat : 10
                <br />
                Luka Ringan : 10
                <br />
                Hilang : 10
              </p>
              <strong>Kerusakan Infrastruktur</strong>
              <p>
                Rumah Umum : 10
                <br />
                Fasilitas : 10
                <br />
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <br />
          <br />
          <br />
        </div>
        <div className="col-md-4 container py-2">
          <br />
          <Card style={{ width: '18rem' }}>
            <img src="/assets/images/banjirr.jpg" alt="Logo Kebencanaan" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary" onClick={handleShowModal}>
                Lihat Selengkapnya
              </Button>
            </Card.Body>
          </Card>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <center>
                <img
                  src="/assets/images/banjirr.jpg"
                  alt="Logo Kebencanaan"
                  style={{ width: '300px', height: '200px' }}
                />{' '}
                <br /> <br />
              </center>
              <button type="button" className="btn btn-warning">
                Pending
              </button>

              <br />
              <strong>Banjir</strong>
              <p>Banjir Huta II Jl. Protokol, Kelurahan Marihat Bandar</p>
              <p>
                Banjir akibat selokan yang dipenuhi dengan sampah dapat menjadi
                bencana lingkungan yang serius dan mengancam kehidupan manusia
                serta hewan yang tinggal di sekitar area tersebut.
              </p>
              <strong>Data Korban</strong>
              <p>
                Meninggal : 10 <br />
                Luka Berat : 10
                <br />
                Luka Ringan : 10
                <br />
                Hilang : 10
              </p>
              <strong>Kerusakan Infrastruktur</strong>
              <p>
                Rumah Umum : 10
                <br />
                Fasilitas : 10
                <br />
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Cuaca;
