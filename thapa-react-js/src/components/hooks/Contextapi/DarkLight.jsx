import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

// theme context 
export const ThemeContext =createContext();

// end 

// provider 
export const ThemeProvider = ({children}) =>{

    const[theme,setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
// end 

export const DarkLight= () =>{
    
    return (
        <ThemeProvider>
            <ThemeMode/>

        </ThemeProvider>
    )
}

// theme mode 
const ThemeMode = () =>{
    let {theme,setTheme} = useContext(ThemeContext);
    return (
        <div className={`h-screen w-screen overflow-hidden ${theme ==="dark" ? "bg-gray-800":"bg-white"}`}>
            <div className={`flex flex-col gap-4 container ${theme ==="dark" ? "bg-slate-600":"bg-slate-200"}  rounded-md p-4 ${theme ==="dark"? "text-white":"black"}`}>
            <h1 className={``}>dark light mode switch website</h1>
            <h2 className={``}>hello react fans</h2>
            <button onClick={() =>{
                if(theme ==="dark"){
                    setTheme("light")
                }
                else{
                    setTheme("dark")
                }
                console.log(theme);
                

            }} className={`px-4 py-2 rounded text-lg border-none cursor-pointer`}>{`switch to ${theme ==="dark" ? "light":"dark"} mode `}</button>
            </div>
            

        </div>
    )
}
// end 