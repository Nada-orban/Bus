
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar1';
import Home from './Pages/Home'
import Services from './Pages/Services';
import Destination from './Pages/Destination';
import RealInfo from './Pages/RealInfo';
import Help from './Pages/Help'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import RouteMap from './Pages/RouteMap';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app-info'>
      <Router>
        <Header />
        <Navbar1 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/real' element={<RealInfo />} />
          <Route path='/help' element={<Help />} />
          <Route path='/route' element={<RouteMap />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
