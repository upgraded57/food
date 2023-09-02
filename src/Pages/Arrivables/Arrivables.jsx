import React from "react";
import "./arrivables.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealCard from "../../Components/MealCard/MealCard";
import MealList from "../../Components/MealList/MealList";
import BottomSpace from "../../Components/BottomSpace/BottomSpace";

export default function Arrivables() {
  return (
    <div className="arrivables">
      <Topbar />
      <Search />
      <SectionHead
        title="Today's New Arrivables"
        subtitle="Best of today's food list update"
        linkText="See All"
        linkLocation="/"
      />

      <div className="arrivables__meal-cards">
        <MealCard
          mealName="Chicken Biryani"
          mealLocation="Ambrosia Hotel &
            Restaurant"
        />
        <MealCard
          mealName="Sauce Tonkatsu "
          mealLocation="Ambrosia Hotel &
            Restaurant"
        />
        <MealCard
          mealName="Chicken Biryani"
          mealLocation="Ambrosia Hotel &
            Restaurant"
        />
        <MealCard
          mealName="Sauce Tonkatsu "
          mealLocation="Ambrosia Hotel &
            Restaurant"
        />
        <MealCard
          mealName="Chicken Biryani"
          mealLocation="Ambrosia Hotel &
            Restaurant"
        />
        <MealCard
          mealName="Sauce Tonkatsu "
          mealLocation="Ambrosia Hotel &
            Restaurant"
        />
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
