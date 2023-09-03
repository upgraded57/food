import React, { useState } from "react";
import "./imagemodal.css";

import { BiLeftArrowAlt, BiDotsVerticalRounded } from "react-icons/bi";

export default function ImageModal({ meal, setImageModal }) {
  const [fullscreen, setFullscreen] = useState(true);
  return (
    <div className="image-modal" onClick={() => setFullscreen((prev) => !prev)}>
      <div
        className={fullscreen ? "image-modal__top active" : "image-modal__top"}
      >
        <span className="close-btn" onClick={() => setImageModal(false)}>
          <BiLeftArrowAlt />
        </span>

        <span className="meal-name">{meal.strMeal} </span>
        <span className="share-btn">
          <BiDotsVerticalRounded />
        </span>
      </div>

      <div className="image-modal__image">
        <img src={meal.strMealThumb} alt="" />
      </div>
    </div>
  );
}
