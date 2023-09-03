import React, { useEffect, useState } from "react";
import "./history.css";
import Navbar from "../../Components/Navbar/Navbar";
import MealList from "../../Components/MealList/MealList";
import { fetchMealList } from "../../Api/Apicalls";
import MealListPlaceHolder from "../../Components/MealListPlaceholder/MealListPlaceHolder";

export default function History() {
  //meals loading fetch
  const [mealListLoading, setMealListLoading] = useState(null);
  const [mealLists, setMealLists] = useState([]);

  useEffect(() => {
    fetchMealList(setMealListLoading, setMealLists);
  }, []);
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
