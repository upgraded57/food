import React from "react";
import "./greentop.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function GreenTop({ header }) {
  const navigate = useNavigate();
  return (
    <div className="restaurant__top">
      <div className="restaurant__top-back-icon" onClick={() => navigate(-1)}>
        <BiLeftArrowAlt />
      </div>
      <div className="restaurant__top-title">{header}</div>
      <div className="restaurant__top-back-icon" onClick={() => navigate("/")}>
        <GoHome />
      </div>
    </div>
  );
}
