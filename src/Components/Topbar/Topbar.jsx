import { useEffect, useState } from "react";
import "./topbar.css";

import userImg from "../../assets/images/user.jpg";
import { CgMenuLeft } from "react-icons/cg";
import { BsSortUp } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { TbMapPinSearch } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { AiOutlineClose, AiOutlineFire } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { PiCarrot } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import TopSpace from "../TopSpace/TopSpace";
import { axiosInstance } from "../../Api/AxiosInstance";
import { useQuery } from "react-query";
import { getUserIp } from "../../Api/Apicalls";

export default function Topbar() {
  const navigate = useNavigate();
  const [sidebarActive, setSidebarActive] = useState(false);

  const [userLocation, setUserLocation] = useState({});
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
    getUserIp(setLocationLoading, setUserLocation, setLocationError);
  }, []);

  const getRandomMeal = () => {
    return axiosInstance({
      method: "get",
      url: "/random.php",
    });
  };

  const { data } = useQuery("randomMeal", getRandomMeal);
  const randomMeal = data ? data.data.meals[0] : {};

  return (
    <>
      <div className="topbar">
        <div className="top">
          <div
            className="top-burger"
            onClick={() => setSidebarActive((prev) => !prev)}
          >
            {sidebarActive ? <AiOutlineClose /> : <CgMenuLeft />}
          </div>
          <div className="top-location">
            <MdLocationPin className="icon" />
            {!locationError ? (
              locationLoading ? (
                <p className="text-small">Fetching Location...</p>
              ) : (
                <p className="text-small">{`${userLocation.city} - ${userLocation.region}, ${userLocation.country}`}</p>
              )
            ) : (
              <p className="text-small">Could not determine your location</p>
            )}
          </div>
          <Link to="/profile" className="top-user">
            <img src={userImg} alt="user image" />
          </Link>
        </div>

        <div className={sidebarActive ? "sidebar active" : "sidebar"}>
          <div
            className="sidebar__overlay"
            onClick={() => setSidebarActive(false)}
          ></div>
          <div className="sidebar__bar">
            <li
              className="sidebar__bar-link"
              onClick={() => (setSidebarActive(false), navigate("/"))}
            >
              <div className="sidebar__bar-link-icon">
                <GoHome />
              </div>
              <p className="text-body">Home</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (setSidebarActive(false), navigate("/categories"))}
            >
              <div className="sidebar__bar-link-icon">
                <BsSortUp />
              </div>
              <p className="text-body">Food Category</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (
                setSidebarActive(false), navigate("/meal/" + randomMeal.idMeal)
              )}
            >
              <div className="sidebar__bar-link-icon">
                <AiOutlineFire />
              </div>
              <p className="text-body">Random Meal</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (
                setSidebarActive(false), navigate("/ingredients")
              )}
            >
              <div className="sidebar__bar-link-icon">
                <PiCarrot />
              </div>
              <p className="text-body">Browse by Ingredients</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (setSidebarActive(false), navigate("/area"))}
            >
              <div className="sidebar__bar-link-icon">
                <TbMapPinSearch />
              </div>
              <p className="text-body">Browse by Regions</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (
                setSidebarActive(false), navigate('/search/" " ')
              )}
            >
              <div className="sidebar__bar-link-icon">
                <FiSearch />
              </div>
              <p className="text-body">Search Meal</p>
            </li>
          </div>
        </div>
      </div>
      <TopSpace />
    </>
  );
}
