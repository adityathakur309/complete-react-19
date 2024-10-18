import { useNavigate } from "react-router-dom";

export const Card = ({ product }) => {
 let navigate =useNavigate()


    return (
        <div className="card flex gap-3 flex-col cursor-pointer p-4 basis-80 items-center grow rounded-xl bg-slate-100 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={`${product.images[0] ?product.images[0] :"" }`} alt="" className="w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-110" />
            <h2 className="text-lg font-semibold mt-2 text-gray-800">{product.title}</h2>
            <div className="flex justify-between gap-4 flex-wrap mt-2 text-gray-600">
                <p className="text-lg font-medium">
                    {`Price: $${product.price}`}
                </p>
                <p className="text-lg font-medium">
                    {`Rating: ${product.rating}`}
                </p>
                <p className="text-lg font-medium">
                    {`Category: ${product.category}`}
                </p>
            </div>
          
                <button className="px-4 py-2 bg-slate-900 text-white text-lg text-center rounded-lg w-full border-none cursor-pointer" onClick={() =>{
navigate(`/products/${product.id}`)
                }}>add to cart</button>
            
        </div>



    )
}