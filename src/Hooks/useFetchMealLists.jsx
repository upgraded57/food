import { useQuery } from "react-query";
import { axiosInstance } from "../Api/AxiosInstance";

export default function useFetchMealLists() {
  const fetchMealLists = () => {
    for (let i = 0; i <= 4; i++) {
      return axiosInstance({
        method: "get",
        url: "/random.php",
      });
    }
  };

  const { isLoading, isError, data } = useQuery("mealLists", fetchMealLists);

  const mealList = data ? data.data.meals : [];
  const mealListLoading = isLoading;
  const mealListError = isError;

  return { mealListLoading, mealListError, mealList };
}
