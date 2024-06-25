import React from 'react';
import { ReactComponent as FavouritesIcon } from '../assets/svg/favourite.svg'
import { ReactComponent as RemoveFavouritesIcon } from '../assets/svg/removeFavourite.svg'


function Button({isFavorite,handleToggleFavorite}) {
  return (
    <div> <button
    className={`w-8 h-8 absolute top-0 right-0 rounded-full text-gray-500 hover:text-red-500 focus:outline-none transition-colors duration-300 ${
      isFavorite ? "text-red-500" : ""
    }`}
    onClick={handleToggleFavorite}
  >
    {isFavorite ? 
    <FavouritesIcon />
     : 
     < RemoveFavouritesIcon />
    }
  </button></div>
  )
}

export default Button