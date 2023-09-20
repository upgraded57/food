import React, { useState } from "react";
import "./cart.css";
import { GoTrash } from "react-icons/go";
import DeleteModal from "./DeleteModal";

export default function CartItem({ meal }) {
  const [deleteMealModal, setDeleteMealModal] = useState(false);
  const deleteMeal = () => {
    setDeleteMealModal(true);
  };
  return (
    <>
      <div className="cart__container active">
        <div className="cart__item">
          <div className="cart__item-img">
            <img src={meal.strMealThumb + "/preview"} alt="Product Image" />
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
          <div className="cart__item-delete-icon" onClick={deleteMeal}>
            <GoTrash className="del-icon" />
          </div>
        </div>
      </div>
      {deleteMealModal && (
        <DeleteModal meal={meal} setDeleteMealModal={setDeleteMealModal} />
      )}
    </>
  );
}
