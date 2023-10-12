import { useState } from "react";
import "./restaurant.css";

import { MdLocationPin } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import { addItemToCart } from "../../features/actions/CartActions";

import BottomSpace from "../../Components/BottomSpace/BottomSpace";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealList from "../../Components/MealList/MealList";

import ImageModal from "../../Components/ImageModal/ImageModal";
import GreenTop from "../../Components/GreenTop/GreenTop";
import useFetchMealLists from "../../Hooks/useFetchMealLists";
import Loader from "../../Components/Loader/Loader";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { axiosInstance } from "../../Api/AxiosInstance";
import { useQuery } from "react-query";

export default function Restaurant() {
  const dispatch = useDispatch();

  const { meal_id } = useParams();

  const fetchMealById = () => {
    return axiosInstance({
      method: "get",
      url: "/lookup.php",
      params: {
        i: meal_id,
      },
    });
  };

  const { isLoading, data } = useQuery(["fetchMeal", meal_id], fetchMealById);
  const meal = data ? data.data.meals[0] : {};

  const { mealListLoading, mealLists } = useFetchMealLists();

  // show image modal
  const [imageModal, setImageModal] = useState(false);

  const orderMeal = (meal) => {
    dispatch(addItemToCart(meal));
    toast.success("Meal added to cart");
  };

  return (
    <div className="restaurant">
      <GreenTop header="Meal Detail" />
      {isLoading ? (
        <Loader type="meal" />
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
              {meal.strIngredient1 && (
                <span>
                  <Link to={`/ingredients/${meal.strIngredient1}`}>
                    {meal.strIngredient1}
                  </Link>
                </span>
              )}
              {meal.strIngredient2 && (
                <span>
                  <Link to={`/ingredients/${meal.strIngredient2}`}>
                    {meal.strIngredient2}
                  </Link>
                </span>
              )}
              {meal.strIngredient3 && (
                <span>
                  <Link to={`/ingredients/${meal.strIngredient3}`}>
                    {meal.strIngredient3}
                  </Link>
                </span>
              )}
              {meal.strIngredient4 && (
                <span>
                  <Link to={`/ingredients/${meal.strIngredient4}`}>
                    {meal.strIngredient4}
                  </Link>
                </span>
              )}
              {meal.strIngredient5 && (
                <span>
                  <Link to={`/ingredients/${meal.strIngredient5}`}>
                    {meal.strIngredient5}
                  </Link>
                </span>
              )}
              {meal.strIngredient6 && (
                <span>
                  <Link to={`/ingredients/${meal.strIngredient6}`}>
                    {meal.strIngredient6}
                  </Link>
                </span>
              )}
              {meal.strIngredient7 && (
                <span>
                  <Link to={`/ingredients/${meal.strIngredient7}`}>
                    {meal.strIngredient7}
                  </Link>
                </span>
              )}
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
          <Loader type="list" />
        ) : (
          mealLists.slice(0, 4).map((meal) => {
            return <MealList key={meal.idMeal} meal={meal} history />;
          })
        )}
      </div>

      <BottomSpace />
      <div className="restaurant__book">
        <button
          className={isLoading ? "btn-pry-bg disabled" : "btn-pry-bg"}
          onClick={() => orderMeal(meal)}
        >
          Order This Meal
        </button>
      </div>

      {imageModal && <ImageModal meal={meal} setImageModal={setImageModal} />}
    </div>
  );
}
