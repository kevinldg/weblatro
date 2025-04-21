import OptionsPanel from "./ui/OptionsPanel.tsx";
import GamePanel from "./ui/GamePanel.tsx";
import CardsPanel from "./ui/CardsPanel.tsx";
import {useGameContext} from "./hooks/useGameContext.tsx";
import {useEffect} from "react";
import {shuffledCards} from "./data/shuffledCards.ts";

export default function App() {
    const { setCardsInHand } = useGameContext();

    useEffect(() => {
        setCardsInHand(shuffledCards.slice(0, 10));
    }, [setCardsInHand]);

    return (
        <div className="grid grid-rows-4 h-screen">
            <div className="grid grid-cols-4 row-span-3">
                <OptionsPanel />
                <GamePanel />
            </div>
            <CardsPanel />
        </div>
    );
}