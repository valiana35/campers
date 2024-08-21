import { useSelector } from "react-redux";
import Camper from "../camper/Camper";
import { selectAdverts } from "../../redux/campers/selectors";
import css from "./CampersList.module.css";

const CampersList = () => {
  const adverts = useSelector(selectAdverts);

  return (
      <ul className={css.list}>
        {adverts.map(advert => (
          <li key={advert._id}>
            <Camper advert={advert} />
          </li>
        ))}
      </ul>
  );
};

export default CampersList;
