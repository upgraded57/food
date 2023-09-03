import React, { useEffect, useState } from "react";
import "./arrivables.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealCard from "../../Components/MealCard/MealCard";
import MealList from "../../Components/MealList/MealList";
import BottomSpace from "../../Components/BottomSpace/BottomSpace";
import MealCardPlaceholder from "../../Components/MealCardPlaceholder/MealCardPlaceholder";
import { fetchMeal, fetchMealList } from "../../Api/Apicalls";
import MealListPlaceHolder from "../../Components/MealListPlaceholder/MealListPlaceHolder";

export default function Arrivables() {
  const [loading, setLoading] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeal(setLoading, setMeals);
  }, []);

  //meals loading fetch
  const [mealListLoading, setMealListLoading] = useState(null);
  const [mealLists, setMealLists] = useState([]);

  useEffect(() => {
    fetchMealList(setMealListLoading, setMealLists);
  }, []);

  return (
    <div className="arrivables">
      <Topbar />
      <Search />
      <SectionHead
        title="Today's New Arrivables"
        subtitle="Best of today's food list update"
        linkText={false}
        linkLocation="/"
      />

      <div className="arrivables__meal-cards">
        {loading ? (
          <MealCardPlaceholder />
        ) : (
          meals.map((meal) => {
            return <MealCard key={meal.idMeal} meal={meal} />;
          })
        )}
      </div>

      <SectionHead
        title="Explore Restaurants"
        subtitle="Check your city Near by Restaurant"
        linkText="See All"
        linkLocation="/"
      />

      <div className="arrivables__restaurants">
        {mealListLoading ? (
          <MealListPlaceHolder />
        ) : (
          mealLists.map((mealList) => {
            return <MealList key={mealList.idMeal} meal={mealList} />;
          })
        )}
      </div>

      <BottomSpace />
      <Navbar />
    </div>
  );
}
