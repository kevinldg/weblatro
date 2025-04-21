import type { Card as CardType } from "../types/Card.ts";
import {useGameContext} from "../hooks/useGameContext.tsx";
import {useEffect, useState} from "react";

interface CardProps {
    card: CardType;
}

export default function Card({ card }: CardProps) {
    const { selectedCards, setSelectedCards } = useGameContext();
    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        const isCardSelected = selectedCards.some(selected => selected.cardId === card.cardId);
        setIsSelected(isCardSelected);
    }, [selectedCards]);

    const handleClick = () => {
        if (selectedCards.some(selected => selected.cardId === card.cardId)) {
            setSelectedCards(prevSelected =>
                prevSelected.filter(selected => selected.cardId !== card.cardId)
            );
            return;
        }

        if (selectedCards.length === 5) {
            console.error("You can only play 5 cards per hand");
            return;
        }

        setSelectedCards(prevSelected => [...prevSelected, card]);
    };

    return (
        <li
            className={`border-2 rounded bg-white flex justify-center items-center p-4 relative size-32 hover:bg-neutral-200 hover:cursor-pointer ${
                isSelected ? "border-blue-500 text-blue-500" : "border-black"
            }`}
            onClick={handleClick}
        >
            <p className="absolute top-4 right-4">{card.cardValue}</p>
            <p>{card.cardType}</p>
        </li>
    );
}