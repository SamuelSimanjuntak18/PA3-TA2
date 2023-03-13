import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarComponent } from './components/NavbarComponent'; 
import Home from './components/Home';
import Mitigasi from './components/Mitigasi';
import PemetaanMaps from './components/PemetaanMaps';



function App() {
  return (
    <div className="App">
   <Router >
      <div className="app-header">
      <NavbarComponent />
      </div>
        <div className="app-content">
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
