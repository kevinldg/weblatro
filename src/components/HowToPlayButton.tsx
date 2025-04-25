import {useState} from "react";

export default function HowToPlayButton() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleClick = () => {
        setIsModalVisible(true);
    };

    const Modal = () => {
        return (
            <div onClick={() => {setIsModalVisible(false)}} className="fixed top-0 left-0 w-screen h-screen bg-black/75 z-10 flex justify-center items-center">
                <div className="bg-neutral-600 p-4 w-1/2 h-1/2 rounded-lg flex flex-col gap-4 relative">
                    <h2 className="text-2xl font-bold">How to play?</h2>
                    <p>You can play up to five cards, the sum of the card numbers will be scored as points!</p>
                    <p>
                        <span className="font-bold">Multiplier</span>
                        <br/>Pair (x2): Two cards with the same number
                        <br/>Two Pair (x3): Like a pair, e.g. 2 + 2 and 3 + 3
                    </p>
                    <p className="absolute bottom-4 left-4">Click outside to close the instructions!</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <button
                className="bg-yellow-500 text-white text-xl font-bold px-4 py-1 rounded hover:bg-yellow-600 hover:cursor-pointer"
                onClick={handleClick}
            >How to play</button>
            {isModalVisible && <Modal />}
        </>
    );
}