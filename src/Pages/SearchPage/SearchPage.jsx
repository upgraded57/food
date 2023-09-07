import React from "react";
import { useParams } from "react-router-dom";

import "./searchpage.css";

import Topbar from "../../Components/Topbar/Topbar";
import Search from "../../Components/Search/Search";

import tempFilterImg1 from "../../assets/images/meal1.png";
import tempFilterImg2 from "../../assets/images/meal2.png";

export default function SearchPage() {
  const { search_query } = useParams();
  return (
    <div className="searchPage">
      <Topbar />
      <Search />

      <div className="searchPage__filter">
        <div className="searchPage__filter-top">
          <p className="text-body text-bold">Filters</p>
          <span>Clear All</span>
        </div>
        <div className="searchPage__filter-bottom">
          <span className="active">
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
    </div>
  );
}
