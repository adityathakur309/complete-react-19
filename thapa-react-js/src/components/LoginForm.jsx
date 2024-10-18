import { useState } from "react"

export const LoginForm = () =>{
const[user,setUser] = useState({
    userName:"",
    password:"",
})

let {userName,password} = user;
    // handle form input 
    const handleFormInput = (event) =>{
        let {name,value} = event.target;
    
        
        setUser((prev) =>{
            return {...prev,[name]:value}
        })
    }
    // end 
    // handle form login 
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(user);
        
        setUser({userName:"",password:""})
        

    }
    // end 
     return (
        <div className="container">
        <form action="" onSubmit={handleFormSubmit} className="bg-slate-800 p-4 rounded-md flex flex-col gap-4">
           
        <div className="flex flex-col gap-2">
                <label htmlFor="firstname" className="text-lg text-white">userName</label>
                <input type="text" name="userName" autoComplete="off" id="userName" className="p-2 outline-none rounded-sm border-none text-lg" onChange={(event) =>{
                    handleFormInput(event)
                }} value={userName}  required/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="firstname" className="text-lg text-white">password</label>
                <input type="password" name="password" autoComplete="off" id="password" className="p-2 outline-none rounded-sm border-none text-lg" onChange={(event) =>{
                    handleFormInput(event)
                }} value={password}  required/>
            </div>
            <div className="w-full">
                <input type="submit" value={`login`} className="p-3 rounded-md text-center text-white bg-red-800 outline-none border-none w-full cursor-pointer text-lg" required />
            </div>
        </form>
    </div>
     )
}