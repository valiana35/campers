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
    <div>
      {favoriteCampers.map((advert) => (
        <Camper key={advert._id} {...adverts} />
      ))}
    </div>
  );
};
export default FavoritesPage;
