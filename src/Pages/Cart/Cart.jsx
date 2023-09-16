import React, { useEffect } from "react";
import "./cart.css";
import Topbar from "../../Components/Topbar/Topbar";
import BottomSpace from "../../Components/BottomSpace/BottomSpace";

import { GrClear } from "react-icons/gr";
import emptyCartImg from "../../assets/images/emptycart.png";

import { comingSoon } from "../../Api/Apicalls";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./../../Components/Navbar/Navbar";
import { GoHome } from "react-icons/go";
import { deleteItemFromCart } from "../../features/actions/CartActions";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <Topbar />
      <h2 className="h-200 text-center" style={{ marginTop: "20px" }}>
        My Cart
      </h2>
      {cartItems.length > 0 ? (
        cartItems.map((meal) => {
          return (
            <div className="cart__container" key={meal.idMeal}>
              <div className="cart__item">
                <div className="cart__item-img">
                  <img
                    src={meal.strMealThumb + "/preview"}
                    alt="Product Image"
                  />
                </div>
                <div className="cart__item-center">
                  <h3 className="h-200">{meal.strMeal}</h3>
                  <div className="meal-quantity-toggle">
                    <span>Small</span>
                    <span className="active">Standard</span>
                    <span>Large</span>
                  </div>
                  <div className="meal-price">$3,042.36</div>
                </div>
                <div
                  className="cart__item-delete-icon"
                  onClick={() => dispatch(deleteItemFromCart(meal))}
                >
                  <GrClear className="del-icon" />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-cart">
          <div className="empty-cart__img">
            <img src={emptyCartImg} alt="" />
          </div>
          <div className="empty-cart__text">
            <h2 className="h-200">There's nothing here yet!</h2>
            <p className="text-body">Let's take you home for shopping</p>
          </div>
          <button
            type="button"
            className="btn-pry-sm"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      )}
      <BottomSpace />
      {cartItems.length > 0 ? (
        <div className="cart__bottom">
          <span className="home-btn" onClick={() => navigate("/")}>
            <GoHome />
          </span>
          <button type="button" className="btn-pry-bg" onClick={comingSoon}>
            Proceed to Cheeckout
          </button>
        </div>
      ) : (
        <Navbar />
      )}
    </div>
  );
}
