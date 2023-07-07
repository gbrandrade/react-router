import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import { loadProduct } from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: loadProduct,
        errorElement: <ProductBoundary />,
      },
    ],
  },
]);

export default router;
