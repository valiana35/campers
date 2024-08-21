import { Link, Outlet } from "react-router-dom";
import css from "./CamperDetails.module.css";
import { LiaStarSolid } from "react-icons/lia";
import { LuMapPin } from "react-icons/lu";

const CamperDetails = ({ advert }) => {
  const { gallery, name, price, rating, reviews, location, description } =
    advert;
  return (
    <div>
      <h2>{name}</h2>
      <ul className={css.rating}>
        <li className={css.review}>
          <LiaStarSolid className={css.star} /> {`${rating}(${reviews.length} reviews)`}
        </li>
        <li>
          <LuMapPin /> {location}
        </li>
      </ul>
      <p>€{price}.00</p>
      <ul className={css.gallery}>
          {gallery.map((image, index) => (
            <li key={index}>
              <img src={image} alt={name} className={css.img} />
            </li>
          ))}
        </ul>
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
