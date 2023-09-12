import React, { useEffect, useState } from "react";
import "../Area/area.css";
import Topbar from "../../Components/Topbar/Topbar";
import Search from "../../Components/Search/Search";
import SectionHead from "../../Components/SectionHead/SectionHead";
import { axiosInstance } from "../../Api/AxiosInstance";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "./../../Components/Loader/Loader";
import { toast } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

export default function Ingredients() {
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const fetchIngredients = async () => {
    setLoading(true);
    await axiosInstance({
      method: "get",
      url: "/list.php",
      params: {
        i: "list",
      },
    })
      .then((res) => {
        if (res.data.meals === null) {
          setIngredients([]);
        } else {
          setIngredients(res.data.meals);
          setFilteredIngredients(res.data.meals);
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  const [pagination, setPagination] = useState(9);

  const showMore = () => {
    if (pagination >= filteredIngredients.length) {
      toast("That's all for now!");
    } else {
      setPagination((prev) => prev + 9);
    }
  };

  const searchMeal = (e) => {
    const result = ingredients.filter((ingredient) =>
      ingredient.strIngredient
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setFilteredIngredients(result);
  };

  return (
    <>
      <Topbar />
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <FiSearch />
          <input type="text" placeholder="Search" onChange={searchMeal} />
        </form>
      </div>
      <SectionHead
        title="Find Meals by Ingredient"
        subtitle="Select an ingredient to view meals avaiable"
      />

      <div className="area">
        {loading ? (
          <div className="area__loader">
            <Loader type="list" />
          </div>
        ) : (
          <>
            <ul>
              {filteredIngredients
                .slice(0, pagination)
                .map((ingredient, index) => {
                  return (
                    <Link
                      to={`/ingredients/${ingredient.strIngredient}`}
                      className="area__list"
                      key={index}
                    >
                      <span className="area__left">
                        <img
                          src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-small.png`}
                          alt=""
                        />
                        <p>{ingredient.strIngredient}</p>
                      </span>
                      <span className="area__list-icon">
                        <BsArrowRight />
                      </span>
                    </Link>
                  );
                })}
            </ul>
            <div className="view-more-btn">
              <button type="button" className="btn-pry-bg" onClick={showMore}>
                Show More
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
