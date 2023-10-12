import "./history.css";
import Navbar from "../../Components/Navbar/Navbar";
import MealList from "../../Components/MealList/MealList";
import useFetchMealLists from "../../Hooks/useFetchMealLists";
import Loader from "../../Components/Loader/Loader";
import TopSpace from "./../../Components/TopSpace/TopSpace";

export default function History() {
  const { mealListLoading, mealLists } = useFetchMealLists();
  return (
    <div className="history">
      <div className="history__top">Booking History</div>
      <div className="history__list">
        {mealListLoading ? (
          <Loader type="list" />
        ) : (
          mealLists.map((meal) => {
            return <MealList key={meal.idMeal} meal={meal} history />;
          })
        )}
      </div>
      <TopSpace />
      <Navbar />
    </div>
  );
}
