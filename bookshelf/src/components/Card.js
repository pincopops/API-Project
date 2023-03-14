import React from "react";
import bookshelfImg from "../assets/jpgs/bookshelf-background.jpg";

function Card() {
    return (
        <>
            <div className="card-book-container">
                <div className="card-book-container-bg" style={{ backgroundImage: `url(${bookshelfImg})`}}>
                    <div className="card-book-container-bg-info">info</div>
                    <h3 className="card-book-container-bg-title">titolo libro</h3>

                </div>
            </div>
        </>
    )
}

export default Card;