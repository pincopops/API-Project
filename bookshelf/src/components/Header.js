import React from "react";
import Card from "./Card";


//importing used assets
import bookshelfImg from "../assets/jpgs/bookshelf-background.jpg";
import searchImg from "../assets/svgs/search-icon-1.svg";

function Header(props) {
    return (
        <>
            <div className="header-container">
                <div className="header-container-bookshelfImg" style={{ backgroundImage: `url(${bookshelfImg})` }}>
                    <div className="header-container-bookshelfImg-title">
                        <h1 className="header-container-bookshelfImg-title-h1">Welcome to your Bookshelf</h1>
                        <div className="header-container-bookshelfImg-title-subtitle">
                            <h2 className="header-container-bookshelfImg-title-subtitle-h2">Search your book</h2>
                            <input className="header-container-bookshelfImg-title-subtitle-input" value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown} style={{ backgroundImage: `url(${searchImg})` }} type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-card-container">
                <Card book={props.book} />
            </div>
        </>
    )
}

export default Header;