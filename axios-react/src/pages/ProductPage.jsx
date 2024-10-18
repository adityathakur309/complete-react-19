import axios from "axios"
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getProduct } from "../services/GetProduct";

export const ProductPage = () =>{
    let [products,setProducts] = useState([]);
    

    const getProductData = async() =>{
       try {
     let productData = await  getProduct();
     
     
        setProducts(productData)

        
       } catch (error) {
        console.log("error mess "+error.message);
        console.log("error status "+error.status);
        console.log("error data "+error.response.data);
        
        
       } 
        
    }
    useEffect(() =>{
        getProductData()
    },[])
    return (
        <div className="container my-8 flex flex-wrap gap-5">
            {products.map((curr) =>{
                return <Card key={curr.id} product={curr}/>
            })}


        </div>
    )
}