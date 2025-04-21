import {Card} from "../types/Card";

const cardTypes = [ "Clubs", "Spades", "Hearts", "Diamonds" ];
const cardValues = [ "2", "3", "4", "5", "6", "7", "8", "9", "10" ];

export const cards: Card[] = [];

cardTypes.forEach((type) => {
    cardValues.forEach((value) => {
        cards.push({
            cardType: type,
            cardValue: value
        });
    });
});