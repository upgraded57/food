import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./search.css";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import toast from "react-hot-toast";

export default function Search() {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchMeal = (e) => {
    e.preventDefault();
    if (query.trim().length < 1) {
      toast.error("Enter a search query to proceed!");
    } else {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="search">
      {location.pathname.includes("/search/") && (
        <span className="search__home-btn" onClick={() => navigate("/")}>
          <GoHome />
        </span>
      )}

      <form onSubmit={searchMeal}>
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
