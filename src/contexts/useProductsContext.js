import { useContext } from "react";
import { ProductsContext } from "./productsContext";

export const useProductsContext = () => { 
  return useContext(ProductsContext);
};
