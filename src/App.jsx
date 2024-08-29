import { lazy, Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import Loader from "./components/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage.jsx"));
const Features = lazy(() => import("./components/features/Features.jsx"));
const Reviews = lazy(() => import("./components/reviews/Reviews.jsx"));

const App = () => {
  return (
    <div>
      <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/features" element={<Features />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
    </div>
  );
};

export default App;
