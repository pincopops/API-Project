import React from "react";

function Card({ book }) {
    console.log(book);
    return (
        <>
            {
                book.map((item) => {
                    const thumbNail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    const title = item.volumeInfo.title;

                    if (thumbNail !== undefined) {
                        return (
                            <div key={item.id} className="card-book-container">
                                <img className="card-book-container-bg" src={thumbNail} alt="Book's cover"></img>
                                <div className="card-book-container-info">info</div>
                                <h3 className="card-book-container-title">{title}</h3>

                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default Card;



