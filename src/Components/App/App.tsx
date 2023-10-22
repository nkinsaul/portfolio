import './App.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Landing from '../Landing/Landing';
import Audio from '../Projects/Projects';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    // <div className='App'>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    // </div>
    
  )
}

export default App;
