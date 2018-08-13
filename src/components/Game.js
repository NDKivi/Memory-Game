import React, { Component } from "react";
import Card from "./Card";
import Stats from "./Stats";
import space from "../images/space.png";
import socrates from "../images/socrates.png";
import rps from "../images/rps.png";
import eiffel from "../images/eiffel.png";

const cards = [
    {
        "clicked": false,
        "imageURL": space,
        "altText": "Space"
    },
    {
        "clicked": false,
        "imageURL": socrates,
        "altText": "Socrates"
    },
    {
        "clicked": false,
        "imageURL": rps,
        "altText": "RPS"
    },
    {
        "clicked": false,
        "imageURL": eiffel,
        "altText": "Eiffel"
    }
];


class Game extends Component {

    state = {
        count: 0,
        cards: cards
    }

    updateCardState = (index) => {
        let updatedCards = this.state.cards;
        let clickedCard = this.state.cards[parseInt(index)];
        let newCount = this.state.count;

        if (clickedCard.clicked) {
            alert("game over");
            for (let card of updatedCards) {
                card.clicked = false;
            }
            newCount = 0;
        } else {
            updatedCards[parseInt(index)].clicked = true;
            newCount++;
        }
        this.setState({
            count: newCount,
            cards: updatedCards
        });
        console.log(this.state.cards);
    };

    render() {
        return <div>{this.renderCards()}<Stats count={this.state.count} /></div>;
        // return <div><h1>Game</h1><Card imageURL={"https://picsum.photos/200/200/?"} altText={"something"} arrayIndex={0} updateCardState={this.updateCardState}/></div>;
    }

    renderCards = () => {
        return (<div>{this.state.cards.map((currentCard, key) => {
            return <Card imageURL={currentCard.imageURL} altText={currentCard.altText} key={key} id={key} updateCardState={this.updateCardState} />;
        })}</div>);
    }
}

export default Game;