import React from "react";
import bookshelfImg from "../assets/jpgs/bookshelf-background.jpg";

function Card() {
    return (
        <>
            <div className="card-book-container">
                <div className="a" style={{ backgroundImage: `url(${bookshelfImg})`}}>
                    <div className="b">info</div>
                    <h3 className="c">titolo libro</h3>

                </div>
            </div>
        </>
    )
}

export default Card;