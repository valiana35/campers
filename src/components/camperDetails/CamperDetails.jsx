import { Link, Outlet } from "react-router-dom";
import css from "./CamperDetails.module.css";
import { LiaStarSolid } from "react-icons/lia";
import { LuMapPin } from "react-icons/lu";

const CamperDetails = (camper) => {
  return (
    <div key={camper._id}>
      <h2>{camper.name}</h2>
      <ul className={css.rating}>
        <li className={css.review}>
          <LiaStarSolid className={css.star} /> {camper.rating}({camper.reviews}{" "}
          reviews)
        </li>
        <li>
          <LuMapPin /> {camper.location}
        </li>
      </ul>
      <p>€{camper.price}.00</p>
      <ul className={css.gallery}>
        <li key={[0]}>
          <img src={camper.gallery} alt={camper.name} className={css.img} />
        </li>
        <li key={[1]}>
          <img src={camper.gallery} alt={camper.name} className={css.img} />
        </li>
        <li key={[2]}>
          <img src={camper.gallery} alt={camper.name} className={css.img} />
        </li>
      </ul>
      <p>{camper.description}</p>
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
