import React from "react";
import "./loader.css";

export default function Loader({ type }) {
  switch (type) {
    case "list":
      return (
        <>
          <div className="meallistplaceholder">
            <div className="meallistplaceholder__img"></div>
            <div className="meallistplaceholder__content">
              <div className="meallistplaceholder__content-header"></div>
              <div className="meallistplaceholder__content-bottom">
                <span>
                  <div className="meallistplaceholder__content-subtitle"></div>
                  <div className="meallistplaceholder__content-subtitle"></div>
                </span>
                <div className="meallistplaceholder__content-button"></div>
              </div>
            </div>
          </div>
          <div className="meallistplaceholder">
            <div className="meallistplaceholder__img"></div>
            <div className="meallistplaceholder__content">
              <div className="meallistplaceholder__content-header"></div>
              <div className="meallistplaceholder__content-bottom">
                <span>
                  <div className="meallistplaceholder__content-subtitle"></div>
                  <div className="meallistplaceholder__content-subtitle"></div>
                </span>
                <div className="meallistplaceholder__content-button"></div>
              </div>
            </div>
          </div>
          <div className="meallistplaceholder">
            <div className="meallistplaceholder__img"></div>
            <div className="meallistplaceholder__content">
              <div className="meallistplaceholder__content-header"></div>
              <div className="meallistplaceholder__content-bottom">
                <span>
                  <div className="meallistplaceholder__content-subtitle"></div>
                  <div className="meallistplaceholder__content-subtitle"></div>
                </span>
                <div className="meallistplaceholder__content-button"></div>
              </div>
            </div>
          </div>
          <div className="meallistplaceholder">
            <div className="meallistplaceholder__img"></div>
            <div className="meallistplaceholder__content">
              <div className="meallistplaceholder__content-header"></div>
              <div className="meallistplaceholder__content-bottom">
                <span>
                  <div className="meallistplaceholder__content-subtitle"></div>
                  <div className="meallistplaceholder__content-subtitle"></div>
                </span>
                <div className="meallistplaceholder__content-button"></div>
              </div>
            </div>
          </div>
        </>
      );
    case "card":
      return (
        <div className="mealcardplaceholder">
          <div className="mealcardplaceholder__container">
            <div className="mealcardplaceholder__container-img"></div>
            <div className="mealcardplaceholder__container-content"></div>
            <div className="mealcardplaceholder__container-content short"></div>
          </div>
          <div className="mealcardplaceholder__container">
            <div className="mealcardplaceholder__container-img"></div>
            <div className="mealcardplaceholder__container-content"></div>
            <div className="mealcardplaceholder__container-content short"></div>
          </div>
          <div className="mealcardplaceholder__container">
            <div className="mealcardplaceholder__container-img"></div>
            <div className="mealcardplaceholder__container-content"></div>
            <div className="mealcardplaceholder__container-content short"></div>
          </div>
        </div>
      );
    case "carousel":
      return (
        <div className="mealcarouselplaceholder">
          <div className="mealcarouselplaceholder__left">
            <div className="mealcarouselplaceholder__left-name"></div>
            <div className="mealcarouselplaceholder__left-text"></div>
            <div className="mealcarouselplaceholder__left-text"></div>
            <div className="mealcarouselplaceholder__left-text"></div>
            <div className="mealcarouselplaceholder__left-btn"></div>
          </div>
          <div className="mealcarouselplaceholder__right">
            <div className="mealcarouselplaceholder__right-img"></div>
          </div>
        </div>
      );
    case "meal":
      return (
        <div className="mealplaceholder">
          <div className="mealplaceholder__top">
            <div className="mealplaceholder__top-name"></div>
            <div className="mealplaceholder__top-location"></div>
          </div>
          <div className="mealplaceholder__image"></div>
          <div className="mealplaceholder__bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      );
    case "preloader":
      return (
        <div className="loader-screen">
          <div className="loader"></div>
          <div className="loader__msg">
            <p className="text-body">Fetching your next delicacy...</p>
          </div>
        </div>
      );
    default:
      return (
        <div className="loader-screen">
          <div className="loader"></div>
          <div className="loader__msg">
            <p className="text-body">Fetching your next delicacy...</p>
          </div>
        </div>
      );
  }
}
