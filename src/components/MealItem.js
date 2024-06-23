import React from 'react';

const MealItem = ({ meal }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl mb-2">{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover rounded mb-2" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Favourites</button>
    </div>
  );
};

export default MealItem;
