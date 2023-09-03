import React from "react";
import "./userprofile.css";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";

import userImg from "../../assets/images/user.jpg";
import paypal from "../../assets/images/paypal.png";
import mastercard from "../../assets/images/mastercard.png";

export default function UserProfile() {
  const navigate = useNavigate();
  return (
    <div className="userprofile">
      <div className="userprofile__top">
        <div className="back-icon" onClick={() => navigate(-1)}>
          <BiLeftArrowAlt />
        </div>
        <p>My Profile</p>
      </div>
      <div className="userprofile__user">
        <div className="userprofile__user-avatar">
          <img src={userImg} alt="Avatar" />
        </div>
        <h2 className="h-200">Jane McDowells</h2>
      </div>

      <div className="userprofile__section">
        <div className="userprofile__section-head">
          <h3 className="h-100">Contact Information</h3>
        </div>
        <div className="userprofile__section-list">
          <span className="profile-icon">
            <MdOutlineMail />
          </span>
          <p className="text-body">Johnconnor@hotmail.com</p>
        </div>
        <div className="userprofile__section-list">
          <span className="profile-icon">
            <FaRegAddressCard />
          </span>
          <p className="text-body">(234) 818 980 7654</p>
        </div>
        <div className="userprofile__section-list">
          <span className="profile-icon">
            <MdOutlineLocationOn />
          </span>
          <p className="text-body">14, Makoko way, Ajegunle, Lagos</p>
        </div>
      </div>

      <div className="userprofile__section">
        <div className="userprofile__section-head">
          <h3 className="h-100">Order Summary</h3>
        </div>
        <div className="userprofile__section-orders">
          <div className="userprofile__section-order-list">
            <span className="order-circle order">34</span>
            <p className="text-body text-center">
              Orders <br /> Placed
            </p>
          </div>

          <div className="userprofile__section-order-list">
            <span className="order-circle success">32</span>
            <p className="text-body text-center">
              Orders <br /> Delivered
            </p>
          </div>

          <div className="userprofile__section-order-list">
            <span className="order-circle failure">2</span>
            <p className="text-body text-center">
              Orders <br /> Unsuccessful
            </p>
          </div>
        </div>
      </div>

      <div className="userprofile__section">
        <div className="userprofile__section-head">
          <h3 className="h-100">Payment Methods</h3>
        </div>
        <div className="userprofile__section-payments">
          <div className="userprofile__section-payments-card">
            <div className="userprofile__section-payments-card-top">
              <div className="card-logo">
                <img src={mastercard} alt="" />
              </div>
              <p className="text-body text-bold">MasterCard</p>
            </div>
            <div className="userprofile__section-payments-card-content">
              <div className="card-number-icon">
                <BsCreditCard />
              </div>
              <span className="card-number">1234 **** 2341 **** 879</span>
            </div>
          </div>

          <div className="userprofile__section-payments-card">
            <div className="userprofile__section-payments-card-top">
              <div className="card-logo">
                <img src={paypal} alt="" />
              </div>
              <p className="text-body text-bold">Paypal</p>
            </div>
            <div className="userprofile__section-payments-card-content">
              <div className="card-number-icon">
                <BsCreditCard />
              </div>
              <span className="card-number">1234 **** 2341 **** 879</span>
            </div>
          </div>

          <div className="userprofile__section-payments-card">
            <div className="userprofile__section-payments-card-top">
              <div className="card-logo">
                <img src={mastercard} alt="" />
              </div>
              <p className="text-body text-bold">MasterCard</p>
            </div>
            <div className="userprofile__section-payments-card-content">
              <div className="card-number-icon">
                <BsCreditCard />
              </div>
              <span className="card-number">1234 **** 2341 **** 879</span>
            </div>
          </div>
        </div>
      </div>

      <div className="userprofile__edit-btn">
        <button type="button" className="btn-pry-bg">
          Edit Profile Info
        </button>
      </div>
    </div>
  );
}
