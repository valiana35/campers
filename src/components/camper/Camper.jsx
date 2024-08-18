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
  return (
    <div key={_id} className={css.container}>
      <div>
        <img src={gallery[0]} alt={name} className={css.img} />
      </div>
      <div className={css.data}>
        <h2 className={css.title}>
          {name} <span>€{price}.00 <FaHeart /></span>
        </h2>
        <div className={css.rating}>
          <a href="reviews" className={css.nav}>
            <LiaStarSolid className={css.star}/> {rating}({reviews.length} reviews)
          </a>
          <span>
            <LuMapPin /> {location}
          </span>
        </div>
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
        <button type="button" className={css.btn}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Camper;
