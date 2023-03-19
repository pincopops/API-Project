import React, { useState } from "react";

function CardDisplay({ show, item, onClose }) {
    if (!show) {
        return null;
    }

    const cardFocus = {
        thumbNail: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,
        title: item.volumeInfo.title ? item.volumeInfo.title : "We're so sorry, there's no title for this book.",
        author: item.volumeInfo.authors ? item.volumeInfo.authors : "We're so sorry, there's no author's info for this book.",
        published: item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "We're so sorry, there's no publishing date's info for this book.",
        more: item.volumeInfo.infoLink ? item.volumeInfo.infoLink : "We're so sorry, there's no link for this book.",
        description: item.volumeInfo.description ? item.volumeInfo.description : "We're so sorry, there's no description for this book.",

    }

    return (
        <>
            <div className="cardDisplay-container-overlay">
                <div className="cardDisplay-container-overlay-inner">
                    <div className="cardDisplay-container-overlay-inner-top">
                        <img className="cardDisplay-container-overlay-inner-top-img" src={cardFocus.thumbNail} alt="thumbnail cover" />
                        <div className="cardDisplay-container-overlay-inner-top-infos">
                            <h2 className="cardDisplay-container-overlay-inner-top-infos-title">{cardFocus.title}</h2>
                            <h3 className="cardDisplay-container-overlay-inner-top-infos-author">Author: {cardFocus.author}</h3>
                            <h3 className="cardDisplay-container-overlay-inner-top-infos-data">Published: {cardFocus.published}</h3>
                            <h3><a className="cardDisplay-container-overlay-inner-top-infos-more" href={cardFocus.more}>More</a></h3>
                        </div>
                    </div>
                    <div className="cardDisplay-container-overlay-inner-bottom">
                        <h3>Description:</h3>
                        <p className="cardDisplay-container-overlay-inner-bottom-description">
                            {
                                (cardFocus.description.length < 2000) ?
                                    (cardFocus.description) :
                                    <p style={{ height: "30rem", overflow: "scroll" }}>{cardFocus.description}</p>
                            }
                        </p>
                    </div>
                    <div className="cardDisplay-container-overlay-inner-bottom-close" onClick={onClose}>close</div>
                </div>
            </div>
        </>
    )
};

export default CardDisplay;



