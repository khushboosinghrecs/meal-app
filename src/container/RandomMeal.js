// RandomMeal.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/wishListSlice';
import Button from '../components/Button';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setMeal(response.data.meals[0]);
    };
    fetchRandomMeal();
  }, []);

  useEffect(() => {
    if (meal && wishlist.some(item => item.idMeal === meal.idMeal)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [meal, wishlist]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeItem(meal.idMeal));
    } else {
      dispatch(addItem(meal));
    }
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">Random Meal Generator</h2>
      {meal && (
        <div className="bg-white p-4 rounded shadow m-4 relative">
          <h3 className="text-xl mb-2">{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover rounded mb-2" />
          <p>{meal.strInstructions}</p>
          <Button
            isFavorite={isFavorite}
            handleToggleFavorite={handleToggleFavorite}
          />
        </div>
      )}
    </div>
  );
};

export default RandomMeal;
