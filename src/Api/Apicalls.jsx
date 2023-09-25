import { toast } from "react-hot-toast";
import { axiosInstance } from "./AxiosInstance";
import axios from "axios";
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

export const searchMealByName = async (
  search_query,
  setSearchLoading,
  setSearchResults
) => {
  setSearchLoading(true);
  await axiosInstance({
    method: "get",
    url: "/search.php?",
    params: {
      s: search_query,
    },
  })
    .then((res) => {
      if (res.data.meals === null) {
        setSearchResults([]);
      } else {
        setSearchResults(res.data.meals);
      }
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setSearchLoading(false);
    });
};

export const getMealCategories = async (setLoading, setMealCategories) => {
  setLoading(true);
  await axiosInstance({
    method: "get",
    url: "/categories.php",
  })
    .then((res) => {
      setMealCategories(res.data.categories);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const getMealsByCategory = async (setLoading, setMeals, category) => {
  setLoading(true);
  await axiosInstance({
    method: "get",
    url: "/filter.php",
    params: {
      c: category,
    },
  })
    .then((res) => {
      setMeals(res.data.meals);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const getMealsByArea = async (setLoading, setMeals, area) => {
  setLoading(true);
  await axiosInstance({
    method: "get",
    url: "/filter.php",
    params: {
      a: area,
    },
  })
    .then((res) => {
      setMeals(res.data.meals);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const getMealsByIngredients = async (
  setLoading,
  setMeals,
  ingredient
) => {
  setLoading(true);
  await axiosInstance({
    method: "get",
    url: "/filter.php",
    params: {
      i: ingredient,
    },
  })
    .then((res) => {
      setMeals(res.data.meals);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const getRandomMeal = async (setRandomMeal) => {
  await axiosInstance({
    method: "get",
    url: "/random.php",
  })
    .then((res) => {
      setRandomMeal(res.data.meals[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// const getUserData = async() => {
//   await axios.get("https://randomuser.me/api/").then((res) => {
//     useDispatch
//   })
// }
