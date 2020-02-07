import React from 'react';
import { MDBCard } from "mdbreact";

const Card = (props) => {
    return (
        // <div className="cards">
        //     <img
        //         src={props.cardImageUrl}
        //         className="img-fluid"
        //     />
        // </div>
        <div className="cards">
            <MDBCard className="back">
                <img
                    src="images/cards/blue_back.jpg"
                    className="img-fluid"
                />
            </MDBCard>
            <MDBCard className="front d-none">
                Front
            </MDBCard>
        </div>
    )
}

export default Card;