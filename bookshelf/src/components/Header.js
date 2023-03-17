import React, { useEffect, useRef } from "react";


//importing used assets
import bookshelfImg from "../assets/jpgs/bookshelf-background.jpg";
import searchImg from "../assets/svgs/search-icon-1.svg";

function Header(props) {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
    return (
        <>
            <div className="header-container">
                <div className="header-container-bookshelfImg" style={{ backgroundImage: `url(${bookshelfImg})` }}>
                    <div className="header-container-bookshelfImg-title">
                        <h1 className="header-container-bookshelfImg-title-h1">Welcome to your Bookshelf</h1>
                        <div className="header-container-bookshelfImg-title-subtitle">
                            <h2 className="header-container-bookshelfImg-title-subtitle-h2">Search your book</h2>
                            <input className="header-container-bookshelfImg-title-subtitle-input" ref={inputRef} value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown} style={{ backgroundImage: `url(${searchImg})` }} type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;