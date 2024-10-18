// import { useEffect } from "react";
// import { useState } from "react"

// export const CleanUp = () => {
//     let [subscriber, setSubscriber] = useState(30000);
//     useEffect(() => {
//        let timer=  setInterval(() => {
//             setSubscriber((prev) => prev + 1)
//         }, 1000)

//     return () => clearInterval(timer)

//     }, [])

//     return (
//         <div className="flex flex-col gap-3 bg-slate-200 rounded-md p-3">
//             <h2>my subscriber on youtube</h2>
//             <h1>{subscriber}</h1>
//             <h2 className="">subscriber rel time counter</h2>
//         </div>
//     )
// }