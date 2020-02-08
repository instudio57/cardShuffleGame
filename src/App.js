import React, { useState } from 'react';
import Cards from './components/card';
import cardData from './components/cardData';

// Styles
import './styles/styles.scss';
import Card from './components/card';

function App() {
    const cardArray = cardData;
    const [cards, setCards] = useState(cardArray);

    return (
        <div className="App">
            <div className="container-wrap">
                <div className="container-fluid">
                    <h1 className="text-center my-5 text-white">Card Shuffle Game</h1>
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <div className="grid-container">
                                {cards.cardData.map(card => {
                                    return (
                                        <Card
                                            key={card.id}
                                            cardName={card.name}
                                            cardColor={card.color}
                                            cardImageUrl={card.imageUrl}
                                            
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
