import React from "react";
import "./Banner.css"
import Letter from "../Banner/image/planeta.jpg"


const Banner = () => {
    return (

        <div className="Banner_Container">
            <div className="Banner_Box">
                <img className="image1" src={Letter} alt="" />
            </div>
        </div >
    )
}
export default Banner