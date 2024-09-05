import CamperForm from "../camperForm/CamperForm";
import css from "./Features.module.css";

const Features = ({ advert }) => {
  const {
    adults,
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
  return (
    <div className={css.container}>
      <div>
        <ul className={css.list}>
          <li className={css.about}>{adults} adults</li>
          <li className={css.about}>{transmission}</li>
          <li className={css.about}>AC</li>
          <li className={css.about}>{engine}</li>
          <li className={css.about}>{kitchen} kitchen</li>
          <li className={css.about}>{beds}beds</li>
          <li className={css.about}>{airConditioner} air conditioner</li>
          <li className={css.about}>CD</li>
          <li className={css.about}>{radio}</li>
          <li className={css.about}>{hob} hob</li>
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
