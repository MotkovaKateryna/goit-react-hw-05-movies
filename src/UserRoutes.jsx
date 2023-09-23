import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';


const HomePage = lazy(() => import ( 'pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import ( 'pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import ( 'pages/Cast/Cast'));
const Reviews = lazy(() => import ( 'pages/Reviews/Reviews'));
const MoviesPage = lazy(() => import ( 'pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import ( 'pages/NotFoundPage/NotFoundPage'));


const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};

export default UserRoutes;
