import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./onboarding.css";

import onboardingImg1 from "../../assets/images/onboarding1.svg";
import onboardingImg2 from "../../assets/images/onboarding2.svg";
import onboardingImg3 from "../../assets/images/onboarding3.svg";

import { BsArrowRight } from "react-icons/bs";

export default function onboarding() {
  const navigate = useNavigate();
  const [onboardingScreen, setOnboardingScreen] = useState(null);
  const [onboardingScreenToggleBtns, setOnboardingScreenToggleBtns] =
    useState(null);

  useEffect(() => {
    setOnboardingScreen(document.querySelector(".onboarding__screen-flex"));
    setOnboardingScreenToggleBtns(
      document.querySelectorAll(".onboarding__btns-nav span")
    );
  }, []);

  if (onboardingScreenToggleBtns !== null) {
    onboardingScreenToggleBtns[0].addEventListener("click", () => {
      if (!onboardingScreenToggleBtns[0].classList.contains("active")) {
        onboardingScreenToggleBtns[0].classList.add("active");
      }
      if (onboardingScreenToggleBtns[1].classList.contains("active")) {
        onboardingScreenToggleBtns[1].classList.remove("active");
      }
      if (onboardingScreenToggleBtns[2].classList.contains("active")) {
        onboardingScreenToggleBtns[2].classList.remove("active");
      }

      onboardingScreen.style.left = "0";
    });

    onboardingScreenToggleBtns[1].addEventListener("click", () => {
      if (!onboardingScreenToggleBtns[1].classList.contains("active")) {
        onboardingScreenToggleBtns[1].classList.add("active");
      }
      if (onboardingScreenToggleBtns[0].classList.contains("active")) {
        onboardingScreenToggleBtns[0].classList.remove("active");
      }
      if (onboardingScreenToggleBtns[2].classList.contains("active")) {
        onboardingScreenToggleBtns[2].classList.remove("active");
      }
      onboardingScreen.style.left = "-100%";
    });

    onboardingScreenToggleBtns[2].addEventListener("click", () => {
      if (!onboardingScreenToggleBtns[2].classList.contains("active")) {
        onboardingScreenToggleBtns[2].classList.add("active");
      }
      if (onboardingScreenToggleBtns[1].classList.contains("active")) {
        onboardingScreenToggleBtns[1].classList.remove("active");
      }
      if (onboardingScreenToggleBtns[0].classList.contains("active")) {
        onboardingScreenToggleBtns[0].classList.remove("active");
      }
      onboardingScreen.style.left = "-200%";
    });
  }

  return (
    <div className="onboarding">
      <div className="onboarding__screen-flex">
        <div className="onboarding__screen">
          <div className="onboarding__screen-img">
            <img src={onboardingImg1} alt="onborading-image" />
          </div>
          <div className="onboarding__screen-content">
            <h1 className="h-300 text-center">Nearby restaurants</h1>
            <p className="text-body text-center">
              You don't have to go far to find a good restaurant, we have
              provided all the restaurants that is near you
            </p>
          </div>
        </div>

        <div className="onboarding__screen">
          <div className="onboarding__screen-img">
            <img src={onboardingImg2} alt="onborading-image" />
          </div>
          <div className="onboarding__screen-content">
            <h1 className="h-300 text-center">Nearby restaurants</h1>
            <p className="text-body text-center">
              You don't have to go far to find a good restaurant, we have
              provided all the restaurants that is near you
            </p>
          </div>
        </div>

        <div className="onboarding__screen">
          <div className="onboarding__screen-img">
            <img src={onboardingImg3} alt="onborading-image" />
          </div>
          <div className="onboarding__screen-content">
            <h1 className="h-300 text-center">Nearby restaurants</h1>
            <p className="text-body text-center">
              You don't have to go far to find a good restaurant, we have
              provided all the restaurants that is near you
            </p>
          </div>
        </div>
      </div>

      <div className="onboarding__btns flex-between">
        <p className="text-body pointer" onClick={() => navigate("/auth")}>
          Skip
        </p>
        <div className="onboarding__btns-nav">
          <span className="active pointer"></span>
          <span className="pointer"></span>
          <span className="pointer"></span>
        </div>
        <div
          className="onboarding__btns-proceed-icon pointer"
          onClick={() => navigate("/auth")}
        >
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
