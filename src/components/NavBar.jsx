import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#333", color: "white" }}>
            <h1>Mi E-Commerce</h1>
            <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Productos</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
