import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";



// // passing event  as a props in react 
export const EventProps = () =>{
//     // const hendleButtonClick = (name) =>{
//     //     alert(`i am parent function ${name}`)
//     // }
  let handleButtonClick =  useCallback(() =>{
   return (name) =>{
        console.log("event passed");
        console.log(name);
        
        
    }

   },[]) 
    let [count,setCount] =useState(0);
    console.log(count);
    

    return (<>
    <button onClick={() =>{setCount(count+1)}}>clcik</button>
    <Child onClick = {handleButtonClick}/>
    </>
    )
    
    // return <Child onClick = {handleButtonClick}/>
    // // return <Child onClick={handleButtonClick}></Child>

}

// // child component 
const Child = memo(({onClick}) =>{
    console.log("child");
    
return <button>click me</button>
})
// // end 
// end 