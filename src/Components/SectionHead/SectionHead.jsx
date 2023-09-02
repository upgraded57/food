import React from "react";
import "./sectionHead.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SectionHead({
  title,
  subtitle,
  linkText,
  linkLocation,
}) {
  return (
    <div className="sectionHead">
      <span className="sectionHead__text">
        <h2 className="h-200">{title}</h2>
        <p className="text-body">{subtitle}</p>
      </span>
      {linkText && (
        <Link
          to={linkLocation ? linkLocation : "/"}
          className="sectionHead__link"
        >
          <p className="text-body">{linkText}</p>
          <MdArrowForwardIos />
        </Link>
      )}
    </div>
  );
}
