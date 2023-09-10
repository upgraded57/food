import React, { useEffect, useState } from "react";
import "./history.css";
import Navbar from "../../Components/Navbar/Navbar";
import MealList from "../../Components/MealList/MealList";
import MealListPlaceHolder from "../../Components/MealListPlaceholder/MealListPlaceHolder";
import useFetchMealLists from "../../Hooks/useFetchMealLists";

export default function History() {
  const { mealListLoading, mealLists } = useFetchMealLists();
  return (
    <div className="history">
      <div className="history__top">Booking History</div>
      <div className="history__list">
        {mealListLoading ? (
          <MealListPlaceHolder />
        ) : (
          mealLists.map((mealList) => {
            return <MealList key={mealList.idMeal} meal={mealList} history />;
          })
        )}
      </div>
      <Navbar />
    </div>
  );
}
