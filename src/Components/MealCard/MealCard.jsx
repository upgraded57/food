import React from "react";
import "./mealcard.css";
import { MdLocationPin } from "react-icons/md";

export default function MealCard({ mealImg, mealName, mealLocation }) {
  return (
    <div className="mealCard">
      <div className="mealCard__img">
        <img src={mealImg} alt="meal-image" />
      </div>
      <div className="mealCard__content">
        <h2 className="h-200">{mealName}</h2>
        <div className="mealCard__content-location">
          <MdLocationPin className="location-icon" />
          <p className="text-small">{mealLocation}</p>
        </div>
      </div>
    </div>
  );
}