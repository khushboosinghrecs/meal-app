import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { removeItem, addItem } from "../store/wishListSlice";

const MealItem = ({ meal }) => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.items);
  const isFavorite = wishlist.some((item) => item.idMeal === meal.idMeal);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeItem(meal.idMeal)); // Dispatch removeItem action with meal idMeal
    } else {
      dispatch(addItem(meal)); // Dispatch addItem action if you need to add meal to wishlist
    }
  };

  return (
    <li className="flex flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 border-gray-700 bg-gray-800 hover:bg-gray-700 relative">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <p className="mb-3 font-normal text-white">{meal.strMeal}</p>
        <Button isFavorite={isFavorite} handleToggleFavorite={handleToggleFavorite} />
      </div>
    </li>
  );
};

export default MealItem;
