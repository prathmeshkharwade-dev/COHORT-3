import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCart";
import ProductCardSkeleton from "../components/ProductCartSkeleton";

const ShopPage = () => {

    const [productsData, setProductsData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    let getProductData = async () => {
      try {       
        let res = await axios.get("https://dummyjson.com/products");
        console.log(res.data.products);
        setProductsData(res.data.products);

      } catch (error) {
        console.log("error in product api", error);
      } finally{
        setIsLoading(false);
      }
    };

    useEffect(() => {
      getProductData();
    }, []);
  
return (
   <div className="min-h-screen bg-black p-8">   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
    </div>
  </div>
);
}

export default ShopPage