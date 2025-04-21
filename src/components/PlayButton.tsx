import {useGameContext} from "../hooks/useGameContext.tsx";
import {cards} from "../data/cards.ts";

export default function PlayButton() {
    const { setScore, selectedCards, setSelectedCards, setCardsInHand } = useGameContext();

    const handleClick = () => {
        const scoredPoints = selectedCards.reduce(
            (total, card) => total + card.cardValue,
            0
        );
        setScore(prevScore => prevScore + scoredPoints);
        setSelectedCards([]);

        // shuffledCards.ts currently don't work here, idk why
        const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
        setCardsInHand(shuffledCards.slice(0, 10));
    };

    return (
        <button
            className="bg-blue-500 text-white text-xl font-bold px-8 py-1 rounded hover:bg-blue-600 hover:cursor-pointer"
            onClick={handleClick}
        >Play</button>
    );
}