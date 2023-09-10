import { Link } from "react-router-dom";
import "./category.css";

export default function Category({ category, bg }) {
  return (
    <Link
      to={`/categories/${category.strCategory}`}
      className="category"
      style={{ background: `linear-gradient${bg}` }}
    >
      <div className="category__left">
        <h1>{category.strCategory}</h1>
        <p>
          {category.strCategoryDescription.length < 60
            ? category.strCategoryDescription
            : category.strCategoryDescription.slice(0, 60) + "..."}
        </p>
      </div>
      <div className="category__right">
        <div className="category__right-img">
          <img src={category.strCategoryThumb} alt="" />
        </div>
      </div>
    </Link>
  );
}
