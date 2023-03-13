import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarComponent } from './components/NavbarComponent'; 
import Home from './components/Home';
import Mitigasi from './components/Mitigasi';
import PemetaanMaps from './components/PemetaanMaps';
import laporan from './components/laporan';



function App() {
  return (
    <div className="App">
      
   <Router >
      <div className="app-header">
      <NavbarComponent />
      </div>
        <div className="app-content">
          <Route path="/" exact component={Home}   />
          <Route path="/Mitigasi" exact component={Mitigasi} />
          <Route path="/laporan" exact component={laporan} />
          
        </div>
      <Switch>
          <Route path="/" exact>
            <PemetaanMaps />
            {/* <Home /> */}
          </Route>
          {/* <Route path="/mitigasi" component={Mitigasi} /> */}
          <Route path="/maps">
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
