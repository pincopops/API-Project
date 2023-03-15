import React from "react";
import test from "../assets/jpgs/bookshelf-background.jpg";

function CardDisplay() {
    return (
        <>
            <div className="cardDisplay-container">
                <div className="cardDisplay-container-top">
                    <img className="cardDisplay-container-top-img" src={test} alt="thumbnail cover" />
                    <div className="cardDisplay-container-top-infos">
                        <h3 className="cardDisplay-container-top-infos-author">Author: Elio</h3>
                        <h3 className="cardDisplay-container-top-infos-data">Publishing data: 14-03-2023</h3>
                        <h3 className="cardDisplay-container-top-infos-more">more</h3>
                    </div>
                </div>
                <div className="cardDisplay-container-bottom">
                    <h3>Description:</h3>
                    <p className="cardDisplay-container-bottom-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis ac libero in suscipit. Phasellus dapibus massa eu hendrerit sagittis. Vestibulum nec libero vehicula, dictum mauris non, posuere erat. Mauris sed ex rhoncus, aliquam ex varius, finibus tellus. Mauris rutrum viverra sem quis ultricies. Suspendisse potenti. Donec dignissim rutrum maximus. Maecenas ut neque vel urna mattis iaculis. Fusce placerat mi et orci congue maximus. Curabitur vulputate efficitur viverra. In accumsan mauris justo, at mollis tortor lobortis quis. Aliquam ac massa ac nisl condimentum ornare. Vivamus pharetra ante ac facilisis dictum. Donec id mattis orci. Fusce dignissim turpis mi, suscipit luctus augue laoreet vel. Mauris bibendum luctus convallis. Nunc ultricies dolor turpis, lobortis blandit nisl finibus a. Curabitur ligula neque, malesuada vitae dapibus eget, sollicitudin vitae quam. Mauris eu tellus venenatis, viverra turpis quis, efficitur risus. Phasellus vulputate ex ac felis hendrerit, et mattis lacus tristique. Vivamus porta, purus et varius sollicitudin, enim sapien blandit turpis, nec interdum nisl elit id urna.</p>

                </div>
                <div className="cardDisplay-container-bottom-close">close</div>

            </div>

        </>
    )
};

export default CardDisplay;