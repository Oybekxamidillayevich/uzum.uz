import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">
                <h1 className="logo">Uzum Market</h1>
            </Link>
            <input placeholder="Name" type="text" class="form-control" />
            <button className="Katalog">Katalog</button>

            <div className="navBtn">
                <Link to="about">
                    <button >Boyti</button>
                </Link>
                <Link to="info">
                    <button>Saved</button>
                </Link>
                <Link to="contact">
                    <button>Korzinka</button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar