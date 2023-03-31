import React from "react";
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <img className="logo"
              src="../assets/images/logo.PNG"
              alt="Logo Tidak ditemukan" />
            <h6>BPBD TOBA</h6>
          </div>
          <div className="col-lg-5">
            <h6>BPBD Kabupaten Toba</h6>
            <p>JL DI. Panjaitan, Toba Samosir, Balige, Sumatera Utara, <br />
              Indonesia.</p>
          </div>
          <div className="col-lg-2">
            <h6>Tentang Kami</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Bantuan</a>
              </li>
              <li>
                <a href="#">Info Layanan</a>
              </li>
              <li>
                <a href="#">Kegiatan</a>
              </li>
              <li>
                <a href="#">Pendaftaran</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6>Kontak</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">No Telepon : 0632 21 709</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Hak Cipta oleh BPBD Kabupaten Toba</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;