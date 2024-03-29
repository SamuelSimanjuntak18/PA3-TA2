import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



export const NavbarComponent = ({ isLoggedIn }) => {
  
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_data')
    window.location.reload();
  }


  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="logo">
              <center>
                <img
                  className="logo"
                  src="../assets/images/logo.PNG"
                  alt="Logo Tidak ditemukan"
                />
              </center>
            </div>
            <div className="text m ms-3 text-start">
              <p className="mb-0 brand-bold">
                Badan Penanggulangan Bencana Daerah
              </p>
              <p className="brand-regular mb-0">Kabupaten Toba</p>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="mitigasi">Mitigasi Bencana</Nav.Link>
            {/* <Nav.Link href="darurat">Lapor</Nav.Link> */}
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
            <Nav.Link href="Profil">Profil</Nav.Link>
            {isLoggedIn ? (
             <Nav.Link href="#" onClick={logout}>
             <FontAwesomeIcon icon={faSignOutAlt} /> Keluar
           </Nav.Link>
           
              ) : (
              <Nav.Link href="login">Masuk</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;