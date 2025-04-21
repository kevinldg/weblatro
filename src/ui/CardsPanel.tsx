import Card from "../components/Card.tsx";
import {useGameContext} from "../hooks/useGameContext.tsx";

export default function CardsPanel() {
    const { cardsInHand } = useGameContext();

    return (
        <div className="row-span-1 bg-green-400 p-4">
            <ul className="flex justify-around items-center h-full gap-4">
                {cardsInHand.map((card, index) => (
                    <Card key={index} card={card}/>
                ))}
            </ul>
        </div>
    );
}