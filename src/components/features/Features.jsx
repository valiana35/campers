import CamperForm from "../camperForm/CamperForm";
import { BsPeople } from "react-icons/bs";
import { FaChildren } from "react-icons/fa6";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { BsWind } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { VscDashboard } from "react-icons/vsc";
import { HiOutlineRadio } from "react-icons/hi2";
import { TbCooker } from "react-icons/tb";
import css from "./Features.module.css";

const Features = ({ advert }) => {
  const {
    adults,
    children,
    transmission,
    details: { airConditioner, kitchen, beds, CD, radio, hob },
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = advert;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={css.container}>
      <div>
        <ul className={css.list}>
          <li className={css.about}>
            <BsPeople />
            {adults} adults
          </li>
          <li className={css.about}>
            <FaChildren />
            {children} children
          </li>
          <li className={css.about}>
            <TbAutomaticGearbox />
            {capitalizeFirstLetter(transmission)}
          </li>
          <li className={css.about}>
            {airConditioner && (
              <div className={css.aboutItem}>
                <BsWind />
                <p>AC</p>
              </div>
            )}
          </li>
          <li className={css.about}>
            <MdOutlineLocalGasStation />
            {capitalizeFirstLetter(engine)}
          </li>
          <li className={css.about}>
            {kitchen && (
              <div className={css.aboutItem}>
                <TbToolsKitchen2 /> <p>kitchen</p>
              </div>
            )}
          </li>
          <li className={css.about}>
            <IoBedOutline />
            {beds} beds
          </li>
          <li className={css.about}>
            <TbAirConditioning />
            {airConditioner} air conditioner
          </li>
          <li className={css.about}>
            {CD && (
              <div className={css.aboutItem}>
                <VscDashboard /><p>CD</p>
              </div>
            )}
          </li>
          <li className={css.about}>
            {radio && (
              <div className={css.aboutItem}>
                <HiOutlineRadio /><p>radio</p>
              </div>
            )}
          </li>
          <li className={css.about}><TbCooker />{hob} hob</li>
        </ul>
        <h2 className={css.title}>Vehicle details</h2>
        <div className={css.line}></div>
        <ul className={css.listDetails}>
          <li className={css.details}>
            <p className={css.item}>Form</p>
            <p className={css.item}>{form}</p>
          </li>
          <li className={css.details}>
            <p className={css.item}>Length</p>
            <p className={css.item}>{length}</p>
          </li>
          <li className={css.details}>
            <p className={css.item}>Width</p>
            <p className={css.item}>{width}</p>
          </li>
          <li className={css.details}>
            <p className={css.item}>Height</p>
            <p className={css.item}>{height}</p>
          </li>
          <li className={css.details}>
            <p className={css.item}>Tank</p>
            <p className={css.item}>{tank}</p>
          </li>
          <li className={css.details}>
            <p className={css.item}>Consumption</p>
            <p className={css.item}>{consumption}</p>
          </li>
        </ul>
      </div>
      <CamperForm />
    </div>
  );
};

export default Features;
