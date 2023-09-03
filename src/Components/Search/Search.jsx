import React from "react";
import "./search.css";
import { FiSearch } from "react-icons/fi";
import { comingSoon } from "../../Api/Apicalls";

export default function Search() {
  const searchMeal = (e) => {
    e.preventDefault();
    e.target.reset();
    comingSoon();
  };
  return (
    <form className="search" onSubmit={searchMeal}>
      <FiSearch />
      <input type="text" placeholder="Search" />
    </form>
  );
}
