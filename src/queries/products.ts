import axios from "axios";
import { useQuery } from "react-query";

export function useProducts() {
  return useQuery(
    ["products"],
    async () => await axios.get("http://localhost:8000/api/products")
  );
}

export function useProductCategories() {
  return useQuery(
    ["product_categories"],
    async () => await axios.get("http://localhost:8000/api/productcategories")
  );
}
