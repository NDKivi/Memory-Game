import React, { Component } from "react";
import Card from "./Card";
import Stats from "./Stats";

import rothko1 from "../images/rothko1.jpg";
import rothko2 from "../images/rothko2.jpg";
import rothko3 from "../images/rothko3.jpg";
import rothko4 from "../images/rothko4.jpg";
import rothko5 from "../images/rothko5.jpg";
import rothko6 from "../images/rothko6.jpg";
import rothko7 from "../images/rothko7.jpg";
import rothko8 from "../images/rothko8.jpg";
import rothko9 from "../images/rothko9.jpg";
import rothko10 from "../images/rothko10.jpg";
import rothko11 from "../images/rothko11.jpg";
import rothko12 from "../images/rothko12.jpg";

const cards = [
    {
        "clicked": false,
        "imageURL": rothko1,
        "altText": "Rothko 1"
    },
    {
        "clicked": false,
        "imageURL": rothko2,
        "altText": "Rothko 2"
    },
    {
        "clicked": false,
        "imageURL": rothko3,
        "altText": "Rothko 3"
    },
    {
        "clicked": false,
        "imageURL": rothko4,
        "altText": "Rothko 4"
    },
    {
        "clicked": false,
        "imageURL": rothko5,
        "altText": "Rothko 5"
    },
    {
        "clicked": false,
        "imageURL": rothko6,
        "altText": "Rothko 6"
    },
    {
        "clicked": false,
        "imageURL": rothko7,
        "altText": "Rothko 7"
    },
    {
        "clicked": false,
        "imageURL": rothko8,
        "altText": "Rothko 8"
    },
    {
        "clicked": false,
        "imageURL": rothko9,
        "altText": "Rothko 9"
    },
    {
        "clicked": false,
        "imageURL": rothko10,
        "altText": "Rothko 10"
    },
    {
        "clicked": false,
        "imageURL": rothko11,
        "altText": "Rothko 11"
    },
    {
        "clicked": false,
        "imageURL": rothko12,
        "altText": "Rothko 12"
    }
];


class Game extends Component {

    state = {
        count: 0,
        cards: cards,
        highScore: 0
    }

    updateCardState = (index) => {
        let updatedCards = this.state.cards;
        let clickedCard = this.state.cards[parseInt(index)];
        let newCount = this.state.count;
        let newHighScore = this.state.highScore;

        if (clickedCard.clicked) {
            if (newCount > newHighScore) {
                newHighScore = newCount
                alert("Game over.  You set a new high score of " + newHighScore + ".")
            } else {
                alert("Game over.  You scored " + newCount + ".");
            }
            for (let card of updatedCards) {
                card.clicked = false;
            }
            newCount = 0;
        } else {
            updatedCards[parseInt(index)].clicked = true;
            newCount++;
            if (newCount === this.state.cards.length) {
                alert("You win! Congratulations! 'I would like to say to those who think of my pictures as serene, whether in friendship or mere observation, that I have imprisoned the most utter violence in every inch of their surface.' -Mark Rothko");
                newHighScore = newCount;
                newCount = 0;
                for (let card of updatedCards) {
                    card.clicked = false;
                }
            }
        }
        this.setState({
            count: newCount,
            cards: updatedCards,
            highScore: newHighScore
        });
    };

    render() {
        return <div><h1>Rothko Memory</h1><p>Click on each painting one by one.  Don't click on the same painting twice.  The order is shuffled each turn.  Good luck!</p>
        <Stats count={this.state.count} highScore={this.state.highScore}/>{this.renderCards()}</div>;
        // return <div><h1>Game</h1><Card imageURL={"https://picsum.photos/200/200/?"} altText={"something"} arrayIndex={0} updateCardState={this.updateCardState}/></div>;
    }

    renderCards = () => {
        return (<div>{this.shuffle(this.state.cards).map((currentCard, key) => {
            return <Card imageURL={currentCard.imageURL} altText={currentCard.altText} key={key} id={key} updateCardState={this.updateCardState} />;
        })}</div>);
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

}

export default Game;