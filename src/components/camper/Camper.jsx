import { LiaStarSolid } from "react-icons/lia";
import { LuMapPin } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { BsWind } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import css from "./Camper.module.css";
import { useState } from "react";
import CamperModal from "../CamperModal";
import CamperDetails from "../camperDetails/CamperDetails";
import { selectCamper } from "../../redux/campers/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/campers/operations";

const Camper = ({
  _id,
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
  details,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(getCamperById(_id))
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const camper = useSelector(selectCamper);

  return (
    <div className={css.container}>
      <div>
        <img src={gallery[0]} alt={name} className={css.img} />
      </div>
      <div className={css.data}>
        <h2 className={css.title}>
          {name}{" "}
          <span>
            €{price}.00 <FaHeart />
          </span>
        </h2>
        <ul className={css.rating}>
          <li className={css.review}>
            <LiaStarSolid className={css.star} /> {rating}({reviews.length}{" "}
            reviews)
          </li>
          <li>
            <LuMapPin /> {location}
          </li>
        </ul>
        <p className={css.text}>{description.slice(0, 74)}...</p>
        <ul className={css.list}>
          <li className={css.item}>
            <IoPeopleOutline /> {adults} adults
          </li>
          <li className={css.item}>
            <TbAutomaticGearbox /> {transmission}
          </li>
          <li className={css.item}>
            <MdOutlineLocalGasStation /> {engine}
          </li>
          <li className={css.item}>
            {details.kitchen && <TbToolsKitchen2 />} kitchen
          </li>
          <li className={css.item}>
            <IoBedOutline /> {details.beds} beds
          </li>
          <li className={css.item}>
            {details.airConditioner && <BsWind />} AC
          </li>
        </ul>
        <button className={css.btn} onClick={openModal}>
          Show more
        </button>
        <CamperModal showModal={showModal} closeModal={closeModal}>
          <CamperDetails camper={camper}/>
        </CamperModal>
      </div>
    </div>
  );
};

export default Camper;
