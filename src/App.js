import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import Downloadapp from './components/Download/Downloadapp';
import SearchCar from './components/SearchCar/SearchCar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
          <Routes>
            <Route path="/travelweb" element={<section id="home"><Home /><Offers /><Downloadapp /><SearchCar /></section>} />
          </Routes> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
