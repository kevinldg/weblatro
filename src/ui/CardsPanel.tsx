import {useState, useEffect} from "react";
import {cards} from "../data/cards.ts";
import Card from "../components/Card.tsx";

export default function CardsPanel() {
  const [cardHand, setCardHand] = useState(cards.slice(0, 10));

  useEffect(() => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCardHand(shuffledCards.slice(0, 10));
  }, []);

  return (
    <div className="row-span-1 bg-green-400 p-4">
      <ul className="flex gap-4 h-full">
        {cardHand.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </ul>
    </div>
  );
}