import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AirportTransfer from './pages/AirportTransfer';
import Safari from './pages/Safari';
import RentVehicle from './pages/RentVehicle';
import About from './pages/About';
import Hire from './pages/Hire';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airport-transfer" element={<AirportTransfer />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/rent" element={<RentVehicle />} />
          <Route path="/about" element={<About />} />
           <Route path="/hire" element={<Hire />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
