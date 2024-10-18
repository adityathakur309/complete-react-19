import { useMemo } from "react";
import { useState } from "react"

export const MemoParentComponent = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <ChildComponent />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click</button>
        </>
    )

}

const ChildComponent = () => {

    let sum = () =>{
        let sum =0;
        for(let i =0; i<100000000; i++){
            sum+=i
            
            
        }
        return sum
    }

    let total = useMemo(()=>{
         return sum();
    },[])
   return <h1>{total}</h1>


}