import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchMeal = (e) => {
    e.preventDefault();
    if (query.trim().length < 1) {
      toast.error("Enter a search query to proceed!");
    } else {
      navigate(`/search/${query.toLowerCase()}`);
    }
  };

  return (
    <div className="search">
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
