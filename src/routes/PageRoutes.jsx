import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Error from "../pages/Error";
import route from "./route.json";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import MasterLayout from "../layouts/MasterLayout";
import Login from "../pages/Login";

const PageRoutes = () => {
  return (
    <Routes>
      {/* it check url n show correct page*/}
      <Route path={route.HOME} element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path={route.PRODUCTS}>
          <Route index element={<Products />} />
          <Route path=":pid" element={<Product />} />
        </Route>

        <Route path={route.CART} element={<Cart />} />
        <Route path={route.CONTACT} element={<Contact />} />
        <Route path={route.LOGIN} element={<Login />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PageRoutes;
