import "./area.css";
import Topbar from "../../Components/Topbar/Topbar";
import Search from "../../Components/Search/Search";
import SectionHead from "../../Components/SectionHead/SectionHead";
import { axiosInstance } from "../../Api/AxiosInstance";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function Area() {
  const fetchAreas = () => {
    return axiosInstance({
      method: "get",
      url: "/list.php",
      params: {
        a: "list",
      },
    });
  };

  const { isLoading, data } = useQuery("fetchArea", fetchAreas);
  const areas = data ? data.data.meals : [];

  return (
    <>
      <Topbar />
      <Search />
      <SectionHead
        title="Find Meals by Region"
        subtitle="Select a region to view meals avaiable"
      />

      {isLoading ? (
        <p style={{ padding: "4vw" }}>Loading add regions...</p>
      ) : (
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
      )}
    </>
  );
}
