import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavbarComponent } from './components/NavbarComponent'; 
import Home from './components/Home';
import Mitigasi from './components/Mitigasi';



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
        </div>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
