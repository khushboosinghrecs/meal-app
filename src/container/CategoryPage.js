import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from '../store/wishListSlice';
import MealItem from "../components/MealItem";
import Shimmer from "../components/Shimmer";

const Category = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const favorites = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error(
          `Error fetching meals for category ${categoryName}:`,
          error
        );
      }
    };

    fetchMealsByCategory();
  }, [categoryName]);

  const toggleFavorite = (meal) => {
    if (favorites.some((favMeal) => favMeal.idMeal === meal.idMeal)) {
      dispatch(removeItem(meal));
    } else {
      dispatch(addItem(meal));
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="max-w-screen-xl mx-auto mt-12 p-6">
      <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-300">
        Meals in {categoryName}
      </h1>
      {meals.length === 0 && <Shimmer />}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {meals?.length > 0 &&
          meals.map((meal) => (
            <MealItem
              key={meal.idMeal}
              meal={meal}
              isFavorite={favorites.some((favMeal) => favMeal.idMeal === meal.idMeal)}
              toggleFavorite={() => toggleFavorite(meal)}
            />
          ))}
      </ul>
    </div>
  );
};

export default Category;
