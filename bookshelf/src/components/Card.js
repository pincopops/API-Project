import React, { useState } from "react";
import CardDisplay from "./CardDisplay";

function Card({book}) {
    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();
    
    const [visible, setVisible] = useState({book});

    const handleDelete = (index) => {
        const newBookData = visible.filter((i) => i != index);
        setVisible(newBookData);
        console.log(visible)
    }

    return (
        <>
            {
                book.map((item, index) => {
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
                                        <div onClick={() => handleDelete(index)}>Cancella</div>
                                    </div>
                                    <CardDisplay show={show} item={bookItem} onClose={() => setShow(false)} />

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



