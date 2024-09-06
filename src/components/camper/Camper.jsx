import { LiaStarSolid } from "react-icons/lia";
import { LuMapPin } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { BsWind } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import css from "./Camper.module.css";
import { useState } from "react";
import CamperModal from "../CamperModal";
import CamperDetails from "../camperDetails/CamperDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesCampers } from "../../redux/favoritesCampers/selectors";
import { toggleFavorite } from "../../redux/favoritesCampers/slice";
import { FaHeart } from "react-icons/fa6";

const Camper = ({ advert }) => {
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details: { kitchen, beds, airConditioner },
  } = advert;
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();

  const favoriteCampers = useSelector(selectFavoritesCampers);
  const isFavorite = favoriteCampers.includes(advert._id);

  const handleFavorites = () => {
    dispatch(toggleFavorite(advert._id));
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={css.container}>
      <div>
        <img src={gallery[0]} alt={name} className={css.img} />
      </div>
      <div className={css.data}>
        <div className={css.title}>
          <h2>{name}</h2>
          <div className={css.price}>
            <h2>€{price}.00</h2>
            <button onClick={handleFavorites}>
              {!isFavorite ? (
                <FaRegHeart className={css.heart} />
              ) : (
                <FaHeart className={css.favHeart} />
              )}
            </button>
          </div>
        </div>
        <ul className={css.rating}>
          <li className={css.review}>
            <LiaStarSolid className={css.star} />{" "}
            {`${rating}(${reviews.length} reviews)`}
          </li>
          <li>
            <LuMapPin /> {location}
          </li>
        </ul>
        <p className={css.text}>{description.slice(0, 68)}...</p>
        <ul className={css.list}>
          <li className={css.item}>
            <BsPeople /> {adults} adults
          </li>
          <li className={css.item}>
            <TbAutomaticGearbox /> {capitalizeFirstLetter(transmission)}
          </li>
          <li className={css.item}>
            <MdOutlineLocalGasStation /> {capitalizeFirstLetter(engine)}
          </li>
          <li className={css.item}>
            {kitchen && (
              <div className={css.aboutItem}>
                <TbToolsKitchen2 /> <p>kitchen</p>
              </div>
            )}
          </li>
          <li className={css.item}>
            <IoBedOutline /> {beds} beds
          </li>
          <li className={css.item}>
            {" "}
            {airConditioner && (
              <div className={css.aboutItem}>
                <BsWind />
                <p>AC</p>
              </div>
            )}
          </li>
        </ul>
        <button className={css.btn} onClick={openModal}>
          Show more
        </button>
        <CamperModal showModal={showModal} closeModal={closeModal}>
          <CamperDetails advert={advert} />
        </CamperModal>
      </div>
    </div>
  );
};

export default Camper;
