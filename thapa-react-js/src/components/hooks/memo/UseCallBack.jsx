import { memo, useCallback } from "react";
import { useState } from "react"


export const UseCallBack = () =>{
    let [count,setCount] = useState(0);

    let increment = useCallback(() =>{
        console.log("icrement call");
        setCount(count+1)

    },[])
    return (<>
    <h1>{count}</h1>
    <Button onClick = {increment}>increment</Button> 
    </>)
}

// button Component
const Button = memo(
    ({onClick,children}) =>{
        console.log(`button ${children}`);
        

        return <button onClick={onClick} className="p-4">{children}</button>

    }
)
// end 