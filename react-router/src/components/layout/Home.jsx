import { NavLink } from "react-router-dom"

export const HomePage = () => {
    return (
        <section className="home h-screen bg-slate-100 mb-16 ">
            <div className="container flex flex-wrap justify-between gap-8  items-center hero-container" >
               <div className="text basis-80 grow flex flex-col gap-3">
               <h3>EXPLORE THE LATEST IN TECH INDUSTRIES</h3>
                <h1>Your Destination For Cutting-Edge Gadgets!</h1>
                <p>Welcome to aditya eComStore, your ultimate destination for cutting-edge gadgets! Explore the latest in tech
                    innovation and style with us. Shop now and discover a world of possibilities!</p>
                <NavLink to="/products" className="px-4 py-2 rounded-lg bg-slate-700 text-white text-center border-none">explore our products</NavLink></div> 

                <div className="basis-80 grow hero-img">
                    <img src="./hero-mg.png" className="w-full object-cover" alt="home section image" />
                </div>
            </div>
        </section>
    )
}