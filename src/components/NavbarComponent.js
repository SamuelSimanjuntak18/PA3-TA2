import React from 'react'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

export const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">

      <Container>
      <div className="logo">
       
       <img className='logo' src="/assets/images/logo.PNG" alt="Logo Tidak ditemukan" />
     </div>
        <Navbar.Brand href="#home"><strong>  <br />BPBD TOBA</strong> </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#MitigasiBencana">Mitigasi Bencana</Nav.Link>
            <Nav.Link href="#laporan">Laporan</Nav.Link>
            <NavDropdown title="Data Bencana" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bencana Alam</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bencana Non Alam
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bencana Sosial</NavDropdown.Item>


            </NavDropdown>
            <Nav.Link href="#login">Masuk</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
