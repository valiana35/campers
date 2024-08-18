import { useSelector } from "react-redux";
import Camper from "../camper/Camper";
import { selectCampers } from "../../redux/campers/selectors";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper._id}>
            <Camper {...camper} />
          </li>
        ))}
      </ul>
  );
};

export default CampersList;
