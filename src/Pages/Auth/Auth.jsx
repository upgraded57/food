import React, { useEffect, useState } from "react";
import "./auth.css";

import welcomeImg from "../../assets/images/auth.svg";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Auth() {
  const [authNavs, setAuthNavs] = useState(null);
  const [authScreen, setAuthScreen] = useState(null);

  useEffect(() => {
    setAuthNavs(document.querySelectorAll(".auth__modal-nav span"));
    setAuthScreen(document.querySelector(".auth__modal-form"));
  }, []);

  if (authNavs !== null) {
    authNavs[0].addEventListener("click", () => {
      if (!authNavs[0].classList.contains("active")) {
        authNavs[0].classList.add("active");
      }
      if (authNavs[1].classList.contains("active")) {
        authNavs[1].classList.remove("active");
      }
      if (authScreen) {
        authScreen.style.left = "0";
      }
    });

    authNavs[1].addEventListener("click", () => {
      if (!authNavs[1].classList.contains("active")) {
        authNavs[1].classList.add("active");
      }
      if (authNavs[0].classList.contains("active")) {
        authNavs[0].classList.remove("active");
      }
      if (authScreen) {
        authScreen.style.left = "-100%";
      }
    });
  }

  const closeModal = () => {
    document.querySelector(".auth__modal-overlay").style.transform =
      "scaleY(0)";
  };

  const openModalToCreate = () => {
    document.querySelector(".auth__modal-overlay").style.transform =
      "scaleY(1)";
    if (!authNavs[0].classList.contains("active")) {
      authNavs[0].classList.add("active");
    }
    if (authNavs[1].classList.contains("active")) {
      authNavs[1].classList.remove("active");
    }
    if (authScreen) {
      authScreen.style.left = "0";
    }
  };
  const openModalToLogin = () => {
    document.querySelector(".auth__modal-overlay").style.transform =
      "scaleY(1)";
    if (!authNavs[1].classList.contains("active")) {
      authNavs[1].classList.add("active");
    }
    if (authNavs[0].classList.contains("active")) {
      authNavs[0].classList.remove("active");
    }
    if (authScreen) {
      authScreen.style.left = "-100%";
    }
  };
  return (
    <div className="auth">
      <div className="auth__welcome">
        <div className="auth__welcome-content">
          <div className="auth__welcome-content-img">
            <img src={welcomeImg} alt="" />
          </div>
          <div className="auth__welcome-content-text">
            <h1 className="h-300 text-center">Welcome</h1>
            <p className="text-body text-center">
              Before enjoying Foodmedia services <br /> Please register first
            </p>
          </div>
        </div>
        <div className="auth__welcome-btns">
          <button className="btn-pry-bg" onClick={openModalToCreate}>
            Create Account
          </button>
          <button className="btn-pry-alt-bg" onClick={openModalToLogin}>
            Login
          </button>
          <p className="text-body text-center">
            By logging in or registering, you have agreed to the Terms and
            Conditions and Privacy Policy.
          </p>
        </div>
      </div>

      <div className="auth__modal-overlay">
        <div className="auth__modal-overlay-close" onClick={closeModal}></div>
        <div className="auth__modal">
          <div className="auth__modal-close-btn" onClick={closeModal}></div>
          <div className="auth__modal-nav">
            <span className="active">Create Account</span>
            <span>Login</span>
          </div>
          <div className="auth__modal-form">
            <div className="auth__modal-form-screen">
              <form onSubmit={(e) => e.preventDefault()}>
                <span>
                  <label htmlFor="fullname">
                    <p className="text-body text-bold">Full Name</p>
                    <input
                      required
                      type="text"
                      id="fullname"
                      placeholder="Enter your full name"
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="email">
                    <p className="text-body text-bold">Email address</p>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="Eg namaemail@emailkamu.com"
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="password">
                    <p className="text-body text-bold">Password</p>
                    <input
                      required
                      type="text"
                      id="password"
                      placeholder="**** **** ****"
                    />
                  </label>
                </span>
                <div className="auth__modal-form-screen-btns">
                  <button type="submit" className="btn-pry-bg">
                    Register
                  </button>
                  <span></span>
                  <button type="button" className="btn-sec google-auth">
                    <i>
                      <FcGoogle />
                    </i>
                    Sign up with Google
                  </button>
                </div>
              </form>
            </div>
            <div className="auth__modal-form-screen">
              <form onSubmit={(e) => e.preventDefault()}>
                <span>
                  <label htmlFor="email">
                    <p className="text-body text-bold">Email address</p>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="Eg namaemail@emailkamu.com"
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="password">
                    <p className="text-body text-bold">Password</p>
                    <input
                      required
                      type="text"
                      id="password"
                      placeholder="**** **** ****"
                    />
                  </label>
                  <div className="forgot-password-btn">
                    <Link to="/password-forgot" className="text-body">
                      Forgot Password?
                    </Link>
                  </div>
                </span>
                <div className="auth__modal-form-screen-btns">
                  <button type="submit" className="btn-pry-bg">
                    Login
                  </button>
                  <span></span>
                  <button type="button" className="btn-sec google-auth">
                    <i>
                      <FcGoogle />
                    </i>
                    Login with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
