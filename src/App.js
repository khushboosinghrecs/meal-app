import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ReactComponent as Hamburger } from './assets/svg/hamburger.svg';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';
import Favourites from './components/Favourites';
import RandomMeal from './components/RandomMeal';
import About from './components/About';
import './App.css';
import './index.css';

function App() {
  const [isNav, setNav] = useState(false);
  const toggleHamburger = () => {
    setNav(!isNav);
  };

  return (
    <>
     <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/random-meal" element={<RandomMeal />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {isNav ? (
        <Navbar toggleHamburger={toggleHamburger} className='z-30'/>
      ) : (
        <Hamburger onClick={toggleHamburger} className="cursor-pointer absolute m-4 top-0 left-0 right-0 z-[101]" />
      )}
     
    </>
  );
}

export default App;
