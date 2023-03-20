import React from "react";
import bookImg from "../assets/svgs/book-icon-1.svg";

function Footer() {
    return (
        <>
            <div className="footer-main-container">
                <div className="footer-main-container-infos">
                    <h1>Library
                        <img className="footer-main-container-infos-img" src={bookImg} />
                    </h1>
                    <h2>Powered by <strong><i>Elio Scaletta</i></strong></h2>
                    <p>© Copyright 2023</p>

                </div>
            </div>
        </>
    )
}

export default Footer;