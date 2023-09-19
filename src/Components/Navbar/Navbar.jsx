import React from "react";
import "./navbar.css";

import { GoHome, GoHomeFill } from "react-icons/go";
import { AiFillBook, AiOutlineBook } from "react-icons/ai";
import { BsCart, BsCartFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
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
          className={location === "/cart" ? "active" : ""}
          onClick={() => navigate("/cart")}
        >
          {cartItems.length > 0 && (
            <div className="cart-item-count">{cartItems.length}</div>
          )}
          {location === "/cart" ? <BsCartFill /> : <BsCart />}
        </li>
      </ul>
    </div>
  );
}
