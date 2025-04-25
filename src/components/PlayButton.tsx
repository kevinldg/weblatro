import {useGameContext} from "../hooks/useGameContext.tsx";
import {cards} from "../data/cards.ts";

export default function PlayButton() {
    const { setScore, selectedCards, setSelectedCards, setCardsInHand } = useGameContext();

    const handleClick = () => {
        const frequency = selectedCards.reduce((acc, card) => {
            acc[card.cardValue] = (acc[card.cardValue] || 0) + 1;
            return acc;
        }, {} as Record<number, number>);

        const pairs = Object.values(frequency).filter(count => count === 2).length;
        let multiplier = 1;
        if (pairs === 1) {
            multiplier = 2;
        } else if (pairs === 2) {
            multiplier = 3;
        }

        const basePoints = selectedCards.reduce(
            (total, card) => total + card.cardValue,
            0
        );

        const scoredPoints = basePoints * multiplier;

        setScore(prevScore => prevScore + scoredPoints);
        setSelectedCards([]);

        // shuffledCards.ts currently don't work here, idk why
        const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
        setCardsInHand(shuffledCards.slice(0, 10));
    };

    return (
        <button
            className="bg-blue-500 text-white text-xl font-bold px-4 py-1 rounded hover:bg-blue-600 hover:cursor-pointer"
            onClick={handleClick}
        >Play</button>
    );
}