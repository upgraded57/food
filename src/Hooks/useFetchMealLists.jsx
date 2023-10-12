import { useQueries, useQuery } from "react-query";
import { axiosInstance } from "../Api/AxiosInstance";

export default function useFetchMealLists() {
  const fetchMealLists = () => {
    return axiosInstance({
      method: "get",
      url: "/random.php",
    });
  };

  const mealIDs = [1, 2, 3, 4, 5];

  const queries = useQueries(
    mealIDs.map((id) => ({
      queryKey: ["mealList", id],
      queryFn: fetchMealLists,
      select: (data) => data.data.meals[0],
    }))
  );

  const mealLists = queries.map((query) => query.data);

  const {
    isLoading: mealListLoading,
    isError,
    error: mealListError,
    data,
  } = useQuery("mealLists", fetchMealLists);

  // const mealList = data ? data.data.meals : [];

  return { mealListLoading, mealListError, mealLists };
}
