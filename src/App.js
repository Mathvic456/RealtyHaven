import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetail from './components/PropertyDetail';
import { exclusiveHouses, upcomingHouses, soldHouses } from './components/data/HouseData'; // Adjust the path based on where your data is stored
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import Payment from './components/Payment';


function App() {
  const allListings = [...exclusiveHouses, ...upcomingHouses, ...soldHouses];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/properties' element={<Properties 
          exclusiveHouses={exclusiveHouses}
          upcomingHouses={upcomingHouses}
          soldHouses={soldHouses} 
        />} />
        <Route path='/property/:id' element={<PropertyDetail houseData={allListings} />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='Contact' element={<ContactUs />} />
        <Route path='Login-Page' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/payment' element={<Payment />} />

      </Routes>
    </Router>
  );
}

export default App;
