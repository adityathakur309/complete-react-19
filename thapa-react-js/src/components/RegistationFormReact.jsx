import { useState } from "react"

export const RegistationFormReact = () =>{

    const[user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:""

    })
    // destructuring user vlue
    let{firstName,lastName,email,phoneNumber,password} = user;

    // end 

    // update user details 
    // const handleFormInput = (event) =>{
    //     let {name,value} = event.target;
    //     setUser((prev) =>{
    //        return {...prev,[name]:value,}
            
    //     })
        
        

    // }
    // end 

    // send data to backend
    const handleFormSubmit = (event) =>{
        event.preventDefault()
        console.log(user);
        let newUser = {
            firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:""

        }
        setUser(newUser)
        
        

    }
    // end 

    return (
        <div className="container">
            <form action="" onSubmit={handleFormSubmit} className="bg-slate-800 p-4 rounded-md flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-lg text-white">firstname</label>
                    <input type="text" name="firstName" autoComplete="off" id="firstname" className="p-2 outline-none rounded-sm border-none text-lg" onChange={(event) =>{
                        handleFormInput(event)
                    }} value={firstName}  required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-lg text-white">lastname</label>
                    <input type="text" name="lastName" autoComplete="off" id="lastname" className="p-2 outline-none rounded-sm border-none text-lg"  onChange={(event) =>{
                        handleFormInput(event)
                    }} value={lastName} required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-lg text-white">email address</label>
                    <input type="email" name="email" autoComplete="off" id="email" className="p-2 outline-none rounded-sm border-none text-lg" onChange={(event) =>{
                        handleFormInput(event)
                    }} value={email}  required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstname" className="text-lg text-white">phone number</label>
                    <input type="number" name="phoneNumber" autoComplete="off" id="phone" className="p-2 outline-none rounded-sm border-none text-lg" onChange={(event) =>{
                        handleFormInput(event)
                    }}  value={phoneNumber} required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstname" className="text-lg text-white">password</label>
                    <input type="password" name="password" autoComplete="off" id="password" className="p-2 outline-none rounded-sm border-none text-lg" onChange={(event) =>{
                        handleFormInput(event)
                    }} value={password}  required/>
                </div>
                <div className="w-full">
                    <input type="submit" value={`submit`} className="p-3 rounded-md text-center text-white bg-red-800 outline-none border-none w-full cursor-pointer text-lg" required />
                </div>
            </form>
        </div>
    )
}