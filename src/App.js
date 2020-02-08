import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdbreact';
import Card from './components/card';
import cardData from './components/cardData';
import Shuffle from './components/shuffle';

// Styles
import './styles/styles.scss';

function App() {

    const initialCards = cardData.cardData;
    const [cards, setCards] = useState(cardData.cardData);
    const [animate, setAnimate] = useState(false);
    // const [buffer, setBuffer] = useState([]);
    let style = {
        transform: `translateY(0px)`,
        transition: 'all 2s ease',
    }

    // Flip the card on click
    const flipHandle = (id) => {
        let newCards = [...cards];
        newCards[id].flipped = !newCards[id].flipped;
        setCards(newCards);
    }

    // Shuffle the card on click
    const shuffleHandle = (e) => {
        setAnimate(true);
        let resetFlip = cards;
        resetFlip = resetFlip.map(card => {
            var temp = Object.assign({}, card);
            temp.flipped = false;
            return temp;
        });

        const shuffled = Shuffle(resetFlip);
        setCards(shuffled);
    }

    

    useEffect(() => {
    }, []);

    return (
        <div className="App">
            <div className="container-wrap">
                <div>
                    <h1 className="text-center my-4 text-white">Card Shuffle Game</h1>
                    <div className="grid-container">
                        {cards.map((card, key) => {
                            return (
                                <Card
                                    key={key}
                                    cardId={key}
                                    cardName={card.name}
                                    cardColor={card.color}
                                    cardImageUrl={card.imageUrl}
                                    flipHandle={(id) => flipHandle(id)}
                                    isFlipped={card.flipped}
                                    animate={animate}
                                />
                            )
                        })}
                    </div>
                    <div className="text-center btn-wrap">
                        <MDBBtn className="stylish-color shuffle-btn" onClick={shuffleHandle}>
                            Shuffle
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


