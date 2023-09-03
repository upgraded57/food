import React from "react";
import "./mealcard.css";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
  return (
    <Link to={`/meal/${meal.idMeal}`} className="mealCard">
      <div className="mealCard__img">
        <img
          src={`${meal.strMealThumb}/preview`}
          alt="cannot load meal image"
        />
      </div>
      <div className="mealCard__content">
        <h2 className="h-200">
          {meal.strMeal.length < 10
            ? meal.strMeal
            : meal.strMeal.slice(0, 10) + "..."}
        </h2>
        <div className="mealCard__content-location">
          <MdLocationPin className="location-icon" />
          <p className="text-small">{meal.strArea}</p>
        </div>
      </div>
    </Link>
  );
}
