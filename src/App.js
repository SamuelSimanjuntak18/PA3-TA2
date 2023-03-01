import './App.css';
import { NavbarComponent } from './components/NavbarComponent'; 
import Weather from './components/weather.js';

function App() {
  return (
    <div className="App">
     <NavbarComponent />
   <Weather/>
    </div>
  );
}

export default App;
