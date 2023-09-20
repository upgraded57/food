import "./deletemodal.css";
import { deleteItemFromCart } from "../../features/actions/CartActions";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function DeleteModal({ meal, setDeleteMealModal }) {
  const dispatch = useDispatch();

  const deleteMeal = () => {
    dispatch(deleteItemFromCart(meal));
    setDeleteMealModal(false);
    toast("Meal deleted from cart", {
      icon: "🗑️",
      style: {
        border: "1px solid var(--body-clr-dark)",
      },
    });
  };

  return (
    <div className="deletemodal">
      <div
        className="deletemodal__overlay"
        onClick={() => setDeleteMealModal(false)}
      ></div>
      <div className="deletemodal__container">
        <h2 className="h-200">Remove this meal from cart?</h2>
        <div className="deletemodal__container-content">
          <div className="deletemodal__container-content-img">
            <img src={`${meal.strMealThumb}/preview`} alt="" />
          </div>
          <div className="deletemodal__container-content-detail">
            <p className="text-body text-bold">{meal.strMeal}</p>
            <div className="deletemodal__container-content-detail-ingredients">
              {meal.strIngredient1 && <span>{meal.strIngredient1}</span>}
              {meal.strIngredient2 && <span>{meal.strIngredient2}</span>}
              {meal.strIngredient3 && <span>{meal.strIngredient3}</span>}
              {meal.strIngredient4 && <span>{meal.strIngredient4}</span>}
            </div>
          </div>
        </div>
        <div className="deletemodal__action-btn">
          <button className="delete" onClick={deleteMeal}>
            Delete
          </button>
          <button className="cancel" onClick={() => setDeleteMealModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
