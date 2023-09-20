import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./modules/Navbar/Navbar";
import HomePage from "pages/HomePage/HomePage";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/trending/movies/:id" element={<MovieDetails/>}/>
  <Route path="/movies" element={<MoviesPage/>}/>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes>

    </BrowserRouter>
  );
};


