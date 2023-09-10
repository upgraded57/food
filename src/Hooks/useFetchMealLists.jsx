import { useEffect, useState } from "react";
import { fetchMealList } from "../Api/Apicalls";

export default function useFetchMealLists() {
  //meals loading fetch
  const [mealListLoading, setMealListLoading] = useState(null);
  const [mealLists, setMealLists] = useState([]);

  useEffect(() => {
    fetchMealList(setMealListLoading, setMealLists);
  }, []);
  return { mealListLoading, mealLists };
}
