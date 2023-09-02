import React from "react";
import "./mealList.css";

import restaurant from "../../assets/images/rest1.png";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MealList({ name, location, history }) {
  return (
    <div className="restaurant-list">
      <Link to="/restaurant" className="restaurant-list__img">
        <img src={restaurant} alt="" />
      </Link>
      <div className="restaurant-list__content">
        <Link to="/restaurant">
          <h2 className="h-200">{name}</h2>
        </Link>
        <div className="restaurant-list__content-details">
          <div className="restaurant-list__content-details-location">
            <MdLocationPin className="location-icon" />
            <p className="text-small">{location}</p>
          </div>
          <div className="restaurant-list__content-details-cta">
            <button className="btn-pry-sm">{history ? "Check" : "Book"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
