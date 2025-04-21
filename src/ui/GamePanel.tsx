import {useGameContext} from "../hooks/useGameContext.tsx";
import Card from "../components/Card.tsx";

export default function GamePanel() {
    const { selectedCards } = useGameContext();

    return (
        <div className="col-span-3 bg-blue-400 p-4 flex justify-center items-center">
            <ul className="flex gap-8 w-fit">
                {selectedCards.map((card, index) => (
                    <Card key={index} card={card}/>
                ))}
            </ul>
        </div>
    );
}