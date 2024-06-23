import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from '../assets/svg/hamburger.svg'

function Navbar(props) {
    const { toggleHamburger } = props;
    return (

        <div className="absolute border border-black w-40 h-100vh top-0 left-0 right-0 z-[101] p-5">
            <HamburgerIcon onClick={toggleHamburger} className="float-end cursor-pointer" />


            <div className="flex flex-col items-start space-y-5 p-5">
                <Link to="/" className="text-black hover:underline">Home</Link>
                <Link to="/menu" className="text-black hover:underline">Menu</Link>
                <Link to="/favourites" className="text-black hover:underline">My Favourites</Link>
                <Link to="/random-meal" className="text-black hover:underline">Meal Generator</Link>
                <Link to="/about" className="text-black hover:underline">About Me</Link>
            </div>

        </div>

    )
}

export default Navbar