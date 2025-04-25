import {useGameContext} from "../hooks/useGameContext.tsx";
import Card from "../components/Card.tsx";

export default function GamePanel() {
    const { selectedCards } = useGameContext();

    return (
        <div className="col-span-3 bg-neutral-800 p-4 flex justify-center items-center">
            <ul className="flex items-center gap-8">
                {selectedCards.map((card, index) => (
                    <Card key={index} card={card}/>
                ))}
            </ul>
        </div>
    );
}