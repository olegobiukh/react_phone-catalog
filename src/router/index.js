import Home from "../containers/Home";
import Catalog from "../containers/Catalog";
import Product from "../containers/Product";
import Cart from "../containers/Cart";
import Favourites from "../containers/Favourites";

export default [
  {
    url: "/",
    component: Home,
  },
  {
    url: "/favourites",
    component: Favourites,
  },
  {
    url: "/cart",
    component: Cart,
  },
  {
    url: "/:category",
    component: Catalog,
  },

  {
    url: "/:category/:id",
    component: Product,
  },
];
