import React from "react";
import "./mealcard.css";
import { MdLocationPin } from "react-icons/md";

export default function MealCard({ meal }) {
  return (
    <div className="mealCard">
      <div className="mealCard__img">
        <img src={`${meal.strMealThumb}/preview`} alt="meal-image" />
      </div>
      <div className="mealCard__content">
        <h2 className="h-200">
          {meal.strMeal.length < 12
            ? meal.strMeal
            : meal.strMeal.slice(0, 12) + "..."}
        </h2>
        <div className="mealCard__content-location">
          <MdLocationPin className="location-icon" />
          <p className="text-small">{meal.strArea}</p>
        </div>
      </div>
    </div>
  );
}
