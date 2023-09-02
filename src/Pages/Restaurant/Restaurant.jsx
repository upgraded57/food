import React from "react";
import "./restaurant.css";

import {
  BiLeftArrowAlt,
  BiSolidTimeFive,
  BiSolidNavigation,
} from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import BottomSpace from "../../Components/BottomSpace/BottomSpace";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealList from "../../Components/MealList/MealList";

import tempRestaurantImg from "../../assets/images/rest1.png";

export default function Restaurant() {
  const navigate = useNavigate();
  return (
    <div className="restaurant">
      <div className="restaurant__top">
        <div className="restaurant__top-back-icon" onClick={() => navigate(-1)}>
          <BiLeftArrowAlt />
        </div>
        <div className="restaurant__top-title">Restaurant Details</div>
      </div>
      <div className="restaurant__detail">
        <div className="restaurant__detail-top">
          <span>
            <h2 className="h-200">Tava Restaurant</h2>
            <span className="restaurant__detail-top-location">
              <MdLocationPin className="location-icon" />
              <p className="text-small">kazi Deiry, Taiger Pass,Chittagong</p>
            </span>
          </span>
        </div>
        <div className="restaurant__detail-img">
          <img src={tempRestaurantImg} alt="" />
        </div>

        <div className="restaurant__detail-bottom">
          <div className="restaurant__detail-time">
            <span className="open-time">
              <span className="clock-icon">
                <BiSolidTimeFive />
              </span>
              <p className="text-small">Open Today</p>
            </span>
            <p className="text-body text-bold">10:00am - 12:00pm</p>
          </div>
          <div className="restaurant__detail-navigation">
            <span className="nav-icon">
              <BiSolidNavigation />
            </span>
            <p className="text-body">Visit Restaurant</p>
          </div>
        </div>
      </div>

      <SectionHead
        title="Similar Restaurants"
        subtitle="See similar restaurants around here"
        linkText="See All"
        linkLocation="/"
      />
      <div className="restaurant__other">
        <MealList
          name="Ambrosia Hotel"
          location="kazi Deiry, Taiger Pass
            Chittagong"
        />
        <MealList
          name="Tava Restaurant"
          location="Zakir Hossain Rd, Chittagong"
        />
        <MealList name="Haatkhola" location="6 Surson Road, Chittagong" />
      </div>

      <BottomSpace />
      <div className="restaurant__book">
        <button>Book This Restaurant</button>
      </div>
    </div>
  );
}
