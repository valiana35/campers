import clsx from "clsx";
import css from "./CamperDetails.module.css";
import { LiaStarSolid } from "react-icons/lia";
import { LuMapPin } from "react-icons/lu";
import { useState } from "react";

const CamperDetails = ({ advert }) => {
  const { gallery, name, price, rating, reviews, location, description } =
    advert;

  const [activeTab, setActiveTab] = useState("features");

  return (
    <div>
      <h2>{name}</h2>
      <ul className={css.rating}>
        <li className={css.review}>
          <LiaStarSolid className={css.star} />{" "}
          {`${rating}(${reviews.length} reviews)`}
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
      <div className={css.btn}>
        <button
          type="button"
          onClick={() => setActiveTab("features")}
          className={clsx(css.button, {
            [css.selectedBtn]: activeTab === "features",
          })}
        >
          Features
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={clsx(css.button, {
            [css.selectedBtn]: activeTab === "reviews",
          })}
        >
          Reviews
        </button>
      </div>
    </div>
  );
};

export default CamperDetails;
