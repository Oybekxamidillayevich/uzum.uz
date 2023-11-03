import React from "react";
import "./style.css"
import Navbar from "../RoterDoom/components/Navbar/Navbar"
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router-dom";
import About from "../RoterDoom/router/about/about"
import Contact from "../RoterDoom/router/contact/contact"
import Info from "../RoterDoom/router/info/info"
import SingelPage from "./components/singilPage/singilPage";

const RooterApp = () => {
    return (

        <div>

            <Navbar />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="info" element={<Info />} />
                <Route path="contact" element={<Contact />} />
                <Route path="mahsulot/:id" element={<SingelPage />} />


            </Routes>

        </div >

    )
}
export default RooterApp