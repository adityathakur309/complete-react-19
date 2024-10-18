import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage= () =>{
    let error = useRouteError();
   let navigate = useNavigate();
    
    if(error.status ===404){
        return (<div className="w-1/2 mx-auto">
        <h1>{error.data}</h1>

<button className="p-2 rounded text-lg bg-slate-300 cursor-pointer" onClick={() => navigate(-1)}>go back</button>

        {/* <NavLink to={"/"} className="p-2 rounded text-lg bg-slate-300 cursor-pointer">go back to home</NavLink > */}
        </div>)
    }
}