import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';


const App = () => {
  return (
    <body>
      <Header />
      <main>
        <SideBar />
        <h1>Natalie's Portfolio Content</h1>
      </main>
    </body>
  )
}

export default App;
