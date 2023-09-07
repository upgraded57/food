import React from "react";
import "./notfound.css";
import notFoundImg from "../../assets/images/404img.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <div className="notfound__header">OOPS!</div>
      <div className="notfound__img">
        <img src={notFoundImg} alt="" />
      </div>
      <div className="notfound__text">
        <p className="text-body">That page could not be found!</p>
        <p className="text-body">Let's get you back home</p>
        <button
          type="button"
          className="btn-pry-sm"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
