import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectIsVisible,
} from "../redux/campers/selectors";
import { getCampers } from "../redux/campers/operations";
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
  let limit = 4;

  useEffect(() => {
    dispatch(getCampers({ limit, page }));
  }, [dispatch, limit, page]);

  const onLoadMore = () => {
    dispatch(setPage(page + 1));
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
