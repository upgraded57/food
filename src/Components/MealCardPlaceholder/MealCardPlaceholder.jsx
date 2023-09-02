import React from "react";
import "./mealcardplaceholder.css";

export default function MealCardPlaceholder() {
  return (
    <div className="mealcardplaceholder">
      <div className="mealcardplaceholder__container">
        <div className="mealcardplaceholder__container-img"></div>
        <div className="mealcardplaceholder__container-content"></div>
        <div className="mealcardplaceholder__container-content short"></div>
      </div>
      <div className="mealcardplaceholder__container">
        <div className="mealcardplaceholder__container-img"></div>
        <div className="mealcardplaceholder__container-content"></div>
        <div className="mealcardplaceholder__container-content short"></div>
      </div>
      <div className="mealcardplaceholder__container">
        <div className="mealcardplaceholder__container-img"></div>
        <div className="mealcardplaceholder__container-content"></div>
        <div className="mealcardplaceholder__container-content short"></div>
      </div>
    </div>
  );
}
