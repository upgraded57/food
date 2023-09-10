import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./searchpage.css";

import Topbar from "../../Components/Topbar/Topbar";
import Search from "../../Components/Search/Search";
import MealList from "../../Components/MealList/MealList";

import tempFilterImg1 from "../../assets/images/meal1.png";
import tempFilterImg2 from "../../assets/images/meal2.png";
import noResultImg from "../../assets/images/404img.png";
import { searchMealByName } from "../../Api/Apicalls";
import MealListPlaceHolder from "../../Components/MealListPlaceholder/MealListPlaceHolder";

export default function SearchPage() {
  const { search_query } = useParams();
  const [searchLoading, setSearchLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchMealByName(search_query, setSearchLoading, setSearchResults);
  }, [search_query]);

  console.log(searchResults);

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(document.querySelectorAll(".searchPage__filter-bottom span"));
  }, []);

  filters.forEach((filter) => {
    filter.onclick = () => {
      if (!filter.classList.contains("active")) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    };
  });

  const clearFilters = () => {
    filters.forEach((filter) => {
      if (filter.classList.contains("active")) {
        filter.classList.remove("active");
      }
    });
  };

  console.log(searchResults);
  return (
    <div className="searchPage">
      <Topbar />
      <Search />

      <div className="searchPage__filter">
        <div className="searchPage__filter-top">
          <p className="text-body text-bold">Filters</p>
          <span onClick={clearFilters}>Clear All</span>
        </div>
        <div className="searchPage__filter-bottom">
          <span>
            <img src={tempFilterImg1} alt="" />
            <p className="text-small">Filter 1</p>
          </span>
          <span>
            <img src={tempFilterImg2} alt="" />
            <p className="text-small">Filter 2</p>
          </span>
          <span>
            <img src={tempFilterImg1} alt="" />
            <p className="text-small">Filter 3</p>
          </span>
          <span>
            <img src={tempFilterImg2} alt="" />
            <p className="text-small">Filter 4</p>
          </span>
        </div>
      </div>

      <div className="searchPage__header">
        <p className="text-body">
          Your Search:{" "}
          <span className="text-bold">{search_query.toUpperCase()}</span>
        </p>
      </div>

      <div className="searchPage__results">
        {searchLoading ? (
          <MealListPlaceHolder />
        ) : searchResults.length < 1 ? (
          <span className="no-result">
            <img src={noResultImg} alt="" />
            <p className="text-small">
              Your search didn't return any result! Try again with some other
              keywords
            </p>
          </span>
        ) : (
          searchResults !== null &&
          searchResults.map((meal) => {
            return <MealList key={meal.idMeal} meal={meal} />;
          })
        )}
      </div>
    </div>
  );
}
