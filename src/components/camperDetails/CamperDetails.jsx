import { Link, Outlet } from "react-router-dom";
import css from "./CamperDetails.module.css";
import { LiaStarSolid } from "react-icons/lia";
import { LuMapPin } from "react-icons/lu";

const CamperDetails = ({
  gallery,
  name,
  price,
  rating,
  reviews,
  location,
  description,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul className={css.rating}>
        <li className={css.review}>
          <LiaStarSolid className={css.star} /> {rating}({reviews} reviews)
        </li>
        <li>
          <LuMapPin /> {location}
        </li>
      </ul>
      <p>€{price}.00</p>
      <div>{gallery}</div>
      <p>{description}</p>
      <div>
        <Link to="features" className="linkFeatures">
          Features
        </Link>
        <Link to="reviews" className="linkReviews">
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default CamperDetails;
