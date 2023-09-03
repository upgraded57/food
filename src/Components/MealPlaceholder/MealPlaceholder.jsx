import React from "react";
import "./mealplaceholder.css";

export default function MealPlaceholder() {
  return (
    <div className="mealplaceholder">
      <div className="mealplaceholder__top">
        <div className="mealplaceholder__top-name"></div>
        <div className="mealplaceholder__top-location"></div>
      </div>
      <div className="mealplaceholder__image"></div>
      <div className="mealplaceholder__bottom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
