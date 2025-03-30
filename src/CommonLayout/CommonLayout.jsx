import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


export const CommonLayout=()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}