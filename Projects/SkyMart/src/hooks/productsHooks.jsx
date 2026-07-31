import { useQuery } from "@tanstack/react-query";
import { getProductDataApi } from "../api/productsApi";

export const useProductApi = () => {
     let { data, isPending, error } = useQuery({
     queryKey:["products"],
     queryFn: getProductDataApi,
     staleTime: 50000,
      });

      return {
        isPending,
        data,
        error,
    };
};