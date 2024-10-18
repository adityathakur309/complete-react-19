// // state in rect and what is usestate hook 
// import { useState } from "react";

import { memo, useState } from "react"

 
export const State = () => {
    console.log("parent component rendered");
    
    let [value, setValue] = useState(0)
    const handleButtonIcrement = () => {
        value += 1
        setValue(value)

    }


    return (
        <>
            <h1 className="mb-4 text-center">
                {value}
            </h1>
            <button className="btn cursor-pointer" onClick={handleButtonIcrement}>Increment</button>
            <ChildComponent/>
        </>
    )


}
// // end 


// // child component 
const ChildComponent = memo(() =>{
    console.log("child component rendred");
    return  <InnerChild/>

    
})
// // end 
// // it will bve rendered 
const InnerChild = memo(() =>{
    console.log("i am inner child");
    
})
// // end 