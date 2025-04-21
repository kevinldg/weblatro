import OptionsPanel from "./ui/OptionsPanel.tsx";
import GamePanel from "./ui/GamePanel.tsx";
import CardsPanel from "./ui/CardsPanel.tsx";

export default function App() {
    return (
        <div className="grid grid-rows-4 h-screen">
            <div className="grid grid-cols-4 row-span-3">
                <OptionsPanel />
                <GamePanel />
            </div>
            <CardsPanel />
        </div>
    );
}