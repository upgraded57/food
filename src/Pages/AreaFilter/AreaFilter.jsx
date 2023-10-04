import { Link, useParams } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Search from "../../Components/Search/Search";
import SectionHead from "../../Components/SectionHead/SectionHead";
import "../Home/home.css";
import "./areafilter.css";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MealList from "../../Components/MealList/MealList";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";
import { axiosInstance } from "../../Api/AxiosInstance";
import { useQuery } from "react-query";

export default function CategoriesFilter() {
  const { area } = useParams();
  const getMealsByArea = () => {
    return axiosInstance({
      method: "get",
      url: "/filter.php",
      params: {
        a: area,
      },
    });
  };

  const { isLoading, data } = useQuery(["getAreaMeals", area], getMealsByArea);

  const meals = data ? data.data.meals : [];

  const bgArray = [
    "(90deg, #3ad59f 0%, #f8ff00 100%)",
    "(90deg, #3a47d5 0%, #00d2ff 100%)",
    "(90deg, #c67700 0%, #fcff9e 100%)",
    "(90deg, #22C1C3 0%, #FDBB2D 100%)",
    "(90deg, #FC466B 0%, #3F5EFB 100%)",
  ];

  const [pageNum, setPageNum] = useState(9);

  const increasePagination = () => {
    if (pageNum >= meals.length) {
      toast("That's all for now");
    } else {
      setPageNum((prev) => prev + 9);
    }
  };

  return (
    <>
      <Topbar />
      <Search />
      <SectionHead
        title={`Top ${area} Meals`}
        subtitle={`Most sought after ${area.toLowerCase()} from around you`}
      />

      <div className="categoriesfilter">
        {isLoading ? (
          <Loader type="carousel" />
        ) : (
          <Swiper
            slidesPerView={1.25}
            spaceBetween={20}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {meals.slice(0, 3).map((meal, index) => {
              return (
                <SwiperSlide key={meal.idMeal}>
                  <Link
                    to={`/meal/${meal.idMeal}`}
                    className="home__highlights-reel"
                    style={{
                      background: `linear-gradient${bgArray[index]}`,
                    }}
                  >
                    <div className="home__highlights-reel-content">
                      <div className="reel-text">
                        <h2 className="h-200">
                          {meal.strMeal.length < 16
                            ? meal.strMeal
                            : meal.strMeal.slice(0, 16) + "..."}
                        </h2>
                        <p className="text-small">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quos, voluptates!
                        </p>
                      </div>
                      <div className="reel-cta">
                        <p className="text-body text-bold">Order</p>
                        <MdKeyboardArrowRight />
                      </div>
                    </div>
                    <div className="home__highlights-reel-image category-page">
                      <img src={`${meal.strMealThumb}/preview`} alt="" />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
      <SectionHead
        title={`Browse All ${area} Meals`}
        subtitle={`Check out a broad list of ${area.toLowerCase()} meals`}
      />

      <div className="categoriesfilter">
        <div className="categoriesfilter__list">
          {isLoading ? (
            <Loader type="list" />
          ) : (
            meals.slice(0, pageNum).map((meal) => {
              return <MealList meal={meal} key={meal.idMeal} location={area} />;
            })
          )}
        </div>
      </div>

      {pageNum <= meals.length && (
        <div className="view-more-btn">
          <button
            type="button"
            className="btn-pry-bg"
            onClick={increasePagination}
          >
            View More
          </button>
        </div>
      )}
    </>
  );
}
