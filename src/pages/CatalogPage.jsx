import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../redux/campers/selectors";
import { getCampers } from "../redux/campers/operations";
import { useEffect, useState } from "react";
import CampersList from "../components/campersList/CampersList";
import Loader from "../components/Loader";

function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      {campers && <CampersList />}

    </div>
  );
}

export default CatalogPage;
