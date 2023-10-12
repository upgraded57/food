import { useQueries, useQuery } from "react-query";
import { axiosInstance } from "../Api/AxiosInstance";

export default function useFetchMeals() {
  const fetchMeal = () => {
    return axiosInstance({
      method: "get",
      url: "/random.php",
    });
  };

  const mealIDs = [1, 2, 3, 4, 5];

  const queries = useQueries(
    mealIDs.map((id) => ({
      queryKey: ["mealList", id],
      queryFn: fetchMeal,
      select: (data) => data.data.meals[0],
    }))
  );

  const meals = queries.map((query) => query.data);

  const {
    isLoading: mealLoading,
    isError,
    error: mealError,
    data,
  } = useQuery("fetchMeal", fetchMeal);

  return { mealLoading, mealError, meals };
}
