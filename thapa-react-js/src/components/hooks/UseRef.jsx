import { useRef } from "react"

export const UseRef = () => {
    const userName = useRef(null);

    
    
    
    return (
        <>
            <form onSubmit={(e) =>{
                e.preventDefault();
                console.log(userName.current.value);
                
            }}>
                <input type="text" ref={userName}/>
                <button type="submit">submit</button>
            </form>
        </>
    )
}