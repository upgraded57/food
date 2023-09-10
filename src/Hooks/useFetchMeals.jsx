import { useEffect, useState } from "react";
import { fetchMeal } from "../Api/Apicalls";

export default function useFetchMeals() {
  const [loading, setLoading] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeal(setLoading, setMeals);
  }, []);

  return { loading, meals };
}
