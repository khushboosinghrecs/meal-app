import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/wishListSlice';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">Wishlist</h2>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <div key={item.idMeal} className="bg-white p-4 rounded shadow m-4">
            <h3 className="text-xl mb-2">{item.strMeal}</h3>
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <p>{item.strInstructions}</p>
            <button
              onClick={() => handleRemoveItem(item)}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No items in the wishlist</p>
      )}
    </div>
  );
};

export default Wishlist;
