import React from "react";
import "./mealList.css";

import restaurant from "../../assets/images/rest1.png";
import { MdLocationPin } from "react-icons/md";

export default function MealList({ name, location }) {
  return (
    <div className="restaurant">
      <div className="restaurant__img">
        <img src={restaurant} alt="" />
      </div>
      <div className="restaurant__content">
        <h2 className="h-200">{name}</h2>
        <div className="restaurant__content-details">
          <div className="restaurant__content-details-location">
            <MdLocationPin className="location-icon" />
            <p className="text-small">{location}</p>
          </div>
          <div className="restaurant__content-details-cta">
            <button className="btn-pry-sm">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}
