import { useNavigate } from "react-router-dom"

export const SuccessPage=() =>{
    let navigate= useNavigate()
    return(
        <div className="container">
             <div className="flex success-card bg-slate-200 p-4 rounded-lg flex-col gap-3 my-14">
            <h2 className="text-center">your product has been added to your cart check the cart</h2>
            <button className="px-4 py-2 cursor-pointer rounded-md border-none bg-slate-600 text-white text-center text-lg" onClick={() =>{
navigate(-1)
            }}>go back</button>
        </div>
        </div>
       
    )
}