import React, { useEffect, useState } from "react";
import "./topbar.css";

import userImg from "../../assets/images/user.jpg";
import { CgMenuLeft } from "react-icons/cg";
import { VscLayoutMenubar } from "react-icons/vsc";
import { BsSortUp } from "react-icons/bs";
import { MdLocationPin, MdOutlineDeliveryDining } from "react-icons/md";
import { TbMapPinSearch } from "react-icons/tb";
import { AiOutlineClose, AiOutlineFire } from "react-icons/ai";
import { Link } from "react-router-dom";
import TopSpace from "../TopSpace/TopSpace";
import axios from "axios";
import { comingSoon } from "../../Api/Apicalls";

export default function Topbar() {
  const [sidebarActive, setSidebarActive] = useState(false);

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
        .catch(() => setLocationError(true))
        .finally(() => {
          setLocationLoading(false);
        });
    };
    getUserIp();
  }, []);
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
              <p className="text-small">Couldn't get your location</p>
            )}
          </div>
          <Link to="/profile/user" className="top-user">
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
              onClick={() => (setSidebarActive(false), comingSoon())}
            >
              <div className="sidebar__bar-link-icon">
                <VscLayoutMenubar />
              </div>
              <p className="text-body">Food Menu</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (setSidebarActive(false), comingSoon())}
            >
              <div className="sidebar__bar-link-icon">
                <BsSortUp />
              </div>
              <p className="text-body">Food Category</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (setSidebarActive(false), comingSoon())}
            >
              <div className="sidebar__bar-link-icon">
                <AiOutlineFire />
              </div>
              <p className="text-body">Popular Foods</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (setSidebarActive(false), comingSoon())}
            >
              <div className="sidebar__bar-link-icon">
                <MdOutlineDeliveryDining />
              </div>
              <p className="text-body">Foods Near me</p>
            </li>
            <li
              className="sidebar__bar-link"
              onClick={() => (setSidebarActive(false), comingSoon())}
            >
              <div className="sidebar__bar-link-icon">
                <TbMapPinSearch />
              </div>
              <p className="text-body">Browse by Regions</p>
            </li>
          </div>
        </div>
      </div>
      <TopSpace />
    </>
  );
}
