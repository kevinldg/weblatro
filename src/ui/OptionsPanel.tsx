import PlayButton from "../components/PlayButton.tsx";
import {useGameContext} from "../hooks/useGameContext.tsx";
import ResetButton from "../components/ResetButton.tsx";

export default function OptionsPanel() {
    const { score } = useGameContext();

    return (
        <div className="col-span-1 bg-neutral-700 text-white p-4 relative">
            <p className="text-xl">Score: {score}</p>
            <div className="flex items-center gap-4 absolute bottom-4">
                <PlayButton />
                <ResetButton />
            </div>
        </div>
    );
}