import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarComponent } from './components/NavbarComponent'; 
import Home from 'pages/Home';
import login from 'pages/login';
import register from 'pages/register';
import Report from 'pages/Report';
import Mitigasi from 'pages/Mitigasi';
import PemetaanMaps from 'components/PemetaanMaps';
import darurat from 'pages/darurat';

function App() {
  return (
    <div className="App">
   <Router >
      <div className="app-header">
      <NavbarComponent />
      </div>
      <Switch>
        <div className="app-content">
          <Route path="/" exact component={Home}   />
          <Route path="/Mitigasi" exact component={Mitigasi} />
          <Route path="/Report" exact component={Report} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={register} />
          <Route path="/PemetaanMaps" exact component={PemetaanMaps} />
          <Route path="/darurat" exact component={darurat} />
          
          
        </div>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
