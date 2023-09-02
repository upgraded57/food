import React from "react";
import "./history.css";
import Navbar from "../../Components/Navbar/Navbar";
import MealList from "../../Components/MealList/MealList";

export default function History() {
  return (
    <div className="history">
      <div className="history__top">Booking History</div>
      <div className="history__list">
        <MealList
          name="Ambrosia Hotel & Restaurant"
          location="kazi Deiry, Taiger Pass
        Chittagong"
          history
        />
        <MealList
          name="Tava Restaurant"
          location="Zakir Hossain Rd, Chittagong"
          history
        />
        <MealList
          name="Haatkhola"
          location="6 Surson Road, Chittagong"
          history
        />
      </div>
      <Navbar />
    </div>
  );
}
