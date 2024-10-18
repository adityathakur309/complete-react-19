import { memo, useState } from "react"

export const ReactMemo = () =>{
    console.log("parent");
    

    const[count,setCount] = useState(0)

    return (
        <>
        <h1>{count}</h1>
        <button onClick={() =>{setCount(count+1)}}>click</button>
        <Child name="aditya"/>
        </>
    )
}

const Child = memo(() =>{
    console.log(`child`);
    
    return <h2>c</h2>
})