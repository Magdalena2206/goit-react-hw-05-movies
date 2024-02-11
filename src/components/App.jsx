import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../components/Routes/Home"));
const MovieDetails = lazy(() => import("../components/Routes/MovieDetails"));
const Movies = lazy(() => import("../components/Routes/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Route>
    </Routes>
    </BrowserRouter>
);