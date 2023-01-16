
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar1';
import Home from './Pages/Home'
import Services from './Pages/Services';
import PlanJourney from './Pages/PlanJourney';
import RealInfo from './Pages/RealInfo';
import Help from './Pages/Help'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <div className='app-info'>
      <Router>
        <Header />
        <Navbar1 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/plan' element={<PlanJourney />} />
          <Route path='/real' element={<RealInfo />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
