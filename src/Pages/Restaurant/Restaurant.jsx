import React, { useEffect, useState } from "react";
import "./restaurant.css";

import { BiLeftArrowAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";

import BottomSpace from "../../Components/BottomSpace/BottomSpace";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealList from "../../Components/MealList/MealList";

import { comingSoon, fetchMealById, fetchMealList } from "../../Api/Apicalls";
import MealListPlaceHolder from "../../Components/MealListPlaceholder/MealListPlaceHolder";
import ImageModal from "../../Components/ImageModal/ImageModal";
import MealPlaceholder from "../../Components/MealPlaceholder/MealPlaceholder";
import GreenTop from "../../Components/GreenTop/GreenTop";

export default function Restaurant() {
  const navigate = useNavigate();

  const { meal_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState({});

  useEffect(() => {
    fetchMealById(meal_id, setLoading, setMeal);
  }, [meal_id]);

  //meals loading fetch
  const [mealListLoading, setMealListLoading] = useState(null);
  const [mealLists, setMealLists] = useState([]);

  useEffect(() => {
    fetchMealList(setMealListLoading, setMealLists);
  }, []);

  // show image modal
  const [imageModal, setImageModal] = useState(false);

  return (
    <div className="restaurant">
      <GreenTop header="Meal Detail" />
      {loading ? (
        <MealPlaceholder />
      ) : (
        <div className="restaurant__detail">
          <div className="restaurant__detail-top">
            <span>
              <h2 className="h-200">{meal.strMeal}</h2>
              <span className="restaurant__detail-top-location">
                <MdLocationPin className="location-icon" />
                <p className="text-small">{meal.strArea}</p>
              </span>
            </span>
          </div>
          <div
            className="restaurant__detail-img"
            onClick={() => setImageModal(true)}
          >
            <img src={meal.strMealThumb} alt="" />
          </div>

          <div className="restaurant__detail-bottom">
            <p className="text-body text-bold">Ingredients</p>
            <div className="restaurant__detail-bottom-food-tags">
              {meal.strIngredient1 && <span>{meal.strIngredient1}</span>}
              {meal.strIngredient2 && <span>{meal.strIngredient2}</span>}
              {meal.strIngredient3 && <span>{meal.strIngredient3}</span>}
              {meal.strIngredient4 && <span>{meal.strIngredient4}</span>}
              {meal.strIngredient5 && <span>{meal.strIngredient5}</span>}
              {meal.strIngredient6 && <span>{meal.strIngredient6}</span>}
              {meal.strIngredient7 && <span>{meal.strIngredient7}</span>}
            </div>
          </div>
        </div>
      )}

      <SectionHead
        title="Similar Meals"
        subtitle="See similar meals around here"
        linkText="See All"
        linkLocation="/arrivables"
      />
      <div className="restaurant__other">
        {mealListLoading ? (
          <MealListPlaceHolder />
        ) : (
          mealLists.slice(0, 4).map((mealList) => {
            return <MealList key={mealList.idMeal} meal={mealList} history />;
          })
        )}
      </div>

      <BottomSpace />
      <div className="restaurant__book">
        <button className="btn-pry-bg" onClick={comingSoon}>
          Order This Meal
        </button>
      </div>

      {imageModal && <ImageModal meal={meal} setImageModal={setImageModal} />}
    </div>
  );
}
