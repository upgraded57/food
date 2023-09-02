import React, { useState } from "react";
import "./topbar.css";

import userImg from "../../assets/images/user.jpg";
import { CgMenuLeft } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { CiGrid32 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Topbar({
  userLocation,
  locationLoading,
  locationError,
}) {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
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
        <Link to="/profile" className="top-user">
          <img src={userImg} alt="user image" />
        </Link>
      </div>

      <div className={sidebarActive ? "sidebar active" : "sidebar"}>
        <div className="sidebar__overlay"></div>
        <div className="sidebar__bar">
          <li
            className="sidebar__bar-link"
            onClick={() => setSidebarActive(false)}
          >
            <div className="sidebar__bar-link-icon">
              <CiGrid32 />
            </div>
            <p className="text-body">Some Link Here</p>
          </li>
          <li
            className="sidebar__bar-link"
            onClick={() => setSidebarActive(false)}
          >
            <div className="sidebar__bar-link-icon">
              <CiGrid32 />
            </div>
            <p className="text-body">Some Link Here</p>
          </li>
          <li
            className="sidebar__bar-link"
            onClick={() => setSidebarActive(false)}
          >
            <div className="sidebar__bar-link-icon">
              <CiGrid32 />
            </div>
            <p className="text-body">Some Link Here</p>
          </li>
          <li
            className="sidebar__bar-link"
            onClick={() => setSidebarActive(false)}
          >
            <div className="sidebar__bar-link-icon">
              <CiGrid32 />
            </div>
            <p className="text-body">Some Link Here</p>
          </li>
          <li
            className="sidebar__bar-link"
            onClick={() => setSidebarActive(false)}
          >
            <div className="sidebar__bar-link-icon">
              <CiGrid32 />
            </div>
            <p className="text-body">Some Link Here</p>
          </li>
        </div>
      </div>
    </div>
  );
}
