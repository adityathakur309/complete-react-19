

export const UnControlledForm = () =>{
    
    return (
        <>
        <input type="text" id="name" />
        <button onClick={() =>{
            let name = document.getElementById("name");
       
            console.log(name.value);
            
        }}>click</button>
        </>
    )
}