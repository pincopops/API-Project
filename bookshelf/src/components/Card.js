import React, { useState } from "react";
import CardDisplay from "./CardDisplay";

function Card({book}) {
    console.log(book);
    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();

    return (
        <>
            {
                book.map((item) => {
                    const thumbNail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    const title = item.volumeInfo.title;

                    if (thumbNail !== undefined) {
                        return (
                            <>
                                <div key={item.id}>
                                    <div className="card-book-container">
                                        <img className="card-book-container-bg" src={thumbNail} alt="Book's cover"></img>
                                        <div className="card-book-container-info" onClick={() => { setShow(true); setBookItem(item) }}>info</div>
                                        <h3 className="card-book-container-title">{title}</h3>
                                    </div>
                                    <CardDisplay key={item.etag} show={show} item={bookItem} onClose={() => setShow(false)} />

                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Card;



