import React from "react"

//importing assets
import bookshelfImg from "../assets/jpgs/bookshelf-background.jpg";
import searchImg from "../assets/svgs/search-icon-1.svg";

function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header-container-bookshelfImg" style={{ backgroundImage: `url(${bookshelfImg})` }}>
                    <div className="header-container-bookshelfImg-title">
                        <h1 className="header-container-bookshelfImg-title-h1">Welcome to your BookShelf</h1>
                        <div className="header-container-bookshelfImg-title-subtitle">
                            <h2>Search your book</h2>
                            <input className="header-container-bookshelfImg-title-subtitle-input" style={{ backgroundImage: `url(${searchImg})`}} type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}






export default Header;