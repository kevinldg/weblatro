import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {Card} from "../types/Card.ts";

interface GameContextType {
    cardsInHand: Card[];
    setCardsInHand: Dispatch<SetStateAction<Card[]>>;
    selectedCards: Card[];
    setSelectedCards: Dispatch<SetStateAction<Card[]>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({children}: {children: ReactNode}) => {
    const [cardsInHand, setCardsInHand] = useState<Card[]>([]);
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    const [score, setScore] = useState<number>(0);

    return (
        <GameContext.Provider value={{
            cardsInHand,
            setCardsInHand,
            selectedCards,
            setSelectedCards,
            score,
            setScore
        }}>
            {children}
        </GameContext.Provider>
    );
};
