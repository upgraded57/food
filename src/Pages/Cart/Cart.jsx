import "./cart.css";
import Topbar from "../../Components/Topbar/Topbar";
import BottomSpace from "../../Components/BottomSpace/BottomSpace";

import emptyCartImg from "../../assets/images/emptycart.png";

import { comingSoon } from "../../Api/Apicalls";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./../../Components/Navbar/Navbar";
import { GoHome } from "react-icons/go";
import CartItem from "./CartItem";
import { useState } from "react";

export default function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <div className="cart">
        <Topbar />
        <h2 className="h-200 text-center" style={{ marginTop: "20px" }}>
          My Cart
        </h2>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((meal) => {
              return <CartItem meal={meal} key={meal.idMeal} />;
            })}
            <div className="cart__total">
              <p className="text-body">Total</p>
              <span className="cart__total-price">$2000</span>
            </div>
          </>
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
    </>
  );
}
