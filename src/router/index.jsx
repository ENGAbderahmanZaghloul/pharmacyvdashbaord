import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "../pages/Layout";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import NotFound from "../pages/NotFound";
import ErrorHandler from "../errors/ErrorHandler";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<Products />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
