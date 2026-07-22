
import React ,{ useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosinstance';


const Products = () => {

    const [productsData, setProductsData] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    let getProductsData = async () => {
        try {

            let res = await axiosInstance.get('/products');
            console.log( "Products api response->", res);
            setProductsData(res.data);
            setisLoading(false);
            
        } catch (error) {
            console.log("error in products api", error);
        }
    };

    useEffect( () => {
        getProductsData();
    }, []);

    if (isLoading) return <h1 className=' text-4xl text-cyan-800 '>Loading Products ..........</h1>

  return (
    <div className='grid grid-cols-3 gap-5'>
      {
        productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
    ))}
    </div>
  )
}

export default Products
