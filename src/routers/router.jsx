import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import NewProduct from "../pages/AddProduct";
import NotFound from "../pages/NotFound";
import ProductDisplay from "../pages/ProductDisplay";
import Users from "../pages/Users";
import AddProduct from "../pages/AddProduct";
import ManageProduct from "../pages/ManageProduct";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/new-product",
        element: <AddProduct />,
      },
      {
        path: "/product-display",
        element: <ProductDisplay />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/manage",
        element: <ManageProduct />,
      },
  
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
