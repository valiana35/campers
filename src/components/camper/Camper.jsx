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

const Camper = (camper) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div key={camper._Id} className={css.container}>
      <div>
        <img src={camper.gallery[0]} alt={camper.name} className={css.img} />
      </div>
      <div className={css.data}>
        <h2 className={css.title}>
          {camper.name}{" "}
          <span>
            €{camper.price}.00 <FaHeart />
          </span>
        </h2>
        <ul className={css.rating}>
          <li className={css.review}>
            <LiaStarSolid className={css.star} /> {camper.rating}({camper.reviews.length}{" "}
            reviews)
          </li>
          <li>
            <LuMapPin /> {camper.location}
          </li>
        </ul>
        <p className={css.text}>{camper.description.slice(0, 68)}...</p>
        <ul className={css.list}>
          <li className={css.item}>
            <IoPeopleOutline /> {camper.adults} adults
          </li>
          <li className={css.item}>
            <TbAutomaticGearbox /> {camper.transmission}
          </li>
          <li className={css.item}>
            <MdOutlineLocalGasStation /> {camper.engine}
          </li>
          <li className={css.item}>
            {camper.details.kitchen && <TbToolsKitchen2 />} kitchen
          </li>
          <li className={css.item}>
            <IoBedOutline /> {camper.details.beds} beds
          </li>
          <li className={css.item}>
            {camper.details.airConditioner && <BsWind />} AC
          </li>
        </ul>
        <button className={css.btn} onClick={openModal}>
          Show more
        </button>
        <CamperModal showModal={showModal} closeModal={closeModal}>
          <CamperDetails camper={camper} />
        </CamperModal>
      </div>
    </div>
  );
};

export default Camper;
