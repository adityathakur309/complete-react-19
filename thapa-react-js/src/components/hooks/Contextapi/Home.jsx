
import {UseBioContext } from "./Index"

export const Home = () =>{
    let name = UseBioContext()
    return <h1>hello context api , my name is {name} </h1>

}