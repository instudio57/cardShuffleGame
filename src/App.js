import React, { useState, useEffect } from 'react';
import Cards from './components/card';
import cardData from './components/cardData';
import { MDBBtn, MDBIcon } from "mdbreact";

// Styles
import './styles/styles.scss';
import Card from './components/card';

function App() {

    const initialCards = cardData.cardData;
    const [cards, setCards] = useState(cardData.cardData);

    const flipHandle = (id) => {
        let newCards = [...cards];
        newCards[id].flipped = !newCards[id].flipped;
        setCards(newCards);
    }

    const shuffleHandle = () => {
        const shuffled = shuffle(cards);
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

function shuffle(array) {
    var shuffled = [...array];
    var currentIndex = shuffled.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = shuffled[currentIndex];
        shuffled[currentIndex] = shuffled[randomIndex];
        shuffled[randomIndex] = temporaryValue;
    }

    return shuffled;
}

export default App;


