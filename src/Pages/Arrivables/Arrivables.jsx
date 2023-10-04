import "./arrivables.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealCard from "../../Components/MealCard/MealCard";
import MealList from "../../Components/MealList/MealList";
import BottomSpace from "../../Components/BottomSpace/BottomSpace";
import useFetchMealLists from "../../Hooks/useFetchMealLists";
import useFetchMeals from "../../Hooks/useFetchMeals";
import Loader from "../../Components/Loader/Loader";

export default function Arrivables() {
  const { mealListLoading, mealList } = useFetchMealLists();
  const { mealLoading, meals } = useFetchMeals();

  return (
    <div className="arrivables">
      <Topbar />
      <Search />
      <SectionHead
        title="Today's New Arrivables"
        subtitle="Best of today's food list update"
        linkText={false}
        linkLocation="/"
      />

      <div className="arrivables__meal-cards">
        {mealLoading ? (
          <Loader type="card" />
        ) : (
          meals.map((meal) => {
            return <MealCard key={meal.idMeal} meal={meal} />;
          })
        )}
      </div>

      <SectionHead
        title="Explore Restaurants"
        subtitle="Check your city Near by Restaurant"
        linkText="See All"
        linkLocation="/"
      />

      <div className="arrivables__restaurants">
        {mealListLoading ? (
          <Loader type="list" />
        ) : (
          mealList.map((meal) => {
            return <MealList key={meal.idMeal} meal={meal} />;
          })
        )}
      </div>

      <BottomSpace />
      <Navbar />
    </div>
  );
}
