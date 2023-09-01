import React from "react";
import "./home.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import userImg from "../../assets/images/user.jpg";
import { GoHome, GoHomeFill } from "react-icons/go";
import { AiFillBook, AiOutlineBook } from "react-icons/ai";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { MdKeyboardArrowRight, MdLocationPin } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

import burgerKingLogo from "../../assets/images/burger-king.png";
import deliciousBurgerImg from "../../assets/images/set-homemade-delicious-burgers.png";
import mealImg1 from "../../assets/images/meal1.png";
import mealImg2 from "../../assets/images/meal2.png";
import MealCard from "../../Components/MealCard/MealCard";
import SectionHead from "../../Components/SectionHead/SectionHead";
import MealList from "../../Components/MealList/MealList";

export default function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__top-burger">
          <CgMenuLeft />
        </div>
        <div className="home__top-location">
          <MdLocationPin className="icon" />
          <p className="text-small">Agrabad 435, Chittagong</p>
        </div>
        <div className="home__top-user">
          <img src={userImg} alt="user image" />
        </div>
      </div>

      <div className="home__search">
        <FiSearch />
        <input type="text" placeholder="Search" />
      </div>

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
          />
        </div>

        <div className="home__new-arrivals-cards">
          <MealCard
            mealImg={mealImg1}
            mealName="Chicken Biryani"
            mealLocation="Ambrosia Hotel & Restaurant"
          />
          <MealCard
            mealImg={mealImg2}
            mealName="Sauce Tonkatsu"
            mealLocation="Handi Restaurant,
          Chittagong
          "
          />
          <MealCard
            mealImg={mealImg1}
            mealName="Chicken Biryani"
            mealLocation="Ambrosia Hotel & Restaurant"
          />
          <MealCard
            mealImg={mealImg2}
            mealName="Sauce Tonkatsu"
            mealLocation="Handi Restaurant,
          Chittagong
          "
          />
          <MealCard
            mealImg={mealImg1}
            mealName="Chicken Biryani"
            mealLocation="Ambrosia Hotel & Restaurant"
          />
          <MealCard
            mealImg={mealImg2}
            mealName="Sauce Tonkatsu"
            mealLocation="Handi Restaurant,
          Chittagong
          "
          />
          <MealCard
            mealImg={mealImg1}
            mealName="Chicken Biryani"
            mealLocation="Ambrosia Hotel & Restaurant"
          />
          <MealCard
            mealImg={mealImg2}
            mealName="Sauce Tonkatsu"
            mealLocation="Handi Restaurant,
          Chittagong
          "
          />
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

      <div className="bottom-space"></div>
      <div className="home__nav">
        <ul>
          <li className="active">
            <GoHomeFill />
          </li>
          <li>
            <AiOutlineBook />
          </li>
          <li>
            <BiUser />
          </li>
        </ul>
      </div>
    </div>
  );
}
