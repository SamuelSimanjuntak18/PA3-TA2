import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/NavbarComponent';
import Mitigasi from './pages/Mitigasi';
import Home from './pages/Home';
import login from './pages/login';
import register from './pages/register';
import Report from './pages/Report';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-header">
          <NavbarComponent />
        </div>
        <Switch>
          <div className="app-content">
            <Route path="/" exact component={Home} />
            <Route path="/Mitigasi" exact component={Mitigasi} />
            <Route path="/report" exact component={Report} />
            <Route path="/login" exact component={login} />
            <Route path="/register" exact component={register} />
          </div>
        </Switch>

        <div className=' box-button-urgent'>
          <div className='d-flex flex-column gap-3'>
            <div className='button-urgent rounded-circle d-flex justify-content-center align-items-center text-white fs-6'>
              Lapor
            </div>
            <div className='button-urgent rounded-circle d-flex justify-content-center align-items-center text-white fs-6'>
              Call
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
