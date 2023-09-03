import { toast } from "react-hot-toast";
import { axiosInstance } from "./AxiosInstance";
export const fetchMeal = async (setMealsLoading, setMeals) => {
  setMealsLoading(true);
  for (let i = 0; i <= 3; i++) {
    await axiosInstance({
      method: "get",
      url: "/random.php",
    })
      .then((res) => {
        setMeals((meals) => [...meals, res.data.meals[0]]);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setMealsLoading(false);
      });
  }
};

export const fetchMealList = async (setMealListLoading, setMealLists) => {
  setMealListLoading(true);
  for (let i = 0; i <= 4; i++) {
    await axiosInstance({
      method: "get",
      url: "/random.php",
    })
      .then((res) => {
        setMealLists((meals) => [...meals, res.data.meals[0]]);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setMealListLoading(false);
      });
  }
};

export const fetchMealById = async (id, setLoading, setMeal) => {
  setLoading(true);
  await axiosInstance({
    method: "get",
    url: "/lookup.php",
    params: {
      i: id,
    },
  })
    .then((res) => {
      setMeal(res.data.meals[0]);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    });
};

export const comingSoon = () => {
  toast("Coming Soon", {
    icon: "🖐🏼",
    duration: 2000,
    style: {
      border: "1px solid #32b768",
      color: "#32b768",
      borderRadius: "50px",
      padding: "5px 12px ",
    },
  });
};
