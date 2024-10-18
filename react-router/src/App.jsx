import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Loader } from "./components/Loader";


 export const App = () =>{
  let navigation = useNavigation();
   if(navigation.state ==="loading"){
    return <Loader/>
   }
  

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
 }