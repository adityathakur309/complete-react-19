import { CartCard} from ".//Ui/CartCard"
export const CartList = ({products}) =>{
    return(
        <div className="flex flex-col gap-5">
            {products.map((prod) =>{
            return <CartCard key={prod.id} product ={prod}/>
            })}
         </div>
    )
}