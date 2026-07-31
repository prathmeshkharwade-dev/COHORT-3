import React from "react";
import ProductCard from "../components/ProductCart";
import ProductCardSkeleton from "../components/ProductCartSkeleton";
import { getProductDataApi } from "../api/productsApi";
import { useQuery } from "@tanstack/react-query";

const ShopPage =  () => {
   let { data, isPending} = useQuery({
     queryKey:["prosucts"],
     queryFn: getProductDataApi,
  });
  
return (
   <div className="min-h-screen bg-black p-8">   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
    </div>
  </div>
);
}

export default ShopPage