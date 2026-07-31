import { axiosInstance } from "../config/axiosInstance";

 export let getProductDataApi = async () => {
      try {       
        console.log("Api call fnc is running ...")
        let res = await axiosInstance.get("/products");
        return res.data.products;

      } catch (error) {
        console.log("error in product api", error);
      } 
      
    };