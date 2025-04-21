import Card from "../components/Card.tsx";
import {useGameContext} from "../hooks/useGameContext.tsx";

export default function CardsPanel() {
    const { cardsInHand } = useGameContext();

    return (
        <div className="row-span-1 bg-green-400 p-4">
            <ul className="flex gap-4 h-full">
                {cardsInHand.map((card, index) => (
                    <Card key={index} card={card}/>
                ))}
            </ul>
        </div>
    );
}