import React from 'react'
import { Card, Button } from 'react-bootstrap';
export default function BencanaAlam() {
  return (
   
   <>
   <br />
    <h2>Data Bencana Alam</h2>
    <div className="container">
  <div className="row">
    <div className="col-md-4 py-2">
      <Card style={{ width: '20rem', height: 'auto' }} className="card-custom">
        <img src="/assets/images/banjirr.jpg" alt="Logo Kebencanaan" className="card-img-top" />
        <Card.Body>
          <Card.Title>judul</Card.Title>
          <Card.Text>dddd</Card.Text>
          <Button variant="primary">Lihat Selengkapnya</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-md-4 py-2">
      <Card style={{ width: '20rem', height: 'auto' }} className="card-custom">
        <img src="/assets/images/banjirr.jpg" alt="Logo Kebencanaan" className="card-img-top" />
        <Card.Body>
          <Card.Title>judul</Card.Title>
          <Card.Text>dddd</Card.Text>
          <Button variant="primary">Lihat Selengkapnya</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-md-4 py-2">
      <Card style={{ width: '20rem', height: 'auto' }} className="card-custom">
        <img src="/assets/images/banjirr.jpg" alt="Logo Kebencanaan" className="card-img-top" />
        <Card.Body>
          <Card.Title>judul</Card.Title>
          <Card.Text>dddd</Card.Text>
          <Button variant="primary">Lihat Selengkapnya</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>

<br /><br /> <br />
   </>
  )
}
