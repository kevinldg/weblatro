import {useGameContext} from "../hooks/useGameContext.tsx";
import {cards} from "../data/cards.ts";

export default function ResetButton() {
    const { setScore, setCardsInHand, setSelectedCards } = useGameContext();

    const handleClick = () => {
        setScore(0);
        setSelectedCards([]);

        // shuffledCards.ts currently don't work here, idk why
        const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
        setCardsInHand(shuffledCards.slice(0, 10));
    };

    return (
        <button
            className="bg-red-500 text-white text-xl font-bold px-4 py-1 rounded hover:bg-red-600 hover:cursor-pointer"
            onClick={handleClick}
        >Reset</button>
    );
}