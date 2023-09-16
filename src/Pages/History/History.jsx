import React, { useEffect, useState } from "react";
import "./history.css";
import Navbar from "../../Components/Navbar/Navbar";
import MealList from "../../Components/MealList/MealList";
import useFetchMealLists from "../../Hooks/useFetchMealLists";
import Loader from "../../Components/Loader/Loader";
import TopSpace from "./../../Components/TopSpace/TopSpace";

export default function History() {
  const { mealListLoading, mealLists } = useFetchMealLists();
  return (
    <div className="history">
      <div className="history__top">Booking History</div>
      <div className="history__list">
        {mealListLoading ? (
          <Loader type="list" />
        ) : (
          mealLists.map((mealList) => {
            return <MealList key={mealList.idMeal} meal={mealList} history />;
          })
        )}
      </div>
      <TopSpace />
      <Navbar />
    </div>
  );
}
