import type { Card as CardType } from "../types/Card.ts";

interface CardProps {
    card: CardType;
}

export default function Card({ card }: CardProps) {
    return (
        <li className="border border-black rounded bg-white flex justify-center items-center p-4 relative w-full hover:bg-neutral-200 hover:cursor-pointer">
            <p className="absolute top-4 right-4">{card.cardValue}</p>
            <p>{card.cardType}</p>
        </li>
    );
}