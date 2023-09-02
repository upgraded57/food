import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader"></div>
      <div className="loader__msg">
        <p className="text-body">Fetching your next delicacy...</p>
      </div>
    </div>
  );
}
