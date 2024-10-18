// import { useEffect } from "react";
// import { useState } from "react"

// export const EffectChallange = () => {
//     const[count,setCount] = useState(0);
//     const[inputValue,setinputValue] = useState("");
//     useEffect(() =>{
// document.title = `count:${count}`


//     },[count])
//     useEffect(() =>{
//         console.log("input value: "+inputValue);
        
//             },[inputValue])
//     return (
//         <div className="flex flex-col gap-4 bg-slate-300 rounded-md p-4 w-1/3 m-auto">
//             <h1 className="text-white">Count:{count}</h1>
//             <button className="px-5 p-2 bg-slate-600 border-none cursor-pointer text-white text-lg text-center rounded-md" onClick={()=>{
//                 setCount(count+1)
//             }}>
//                 increment
//             </button>
//             <input type="text" className="px-2 py-2 rounded-md outline-none border-none" onChange={(event) =>{setinputValue(event.target.value)}} value={inputValue} />
//             <p className="text-xl text-white">{inputValue}</p>
//         </div>
//     )
// }