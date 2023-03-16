import React from "react";
import bookImg from "../assets/svgs/book-icon-1.svg";

function Navbar() {
    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="navbar-container-left">
                        <h1>Personal Library
                        <img src={bookImg}/>
                        </h1>
                    </div>
                    <div className="navbar-container-right">
                        <h2><a href="#">Home</a></h2>
                        <h2><a className="navbar-container-right-focus" href="#">Books</a></h2>
                        <h2><a href="#">Shop</a></h2>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;