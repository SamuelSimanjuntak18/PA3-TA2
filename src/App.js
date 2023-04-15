
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../src/components/NavbarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Mitigasi from './pages/Mitigasi.jsx';
import Home from './pages/Home.jsx';
import login from './pages/login';
import register from './pages/register.jsx';
// import Report from './pages/Report.jsx';
import darurat from '../src/pages/darurat.jsx';
import Detail_Laporan from './pages/Detail_Laporan';
import Footer from '../src/components/Footer';
import laporanSelesai from './pages/laporanSelesai';
import Pengumuman from './pages/Pengumuman';
import ReportDetail from './pages/ReportDetail';
import { SkeletonTheme } from 'react-loading-skeleton';
import MitigasiDetail from './pages/MitigasiDetail';
import BencanaAlam from './pages/BencanaAlam';
import BencanaSosial from './pages/BencanaSosial';
import BencanaNonAlam from './pages/BencanaNonAlam';
import Profil from './pages/Profil';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    setIsLoggedIn(token ? true : false);
  })

  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <div className="app-header">
          <NavbarComponent isLoggedIn={isLoggedIn}/>
        </div>
        <Router>
          <Switch>
            <div className="app-content">
              <Route path="/" exact component={Home} />
              <Route path="/Mitigasi" exact component={Mitigasi} />
              <Route path="/mitigasi/:id" exact component={MitigasiDetail} />
              {/* <Route path="/report" exact component={Report} /> */}
              <Route path="/login" exact component={login} />
              <Route path="/register" exact component={register} />
              <Route path="/darurat" exact component={darurat} />
              <Route path="/Detail_Laporan" exact component={Detail_Laporan} />
              <Route path="/laporanSelesai" exact component={laporanSelesai} />
              <Route path="/Pengumuman" exact component={Pengumuman} />
              <Route path="/reports/:id" component={ReportDetail} />
              <Route path="/BencanaAlam" component={BencanaAlam} />
              <Route path="/BencanaNonAlam" component={BencanaNonAlam} />
              <Route path="/BencanaSosial" component={BencanaSosial} />
              <Route path="/Profil" component={Profil} />        
                  </div>

            {/* <PrivateRoute path="/dashboard" exact component={Dashboard} /> */}
          </Switch>

          <div className=" box-button-urgent">
            <div className="d-flex flex-column gap-3">
              {/* <div className="button-urgent rounded-circle d-flex justify-content-center align-items-center text-white fs-6">
              <FontAwesomeIcon icon={faEnvelope} />
            </div> */}

              <div className="button-urgent animasi rounded-circle d-flex justify-content-center align-items-center text-white fs-6">
                <a
                  href="/darurat"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <div className="button-urgent animasi rounded-circle d-flex justify-content-center align-items-center text-white fs-6">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Router>
        <Footer />
      </SkeletonTheme>
    </div>
  );
}

export default App;
