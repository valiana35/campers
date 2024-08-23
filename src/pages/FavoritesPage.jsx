import { useSelector } from "react-redux";
import { selectFavoritesCampers } from "../redux/favoritesCampers/selectors";
import { selectAdverts } from "../redux/campers/selectors";
import Camper from "../components/camper/Camper";

const FavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavoritesCampers);
  const adverts = useSelector(selectAdverts);

  const favoriteCampers = adverts.filter((advert) =>
    favoriteAdverts.includes(advert._id)
  );

  return (
    <ul style={{marginTop: "80px"}}>
      {favoriteCampers.map((advert) => (
        <li key={advert._id} style={{marginTop: "20px"}}>
          <Camper advert={advert} />
        </li>
      ))}
    </ul>
  );
};
export default FavoritesPage;
