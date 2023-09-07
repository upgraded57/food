import React from "react";
import "./cart.css";
import GreenTop from "../../Components/GreenTop/GreenTop";
import BottomSpace from "../../Components/BottomSpace/BottomSpace";

import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { GrClear } from "react-icons/gr";

import tempCartImg from "../../assets/images/meal1.png";
import { comingSoon } from "../../Api/Apicalls";

export default function Cart() {
  return (
    <div className="cart">
      <GreenTop header="Cart" />

      <div className="cart__container">
        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>

        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>

        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>

        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>

        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>
        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>
        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>
        <div className="cart__item">
          <div className="cart__item-img">
            <img src={tempCartImg} alt="Product Image" />
          </div>
          <div className="cart__item-center">
            <h3 className="h-200">Meal Name Goes Here</h3>
            <div className="meal-quantity-toggle">
              <AiOutlineMinusSquare className="qty-toggle-icon" />
              <h2 className="h-200">3</h2>
              <AiOutlinePlusSquare className="qty-toggle-icon" />
            </div>
            <div className="meal-price">$3,042.36</div>
          </div>
          <div className="cart__item-delete-icon">
            <GrClear className="del-icon" />
          </div>
        </div>
      </div>
      <BottomSpace />
      <div className="cart__bottom">
        <button type="button" className="btn-pry-bg" onClick={comingSoon}>
          Proceed to Cheeckout
        </button>
      </div>
    </div>
  );
}
