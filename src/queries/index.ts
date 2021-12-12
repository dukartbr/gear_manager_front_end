import axios from "axios";
import { useUserLogin, useRegister } from "./auth";
import { useProducts } from "./products";
import { useWorkOrders } from "./workOrders";

// const token = document.head.querySelector('meta[name="csrf-token"]');
const token = "41|6qTE3ddd2Bh4UasunV5fYCdoNcyvOGiGgcHDlgg6";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "content-type": "application/json",
    "x-csrf-token": token ? token?.toString() : "",
  },
});

export { apiClient, useUserLogin, useRegister, useProducts, useWorkOrders };
