import React from "react";
import "./editaccount.css";
import "../Auth/auth.css";
import GreenTop from "../../Components/GreenTop/GreenTop";
import { FiEdit2 } from "react-icons/fi";

import userImg from "../../assets/images/user.jpg";
import { comingSoon } from "../../Api/Apicalls";

export default function EditAccount() {
  return (
    <>
      <GreenTop header="Edit Account" />
      <div className="editaccount">
        <div className="editaccount__dp">
          <div className="dp-container">
            <img src={userImg} alt="" />
          </div>
          <div className="edit-icon">
            <FiEdit2 />
          </div>
        </div>
        <div className="auth__modal-form">
          <div className="auth__modal-form-screen">
            <form>
              <span>
                <label htmlFor="fullname">
                  <p className="text-body text-bold">Full Name</p>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Jane MacDowells"
                  />
                </label>
              </span>
              <span>
                <label htmlFor="email">
                  <p className="text-body text-bold">Email address</p>
                  <input
                    type="email"
                    id="email"
                    placeholder="Eg namaemail@emailkamu.com"
                  />
                </label>
              </span>
              <span>
                <label htmlFor="phone">
                  <p className="text-body text-bold">Phone Number</p>
                  <input
                    type="email"
                    id="email"
                    placeholder="(+234 (0) 814 473 9905)"
                  />
                </label>
              </span>
              <span>
                <label htmlFor="address">
                  <p className="text-body text-bold">Delivery Address</p>
                  <input
                    type="text"
                    id="address"
                    placeholder="Somewhere Street, Some City, Some State"
                  />
                </label>
              </span>
            </form>
          </div>
        </div>

        <div className="editaccount__bottom">
          <button type="button" className="btn-pry-bg" onClick={comingSoon}>
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
}
