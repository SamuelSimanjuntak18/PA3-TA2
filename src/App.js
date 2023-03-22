import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/NavbarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Mitigasi from './pages/Mitigasi';
import Home from './pages/Home';
import login from './pages/login';
import register from './pages/register';
import Report from './pages/Report';
import darurat from 'pages/darurat';


function App() {
  return (
    <div className="App">
      <div className="app-header">
        <NavbarComponent />
      </div>
      <Router>
        <Switch>
          <div className="app-content">
            <Route path="/" exact component={Home} />
            <Route path="/Mitigasi" exact component={Mitigasi} />
            <Route path="/report" exact component={Report} />
            <Route path="/login" exact component={login} />
            <Route path="/register" exact component={register} />
            <Route path="/darurat" exact component={darurat} />
          </div>

        </Switch>

        <div className=' box-button-urgent'>
          <div className='d-flex flex-column gap-3'>
            <div className='button-urgent rounded-circle d-flex justify-content-center align-items-center text-white fs-6'>
            <FontAwesomeIcon icon={faEnvelope} />

            </div>
            <div className='button-urgent rounded-circle d-flex justify-content-center align-items-center text-white fs-6'>
            <FontAwesomeIcon icon={faPhoneVolume} />
              
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;