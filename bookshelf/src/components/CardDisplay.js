import React from "react";
import test from "../assets/jpgs/bookshelf-background.jpg";

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
                            <h2 className="cardDisplay-container-overlay-inner-top-infos-title">{item.volumeInfo.title}</h2>
                            <h3 className="cardDisplay-container-overlay-inner-top-infos-author">Author: {item.volumeInfo.authors}</h3>
                            <h3 className="cardDisplay-container-overlay-inner-top-infos-data">Published: {item.volumeInfo.publishedDate}</h3>
                            <h3 className="cardDisplay-container-overlay-inner-top-infos-more"><a href={item.volumeInfo.infoLink}>More</a></h3>
                        </div>
                    </div>
                    <div className="cardDisplay-container-overlay-inner-bottom">
                        <h3>Description:</h3>
                        <p className="cardDisplay-container-overlay-inner-bottom-description">{item.volumeInfo.description}</p>
                    </div>
                    <div className="cardDisplay-container-overlay-inner-bottom-close" onClick={onClose}>close</div>
                </div>
            </div>
        </>
    )
};

export default CardDisplay;



