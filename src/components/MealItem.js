import React, { useState } from "react";
import Button from "./Button";




const MealItem = ({ meal, isFavorite, toggleFavorite }) => {
  const handleToggleFavorite = () => {
    toggleFavorite(meal.idMeal);
  };

  return (
    <li
      key={meal.idMeal}
      className="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 border-gray-700 bg-gray-800 hover:bg-gray-700 relative"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <p className="mb-3 font-normal text-white">{meal.strMeal}</p>
        <Button isFavorite={isFavorite} handleToggleFavorite={handleToggleFavorite}/>
      </div>
    </li>
  );
};

export default MealItem;
