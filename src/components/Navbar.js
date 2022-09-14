import React from "react";
import { NavLink } from "react-router-dom"
const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: "15rem"
}
function Navbar(){
    return (
        <div className="nav">
            <div>
                <h3 style={{fontSize: "23px", marginLeft: "2rem"}}>Restuarant</h3>
            </div>
            <div>
                <NavLink to="/" style={navLinks}>
                    Home
                </NavLink>
                <NavLink to="/review" style={navLinks}>
                    Review
                </NavLink>
                <NavLink to="/Restuarants"style ={navLinks}>
                    Restuarants
                </NavLink>
                <NavLink to="/About" style={navLinks}>
                    About
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar;