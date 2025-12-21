import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gold from './pages/Gold';
import Diamonds from './pages/Diamonds';
import Bridal from './pages/Bridal';
import Collections from './pages/Collections';
import CustomDesign from './pages/CustomDesign';
import PinkGold from './pages/PinkGold';
import Engagement from './pages/Engagement';
import Vintage from './pages/Vintage';
import ProductDetails from './pages/ProductDetails'; // Ensure this file exists!

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar /> 
      
      <div className="flex-grow">
        {/* ScrollToTop could be added here later */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/diamonds" element={<Diamonds />} />
          <Route path="/bridal" element={<Bridal />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/custom-design" element={<CustomDesign />} />
          <Route path="/pink-gold" element={<PinkGold />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/vintage" element={<Vintage />} />
          
          {/* Dynamic Route for Product Details */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;