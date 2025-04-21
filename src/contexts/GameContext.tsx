import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {Card} from "../types/Card.ts";

interface GameContextType {
    cardsInHand: Card[];
    setCardsInHand: Dispatch<SetStateAction<Card[]>>;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({children}: {children: ReactNode}) => {
    const [cardsInHand, setCardsInHand] = useState<Card[]>([]);

    return (
        <GameContext.Provider value={{cardsInHand, setCardsInHand}}>
            {children}
        </GameContext.Provider>
    );
};
