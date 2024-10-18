import { CartList } from "../CartList";


export const CartPage = () =>{
    
    
    let products = JSON.parse(localStorage.getItem("cartProduct"));
    
    return (
       <>
       {products? <CartList products ={products}/>:
       <h1 className="mx-auto my-6 text-center">no products in your cart</h1>}
       </>
       
       
    )
}
