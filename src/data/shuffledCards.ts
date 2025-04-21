import {cards} from "./cards.ts";

export const shuffledCards = [...cards].sort(() => Math.random() - 0.5);