import React from "react";

function CardDisplay({show, item, onClose}) {
    if(!show){
        return null;
    }

    const thumbNail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (
        <>
            <div className="cardDisplay-container-overlay">
                <div className="cardDisplay-container-overlay-inner">
                    <div className="cardDisplay-container-overlay-inner-top">
                        <img className="cardDisplay-container-overlay-inner-top-img" src={thumbNail} alt="thumbnail cover" />
                        <div className="cardDisplay-container-overlay-inner-top-infos">
                            <h2 className="cardDisplay-container-overlay-inner-top-infos-title">{item.volumeInfo.title ? item.volumeInfo.title : "We're so sorry, there's no title for this book."}</h2>
                            <h3 className="cardDisplay-container-overlay-inner-top-infos-author">Author: {item.volumeInfo.authors ? item.volumeInfo.authors : "We're so sorry, there's no author's info for this book."}</h3>
                            <h3 className="cardDisplay-container-overlay-inner-top-infos-data">Published: {item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "We're so sorry, there's no publishing date's info for this book."}</h3>
                            <h3><a className="cardDisplay-container-overlay-inner-top-infos-more" href={item.volumeInfo.infoLink ? item.volumeInfo.infoLink : "We're so sorry, there's no link for this book."}>More</a></h3>
                        </div>
                    </div>
                    <div className="cardDisplay-container-overlay-inner-bottom">
                        <h3>Description:</h3>
                        <p className="cardDisplay-container-overlay-inner-bottom-description">{item.volumeInfo.description ? item.volumeInfo.description : "We're so sorry, there's no description for this book."}</p>
                    </div>
                    <div className="cardDisplay-container-overlay-inner-bottom-close" onClick={onClose}>close</div>
                </div>
            </div>
        </>
    )
};

export default CardDisplay;



