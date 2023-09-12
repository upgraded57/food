import React, { useEffect, useState } from "react";
import "./area.css";
import Topbar from "../../Components/Topbar/Topbar";
import Search from "../../Components/Search/Search";
import SectionHead from "../../Components/SectionHead/SectionHead";
import { axiosInstance } from "../../Api/AxiosInstance";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Area() {
  const [areas, setAreas] = useState([]);
  const fetchAreas = async () => {
    await axiosInstance({
      method: "get",
      url: "/list.php",
      params: {
        a: "list",
      },
    })
      .then((res) => {
        if (res.data.meals === null) {
          setAreas([]);
        } else {
          setAreas(res.data.meals);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  return (
    <>
      <Topbar />
      <Search />
      <SectionHead
        title="Find Meals by Region"
        subtitle="Select a region to view meals avaiable"
      />

      <div className="area">
        <ul>
          {areas.map((area, index) => {
            return (
              <Link
                to={`/area/${area.strArea}`}
                className="area__list"
                key={index}
              >
                <p>{area.strArea}</p>
                <span className="area__list-icon">
                  <BsArrowRight />
                </span>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
