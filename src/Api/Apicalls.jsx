import { axiosInstance } from "./AxiosInstance";
export const fetchMeal = async (setLoading, setMeals) => {
  setLoading(true);
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
        setLoading(false);
      });
  }
};
