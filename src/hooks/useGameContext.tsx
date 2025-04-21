import {useContext} from "react";
import {GameContext} from "../contexts/GameContext.tsx";

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("GameContext is not available.");
    }
    return context;
};