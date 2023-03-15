import React from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import CardDisplay from "./CardDisplay";

//importing assets
import bookshelfImg from "../assets/jpgs/bookshelf-background.jpg";
import searchImg from "../assets/svgs/search-icon-1.svg";


function Header() {

    //state managing through hook
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    
    //function to search books
    const searchBook = (event) => {
        if(event.key === "Enter"){
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyBg8jAMXdAmHkaHViRFX3UbTcWC4r8FEx0")
            .then(res => setBookData(res.data.items))
            .catch(err => console.log(err))
        }
    } 

    return (
        <>
            <div className="body-header-container">
                <div className="body-header-container-bookshelfImg" style={{ backgroundImage: `url(${bookshelfImg})` }}>
                    <div className="body-header-container-bookshelfImg-title">
                        <h1 className="body-header-container-bookshelfImg-title-h1">Welcome to your Bookshelf</h1>
                        <div className="body-header-container-bookshelfImg-title-subtitle">
                            <h2 className="body-header-container-bookshelfImg-title-subtitle-h2">Search your book</h2>
                            <input value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={searchBook}  className="body-header-container-bookshelfImg-title-subtitle-input" style={{ backgroundImage: `url(${searchImg})` }} type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-card-container">
                <Card book={bookData}/>
            </div>
            <CardDisplay />


        </>
    )
}






export default Header;