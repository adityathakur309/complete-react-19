import { useId } from "react"

export  const UseID = () =>{
    let id = useId();
    console.log(id);
    
    return (
        <form action="">
            <input type="text" name="userName" id={`username${id}`} />
            <input type="text" name="password" id={`password${id}`} />
        </form>
    )
}