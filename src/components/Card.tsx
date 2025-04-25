import type { Card as CardType } from "../types/Card.ts";
import {useGameContext} from "../hooks/useGameContext.tsx";
import {Club, Diamond, Heart, Spade} from "lucide-react";

interface CardProps {
    card: CardType;
}

export default function Card({ card }: CardProps) {
    const { selectedCards, setSelectedCards, setCardsInHand } = useGameContext();

    const handleClick = () => {
        const isSelected = selectedCards.some(selected => selected.cardId === card.cardId);

        if (isSelected) {
            setSelectedCards(prevSelected =>
                prevSelected.filter(selected => selected.cardId !== card.cardId)
            );
            setCardsInHand(prevHand => [...prevHand, card]);
            return;
        }

        if (selectedCards.length === 5) {
            console.error("You can only play 5 cards per hand");
            return;
        }

        setSelectedCards(prevSelected => [...prevSelected, card]);
        setCardsInHand(prevHand => prevHand.filter(item => item.cardId !== card.cardId));
    };

    const cardColor = () => {
        switch (card.cardType) {
            case "Clubs":
                return "black";
            case "Spades":
                return "black";
            case "Hearts":
                return "red";
            case "Diamonds":
                return "orange";
        }
    };

    const cardType = () => {
        switch (card.cardType) {
            case "Clubs":
                return <Club color="black" fill="black" size={32} />;
            case "Spades":
                return <Spade color="black" fill="black" size={32} />;
            case "Hearts":
                return <Heart color="red" fill="red" size={32} />;
            case "Diamonds":
                return <Diamond color="orange" fill="orange" size={32} />;
        }
    };

    return (
        <li
            className={`rounded bg-neutral-100 flex justify-center items-center p-4 relative w-36 h-48 transition-transform hover:rotate-6 hover:cursor-pointer 
            ${cardColor() === "red" ? "text-red-600" : cardColor() === "orange" && "text-orange-400"}
            `}
            onClick={handleClick}
        >
            <p className="absolute top-2 left-2 font-serif font-bold text-xl">{card.cardValue}</p>
            <p>{cardType()}</p>
            <p className="absolute bottom-2 right-2 font-serif font-bold text-xl">{card.cardValue}</p>
        </li>
    );
}