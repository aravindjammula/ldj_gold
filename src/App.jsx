import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import ProductDetails from './pages/ProductDetails';
import AuthPage from './pages/AuthPage';
import TrackOrder from './pages/TrackOrder';
import SavedItems from './pages/SavedItems';

function App() {
  return (
    // CRITICAL FIX: Wrap your entire application in <Router>
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            {/* Landing at the root page */}
            <Route path="/" element={<Home />} />

            {/* Redirect /react to the home page to fix your current browser view */}
            <Route path="/react" element={<Navigate to="/" replace />} />

            {/* Static Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gold" element={<Gold />} />
            <Route path="/diamonds" element={<Diamonds />} />
            <Route path="/bridal" element={<Bridal />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/custom-design" element={<Navigate to="/contact" replace />} />
            <Route path="/bespoke" element={<Navigate to="/contact" replace />} />
            <Route path="/pink-gold" element={<PinkGold />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/bespoke" element={<Navigate to="/contact" replace />} />
            <Route path="/vintage" element={<Vintage />} />

            {/* Account Routes (Linked to your Navbar User Dropdown) */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/saved-items" element={<SavedItems />} />

            {/* Dynamic Route */}
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;