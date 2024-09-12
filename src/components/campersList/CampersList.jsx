import { useSelector } from "react-redux";
import Camper from "../camper/Camper";
import css from "./CampersList.module.css";
import FilterForm from "../filterForm/FilterForm";
import { selectFilterCampers } from "../../redux/filterCampers/selectors";

const CampersList = () => {
  const visibleCampers = useSelector(selectFilterCampers);

  return (
    <div className={css.catalog}>
      <FilterForm />
      <ul className={css.list}>
        {visibleCampers.map((advert) => (
          <li key={advert._id}>
            <Camper advert={advert} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
