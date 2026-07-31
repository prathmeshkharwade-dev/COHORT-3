import React from "react";
import ProductCard from "../components/ProductCart";
import ProductCardSkeleton from "../components/ProductCartSkeleton";
import { useProductApi } from "../hooks/productsHooks";


const ShopPage =  () => {
  let { isPending, data, error} = useProductApi();
  
  
  if(error) return <h1>{error.message}</h1>;
  
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