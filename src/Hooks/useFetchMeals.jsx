import { useQuery } from "react-query";
import { axiosInstance } from "../Api/AxiosInstance";

export default function useFetchMeals() {
  const fetchMeal = () => {
    return axiosInstance({
      method: "get",
      url: "/random.php",
    });
  };

  const { isLoading, isError, data } = useQuery("fetchMeal", fetchMeal);
  const meals = data ? data.data.meals : [];
  const mealLoading = isLoading;
  const mealError = isLoading;

  return { mealLoading, mealError, meals };
}
