import { NavLink } from "react-router-dom"

export const Footer = () =>{
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Aditya Ecommerce. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <NavLink to={"/contact"} className="text-gray-400 hover:text-white">Privacy Policy</NavLink>
            <NavLink to={"/contact"} className="text-gray-400 hover:text-white">Terms of Service</NavLink>
            <NavLink to={"/contact"} className="text-gray-400 hover:text-white">Contact Us</NavLink>
          </div>
          <div className="mt-4">
            <NavLink to={"/contact"} className="text-gray-400 hover:text-white">Facebook</NavLink> |
            <NavLink to={"/contact"} className="text-gray-400 hover:text-white">Twitter</NavLink> |
            <NavLink to={"/contact"} className="text-gray-400 hover:text-white">Instagram</NavLink>
          </div>
        </div>
      </footer>
      
    )
}