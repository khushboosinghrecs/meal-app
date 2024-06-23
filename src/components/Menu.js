import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealList from './MealList';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategories(response.data.categories);
      console.log(response, 'res');
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h2 className="text-3xl mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.idCategory} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl mb-2">{category.strCategory}</h3>
            <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-40 object-cover rounded mb-2" />
            <p>{category.strCategoryDescription.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
