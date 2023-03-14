import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarComponent } from './components/NavbarComponent';
import Mitigasi from './pages/Mitigasi';
import Home from './pages/Home';
import login from './pages/login';
import Report from 'pages/Report';
import Register from 'pages/register';

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
            <Route path="/laporan" exact component={Report} />
            <Route path="/login" exact component={login} />
            <Route path="/register" exact component={Register} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
