import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Landing from '../Landing/Landing';
import Audio from '../Audio/Audio';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <body>
      <Header />
      <main>
        <SideBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </body>
  )
}

export default App;
