import React, { useState, Fragment } from 'react';

const Card = (props) => {
    return (
        <Fragment>
            <div 
                className={"card-container view overlay" + (props.isFlipped ? " flipped" : "")}
                onClick={() => props.flipHandle(props.cardId)}>
                <img
                    src="images/cards/blue_back.jpg"
                    className="img-fluid card-space"
                />
                <div className="back">
                    <img
                        src="images/cards/blue_back.jpg"
                        className="img-fluid"
                    />
                    <p></p>
                </div>
                <div className="front">
                    <img
                        src={props.cardImageUrl}
                        className="img-fluid"
                    />
                </div>
                <div className="mask flex-center waves-effect waves-light rgba-pink-strong">
                    <p className="white-text">Draw</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;