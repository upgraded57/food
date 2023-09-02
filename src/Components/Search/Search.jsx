import React from "react";
import "./search.css";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="search">
      <FiSearch />
      <input type="text" placeholder="Search" />
    </div>
  );
}
