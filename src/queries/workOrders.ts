import axios from "axios";
import { useQuery } from "react-query";

export function useWorkOrders() {
  return useQuery(
    ["workOrders"],
    async () => await axios.get("http://localhost:8000/api/workorders")
  );
}
