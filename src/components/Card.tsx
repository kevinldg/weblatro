import type { Card as CardType } from "../types/Card.ts";
import {useGameContext} from "../hooks/useGameContext.tsx";

interface CardProps {
    card: CardType;
}

export default function Card({ card }: CardProps) {
    const { selectedCards, setSelectedCards } = useGameContext();

    const handleClick = () => {
        if (selectedCards.length === 5) {
            console.error("You can only play 5 cards per hand");
            return;
        }

        if (selectedCards.some(selected => selected.cardId === card.cardId)) {
            setSelectedCards(prevSelected =>
                prevSelected.filter(selected => selected.cardId !== card.cardId)
            );
            return;
        }

        setSelectedCards(prevSelected => [...prevSelected, card]);
    };

    return (
        <li
            className="border border-black rounded bg-white flex justify-center items-center p-4 relative size-32 hover:bg-neutral-200 hover:cursor-pointer"
            onClick={handleClick}
        >
            <p className="absolute top-4 right-4">{card.cardValue}</p>
            <p>{card.cardType}</p>
        </li>
    );
}