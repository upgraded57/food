import React from "react";
import "./topbar.css";

import userImg from "../../assets/images/user.jpg";
import { CgMenuLeft } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="top">
      <div className="top-burger">
        <CgMenuLeft />
      </div>
      <div className="top-location">
        <MdLocationPin className="icon" />
        <p className="text-small">Agrabad 435, Chittagong</p>
      </div>
      <div className="top-user">
        <img src={userImg} alt="user image" />
      </div>
    </div>
  );
}
