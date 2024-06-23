import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setMeal(response.data.meals[0]);
    };
    fetchRandomMeal();
  }, []);

  return (
    <div>
      <h2 className="text-3xl mb-4">Random Meal Generator</h2>
      {meal && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl mb-2">{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover rounded mb-2" />
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default RandomMeal;
