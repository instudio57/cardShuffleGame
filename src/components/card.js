import React, { useState } from 'react';

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const onClickHandle = () => {
        setIsFlipped(!isFlipped);
    }
    
    return (
        <div>
            <div 
                className={"card-container" + (isFlipped ? " flipped" : "")}
                onClick={onClickHandle}>
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
            </div>
        </div>
    )
}

export default Card;