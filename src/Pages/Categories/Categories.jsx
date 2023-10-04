import "./categories.css";
import Topbar from "../../Components/Topbar/Topbar";
import Category from "../../Components/Category/Category";
import Loader from "../../Components/Loader/Loader";
import { useQuery } from "react-query";
import { axiosInstance } from "../../Api/AxiosInstance";
export default function Categories() {
  const getMealCategories = () => {
    return axiosInstance({
      method: "get",
      url: "/categories.php",
    });
  };

  const { isLoading, data } = useQuery("mealCategories", getMealCategories);
  const mealCategories = data ? data.data.categories : [];

  const bgArray = [
    "(90deg, #3ad59f 0%, #f8ff00 100%)",
    "(90deg, #3a47d5 0%, #00d2ff 100%)",
    "(90deg, #c67700 0%, #fcff9e 100%)",
    "(90deg, #22C1C3 0%, #FDBB2D 100%)",
    "(90deg, #FC466B 0%, #3F5EFB 100%)",
    "(90deg, #000851 0%, #1CB5E0 100%)",
    "(90deg, #c67700 0%, #fcff9e 100%)",
    "(90deg, #00C9FF 0%, #92FE9D 100%)",
    "(90deg, #3F2B96 0%, #A8C0FF 100%)",
    "(90deg, #008552  0%, #9ebd13 100%)",
    "(90deg, #A100FFFF 0%, #71C4FFFF 100%)",
    "(90deg, #b70306 0%, #ffb76b 100%)",
    "(90deg, #5e1784 0%, #b7deed 100%)",
    "(90deg, #175613 0%, #f2e863 100%)",
  ];

  return (
    <>
      <Topbar />
      <div className="categories">
        {isLoading ? (
          <Loader type="list" />
        ) : (
          mealCategories.map((category) => {
            return (
              <Category
                key={category.idCategory}
                category={category}
                bg={bgArray[category.idCategory - 1]}
              />
            );
          })
        )}
      </div>
    </>
  );
}
