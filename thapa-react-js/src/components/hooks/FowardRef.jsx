import { forwardRef, useRef } from "react";

export const ForwardRef = () =>{
    const userName = useRef(null)

    return (
        <form onSubmit={(e) =>{
            e.preventDefault();
            console.log(userName.current.value);
            
        }}>
           <InputChild ref={userName}/>
           <button type="submit">submit</button>
        </form>
    )
}

// const InputChild = forwardRef((props,ref) =>{
    
//     return <input type="text" ref={ref}/>
// })
// Children
// before react 19
// const InputChild = forwardRef((props,ref) =>{
//     return <input type="text" ref={ref} />

// })
// const InputChild = ({ref}) =>{
//     return <input type="text" ref={ref} />
// }
// end 

