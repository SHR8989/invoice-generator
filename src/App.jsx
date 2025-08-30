import React from 'react'
import AppContent from './component/AppContent';
import { Provider } from 'react-redux';
import {store} from './Store/store';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppContent />} /> {/* Home page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App