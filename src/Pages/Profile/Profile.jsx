import React from "react";
import "./profile.css";

import Navbar from "../../Components/Navbar/Navbar";

import userImg from "../../assets/images/user.jpg";

import { BsBell, BsChatText, BsArrowUpCircle } from "react-icons/bs";
import { PiNotePencilBold, PiUserCircleLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { FaLanguage } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__card user">
        <div className="profile__card-left">
          <div className="profile__card-left-img">
            <img src={userImg} alt="" />
          </div>
          <div className="profile__card-left-user">
            <h2 className="h-200">Sadek Hossen</h2>
            <p className="text-small">sadekbranding@gmail.com</p>
          </div>
        </div>
        <div className="profile__card-right">
          <BsBell />
        </div>
      </div>

      <div className="profile__card">
        <div className="profile__card-left">
          <div className="profile__card-left-icon">
            <PiUserCircleLight />
          </div>
          <div className="profile__card-left-user">
            <h2 className="h-200 text-normal">Account Settings</h2>
          </div>
        </div>
        <div className="profile__card-right">
          <PiNotePencilBold />
        </div>
      </div>

      <div className="profile__card-list">
        <div className="profile__card list-item">
          <div className="profile__card-left">
            <div className="profile__card-left-icon">
              <FaLanguage />
            </div>
            <div className="profile__card-left-user">
              <h2 className="h-200 text-normal">Account Settings</h2>
            </div>
          </div>
          <div className="profile__card-right">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="profile__card list-item">
          <div className="profile__card-left">
            <div className="profile__card-left-icon">
              <BsChatText />
            </div>
            <div className="profile__card-left-user">
              <h2 className="h-200 text-normal">Account Settings</h2>
            </div>
          </div>
          <div className="profile__card-right">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="profile__card list-item">
          <div className="profile__card-left">
            <div className="profile__card-left-icon">
              <AiOutlineStar />
            </div>
            <div className="profile__card-left-user">
              <h2 className="h-200 text-normal">Account Settings</h2>
            </div>
          </div>
          <div className="profile__card-right">
            <IoIosArrowForward />
          </div>
        </div>

        <div className="profile__card list-item">
          <div className="profile__card-left">
            <div className="profile__card-left-icon">
              <BsArrowUpCircle />
            </div>
            <div className="profile__card-left-user">
              <h2 className="h-200 text-normal">Account Settings</h2>
            </div>
          </div>
          <div className="profile__card-right">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
