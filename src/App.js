import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import HomePage from './container/HomePage';
import MenuPage from './container/MenuPage';
import FavouritePage from './container/FavouritePage';
import RandomMeal from './container/RandomMeal';
import AboutPage from './container/AboutPage';
import CategoryPage from './container/CategoryPage'

import { ReactComponent as Hamburger } from './assets/svg/hamburger.svg';

import './App.css';
import './index.css';

function App() {
  const [isNav, setNav] = useState(false);
  const toggleHamburger = () => {
    setNav(!isNav);
  };

  return (
    <>
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:categoryName" element={<CategoryPage />} />
          <Route path="/favourites" element={<FavouritePage />} />
          <Route path="/random-meal" element={<RandomMeal />} />
          <Route path="/about" element={<AboutPage />} />
       
        </Routes>
      {isNav ? (
        <Navbar toggleHamburger={toggleHamburger} className='z-30'/>
      ) : (
        <Hamburger onClick={toggleHamburger} className="cursor-pointer absolute m-4 top-0 left-0 right-0 z-[101]" />
      )}
     
    </>
  );
}

export default App;
