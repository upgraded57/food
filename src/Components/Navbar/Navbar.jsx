import React from "react";
import "./navbar.css";

import { GoHome, GoHomeFill } from "react-icons/go";
import { AiFillBook, AiOutlineBook } from "react-icons/ai";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="home__nav">
      <ul>
        <li
          className={location === "/" ? "active" : ""}
          onClick={() => navigate("/")}
        >
          {location === "/" ? <GoHomeFill /> : <GoHome />}
        </li>
        <li
          className={location === "/history" ? "active" : ""}
          onClick={() => navigate("/history")}
        >
          {location === "/history" ? <AiFillBook /> : <AiOutlineBook />}
        </li>
        <li
          className={location === "/profile" ? "active" : ""}
          onClick={() => navigate("/profile")}
        >
          {location === "/profile" ? <BiSolidUser /> : <BiUser />}
        </li>
      </ul>
    </div>
  );
}
