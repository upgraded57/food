import React from "react";
import "./mealList.css";

import restaurant from "../../assets/images/rest1.png";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { comingSoon } from "../../Api/Apicalls";

export default function MealList({ meal, history }) {
  return (
    <div className="restaurant-list">
      <Link to={`/meal/${meal.idMeal}`} className="restaurant-list__img">
        <img
          src={meal.strMealThumb + "/preview"}
          alt="Cannot load meal image"
        />
      </Link>
      <div className="restaurant-list__content">
        <Link to={`/meal/${meal.idMeal}`}>
          <h2 className="h-200">
            {meal.strMeal.length < 30
              ? meal.strMeal
              : meal.strMeal.slice(0, 30) + "..."}
          </h2>
        </Link>
        <div className="restaurant-list__content-details">
          <div className="restaurant-list__content-details-location">
            <MdLocationPin className="location-icon" />
            <p className="text-small">{meal.strArea}</p>
          </div>
          <div className="restaurant-list__content-details-cta">
            <button className="btn-pry-sm" onClick={comingSoon}>
              {history ? "Check" : "Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
