import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cross } from '../assets/svg/crossIcon.svg';

function Navbar(props) {
    const { toggleHamburger } = props;

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[101] border border-black w-40 h-screen p-5 bg-yellow-700 overflow-y-auto">
            <Cross onClick={toggleHamburger} className="float-end cursor-pointer" />

            <div className="flex flex-col items-start space-y-5 p-5">
                <div className="text-black hover:underline hover:text-gray-300 py-1 px-2 rounded transition duration-300 ease-in-out">
                    <Link to="/">Home</Link>
                </div>
                <div className="text-black hover:underline hover:text-gray-300 py-1 px-2 rounded transition duration-300 ease-in-out">
                    <Link to="/menu">Menu</Link>
                </div>
                <div className="text-black hover:underline hover:text-gray-300 py-1 px-2 rounded transition duration-300 ease-in-out">
                    <Link to="/favourites">My Favourites</Link>
                </div>
                <div className="text-black hover:underline hover:text-gray-300 py-1 px-2 rounded transition duration-300 ease-in-out">
                    <Link to="/random-meal">Meal Generator</Link>
                </div>
                <div className="text-black hover:underline hover:text-gray-300 py-1 px-2 rounded transition duration-300 ease-in-out">
                    <Link to="/about">About Me</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
