import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Home from './components/Intro/intro';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Experience from './components/Experience/experience';
import Contact from './components/Contact/contact';

function App() {
  return (
    <Router basename="/personal-portfolio-website">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
