import Home from "../containers/Home";
import Catalog from "../containers/Catalog";
import Item from "../containers/Item";
import Cart from "../containers/Cart";
import Favourites from "../containers/Favourites";

export default [
  {
    url: '/',
    component: Home,
  },
  {
    url: '/:category',
    component: Catalog
  },
  {
    url: '/:category/:id',
    component: Item
  },
  {
    url: '/favourites',
    component: Favourites
  },
  {
    url: '/cart',
    component: Cart
  },
]
