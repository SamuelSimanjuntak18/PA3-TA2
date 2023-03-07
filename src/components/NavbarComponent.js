import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

export const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <strong>
            {" "}
            <br />
            <div className="logo">
              <center>
                {" "}
                <img
                  className="logo"
                  src="/assets/images/logo.PNG"
                  alt="Logo Tidak ditemukan"
                />
              </center>
            </div>
            Badan Penanggulangan Bencana Daerah
            <br /> Kabupaten Toba
          </strong>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="#Mitigasi">Mitigasi Bencana</Nav.Link>
            <Nav.Link href="#laporan">Laporan</Nav.Link>
            <NavDropdown title="Data Bencana" id="basic-nav-dropdown">
              <NavDropdown.Item href="Bencana Alam">
                Bencana Alam
              </NavDropdown.Item>
              <NavDropdown.Item href="Bencana Non Alam">
                Bencana Non Alam
              </NavDropdown.Item>
              <NavDropdown.Item href="Bencana Sosial">
                Bencana Sosial
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#login">Masuk</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
