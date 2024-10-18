import { HiBars3CenterLeft } from "react-icons/hi2"
import { IoMdClose } from "react-icons/io"
import { NavLink } from "react-router-dom"

export const Header = () =>{

    return (
        <header className="bg-slate-200 py-5">
            <nav className="flex items-center gap-2 flex-wrap justify-between container">
                <h2>AdityaStore</h2>
                <div className="nav-links flex items-center gap-5">
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/cart">cart product</NavLink>
                    <NavLink to="/products">products</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                </div>
                <div className="bar flex" onClick={() =>{
                    let header = document.querySelector("header");
                    header.classList.toggle("active-links")
                }}>
                <HiBars3CenterLeft className="text-4xl open-menu" />
                <IoMdClose className="text-4xl close-menu" />

                </div>
            </nav>


        </header>
    )
}