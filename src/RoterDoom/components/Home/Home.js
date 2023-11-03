import React from "react";
import "./Home.css"
import Banner from "../Banner/Banner"
import Products from "../Products/Product"
import Footer from "../Footer/Footer"


const Home = () => {
    return (
        <div className="">
            <Banner />
            <Products />
            <Footer />
        </div>
    )
}

export default Home