import axios from "axios"


// create 
let api = axios.create({
    baseURL:"https://dummyjson.com/"
})
// end 
export const getProduct = async () =>{
    let res = await api.get("products/?limit=9");
    let data = await  res.data.products
    return data;
    
}