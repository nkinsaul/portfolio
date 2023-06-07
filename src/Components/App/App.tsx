import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Landing from '../Landing/Landing';
import Audio from '../Audio/Audio';
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
        </Routes>
      </main>
    </body>
  )
}

export default App;
