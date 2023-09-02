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
import { fetchMeal } from "../../Api/Apicalls";

export default function Arrivables() {
  const [loading, setLoading] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeal(setLoading, setMeals);
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
        <MealList
          name="Ambrosia Hotel & Restaurant"
          location="kazi Deiry, Taiger Pass
            Chittagong"
        />
        <MealList
          name="Tava Restaurant"
          location="Zakir Hossain Rd, Chittagong"
        />
        <MealList name="Haatkhola" location="6 Surson Road, Chittagong" />
        <MealList
          name="Ambrosia Hotel & Restaurant"
          location="kazi Deiry, Taiger Pass
            Chittagong"
        />
        <MealList
          name="Tava Restaurant"
          location="Zakir Hossain Rd, Chittagong"
        />
        <MealList name="Haatkhola" location="6 Surson Road, Chittagong" />
        <MealList
          name="Ambrosia Hotel & Restaurant"
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
      <Navbar />
    </div>
  );
}
