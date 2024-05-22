import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
