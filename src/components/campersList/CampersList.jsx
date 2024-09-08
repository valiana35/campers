import { useSelector } from "react-redux";
import Camper from "../camper/Camper";
import { selectAdverts } from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import FilterForm from "../filterForm/FilterForm";

const CampersList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <div className={css.catalog}>
      <FilterForm />
      <ul className={css.list}>
        {adverts.map((advert) => (
          <li key={advert._id}>
            <Camper advert={advert} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
