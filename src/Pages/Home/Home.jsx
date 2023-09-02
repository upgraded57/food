import React, { useEffect, useState } from "react";
import "./home.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { MdKeyboardArrowRight } from "react-icons/md";

import burgerKingLogo from "../../assets/images/burger-king.png";
import deliciousBurgerImg from "../../assets/images/set-homemade-delicious-burgers.png";
import mealImg1 from "../../assets/images/meal1.png";
import mealImg2 from "../../assets/images/meal2.png";
import MealCard from "../../Components/MealCard/MealCard";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealList from "../../Components/MealList/MealList";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import Search from "../../Components/Search/Search";
import BottomSpace from "../../Components/BottomSpace/BottomSpace";
import { fetchMeal } from "../../Api/Apicalls";
import MealCardPlaceholder from "../../Components/MealCardPlaceholder/MealCardPlaceholder";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeal(setLoading, setMeals);
  }, []);

  const [userLocation, setUserLocation] = useState({});
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
    setLocationLoading(true);
    const getUserIp = async () => {
      await axios
        .get("https://api.ipify.org?format=json")
        .then((res) =>
          axios
            .get(`http://ip-api.com/json/${res.data.ip}?fields=32789`)
            .then((res) => setUserLocation(res.data))
            .catch((err) => {
              console.log(err);
              setLocationError(true);
            })
            .finally(() => {
              setLocationLoading(false);
            })
        )
        .catch((err) => setLocationError(true))
        .finally(() => {
          setLocationLoading(false);
        });
    };
    getUserIp();
  }, []);

  return (
    <div className="home">
      <Topbar
        userLocation={userLocation}
        locationLoading={locationLoading}
        locationError={locationError}
      />
      <Search />

      <Swiper
        slidesPerView={1.25}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="home__highlights-reel reel-1">
            <div className="home__highlights-reel-content">
              <div className="reel-logo">
                <img src={burgerKingLogo} alt="higlight product logo" />
              </div>
              <div className="reel-text">
                <h2 className="h-200">Flash Offer</h2>
                <p className="text-small">
                  We are here with the best deserts intown.
                </p>
              </div>
              <div className="reel-cta">
                <p className="text-body text-bold">Order</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <div className="home__highlights-reel-image">
              <img src={deliciousBurgerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home__highlights-reel reel-2">
            <div className="home__highlights-reel-content">
              <div className="reel-logo">
                <img src={burgerKingLogo} alt="higlight product logo" />
              </div>
              <div className="reel-text">
                <h2 className="h-200">Flash Offer</h2>
                <p className="text-small">
                  We are here with the best deserts intown.
                </p>
              </div>
              <div className="reel-cta">
                <p className="text-body text-bold">Order</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <div className="home__highlights-reel-image">
              <img src={deliciousBurgerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home__highlights-reel reel-3">
            <div className="home__highlights-reel-content">
              <div className="reel-logo">
                <img src={burgerKingLogo} alt="higlight product logo" />
              </div>
              <div className="reel-text">
                <h2 className="h-200">Flash Offer</h2>
                <p className="text-small">
                  We are here with the best deserts intown.
                </p>
              </div>
              <div className="reel-cta">
                <p className="text-body text-bold">Order</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <div className="home__highlights-reel-image">
              <img src={deliciousBurgerImg} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="home__new-arrivals">
        <div className="home__new-arrivals-head">
          <SectionHead
            title="Today's New Arrivable"
            subtitle="Best of today's food list update"
            linkText="See All"
            linkLocation="/arrivables"
          />
        </div>

        <div className="home__new-arrivals-cards">
          {loading ? (
            <MealCardPlaceholder />
          ) : (
            meals.map((meal) => {
              return <MealCard key={meal.idMeal} meal={meal} />;
            })
          )}
        </div>
      </div>

      <div className="home__new-arrivals">
        <div className="home__new-arrivals-head">
          <SectionHead
            title="Booking Restaurant"
            subtitle="Check your city's nearby Restaurant"
            linkText="See All"
          />
        </div>
        <div className="home__new-arrivals-list">
          <MealList
            name="Hotel Zaman Restaurant"
            location="kazi Deiry, Taiger Pass
              Chittagong"
          />
          <MealList
            name="Ambrosia Hotel & Restaurant"
            location="kazi Deiry, Taiger Pass
                      Chittagong"
          />
          <MealList
            name="Tava Restaurant"
            location="Zakir Hossain Rd, Chittagong"
          />
          <MealList name="Haatkhola" location="6 Surson Road, Chittagong" />
        </div>
      </div>

      <BottomSpace />
      <Navbar />
    </div>
  );
}
