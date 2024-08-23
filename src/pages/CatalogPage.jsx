import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectIsVisible,
} from "../redux/campers/selectors";
import { getCampers, getCampersPage } from "../redux/campers/operations";
import { useEffect, useState } from "react";
import CampersList from "../components/campersList/CampersList";
import Loader from "../components/Loader";
import LoadMoreBtn from "../components/loadMoreBtn/LoadMoreBtn";

function CatalogPage() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isVisible = useSelector(selectIsVisible);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) dispatch(getCampersPage(page));
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {adverts && <CampersList />}
      {!isVisible && (
        <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>
          {isLoading ? <Loader /> : "Load more"}
        </LoadMoreBtn>
      )}
    </div>
  );
}

export default CatalogPage;
