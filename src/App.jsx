import { BrowserRouter } from "react-router-dom";
import { Suspense,lazy } from "react";

import UserRoutes from "UserRoutes";
import Loader from 'shared/Loader/Loader';

const Navbar = lazy(() => import ('./modules/Navbar/Navbar'));




export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar/>
      <Suspense fallback={<Loader/>}>
     <UserRoutes/>
    </Suspense>
    </BrowserRouter>
  );
};