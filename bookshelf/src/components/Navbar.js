import React from "react";
import bookImg from "../assets/svgs/book-icon-1.svg";

function Navbar() {
    
    const handleClickEvent = () => {
        alert(`ACCESS DENIED: \n you don't have superlative powers to access this section ⛔️`);
    };

    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="navbar-container-left">
                        <h1 className="navbar-container-left-title">Library
                        <img className="navbar-container-left-img" src={bookImg}/>
                        </h1>
                    </div>
                    <div className="navbar-container-right">
                        <h2 onClick={handleClickEvent}>Home</h2>
                        <h2 id="navbar-container-right-focus">Books</h2>
                        <h2 onClick={handleClickEvent}>Shop</h2>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;