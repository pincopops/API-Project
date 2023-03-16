import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";




function Body() {

    //state managing through hook:
    //the search constant is filled up with 
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);

    //function to search books over Api:
    //Arrow funciton "searchBook" uses axios, which is promise based,
    //to get datas from the Google Books Api and, according to the value of the search field,
    //it links the content to the http request, making us see the results of the Get call 
    const searchBook = (event) => {
        if (event.key === "Enter") {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyBg8jAMXdAmHkaHViRFX3UbTcWC4r8FEx0")
                .then(res => setBookData(res.data.items))
                .catch(err => { alert("Something went wrong. Try search better."); console.log(err); })
        }
    }
    return (
        <>
            <Header value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={searchBook}/>
            <div className="card-container">
                <Card book={bookData} />
            </div>
        </>
    )
}
export default Body;










