import { useState } from "react";
import { useEffect } from "react"

export const UseEffect = () => {

   
    
    let [date, setDate] = useState(0)
   useEffect(() =>{
    
    
  let timer =  setInterval(() =>{
        let newDate = new Date()
        setDate(newDate)
    },1000)
    return () =>{
        clearInterval(timer)

    }
   },[])
    
    

    return (
        <>
            <h1>{date.toLocaleString()}</h1>

        </>
    )
}