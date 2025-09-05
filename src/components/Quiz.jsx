import { useState, useMemo } from "react";
import Card from "./Card";
import Start from "./Start";
import data from "../data/data";

function counter(array, key) {
    const counts = {};
    for (const obj of array) {
        const value = obj[key];
        counts[value] = (counts[value] || 0) + 1;
        if (counts[value] > 2) {
            return true;
        }
    }
    return false;
}

function getRandomSubset(array, size) {
    const shuffled = [];
    const usedIndexes = new Set();

    while (shuffled.length < size && usedIndexes.size < array.length) {
        const index = Math.floor(Math.random() * array.length);
        if (usedIndexes.has(index)) continue;

        const candidate = array[index];
        const artistLimit = counter([...shuffled, candidate], "artist");
        const movementLimit = counter([...shuffled, candidate], "movement");

        if (!artistLimit && !movementLimit) {
            shuffled.push(candidate);
            usedIndexes.add(index);
        }
    }

    return shuffled;
}

export default function Quiz() {
    const [quizData, setQuizData] = useState(() => getRandomSubset(data, 12));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selected, setSelected] = useState(null);
    const [start, setStartScreen] = useState(true);
    const [mode, setMode] = useState(null);

    const currentArt = quizData[currentIndex];

    function handleStart(selectedMode) {
        console.log("User selected:", selectedMode);
        setMode(selectedMode);
        setQuizData(getRandomSubset(data, 12));
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
        setSelected(null);
        setStartScreen(false);
    }

    function handleRestart() {
        setStartScreen(true);
    }

    const options = useMemo(() => {
        if (!mode) return [];

        const correctAnswer = currentArt[mode];

        let opts = [correctAnswer];

        while (opts.length < 3) {
            const j = Math.floor(Math.random() * data.length);
            const candidate = data[j][mode];

            if (!opts.includes(candidate)) {
                opts.push(candidate);
            }
        }
        return opts.sort(() => Math.random() - 0.5);
    }, [currentIndex, mode, currentArt]);

    function handleAnswer(answer) {
        setSelected(answer);
        if (answer === currentArt[mode]) {
            setScore(score + 1);
        }
    }

    function handleNext() {
        if (currentIndex + 1 < quizData.length) {
            setTimeout(() => {
                requestAnimationFrame(() => setSelected(null));
                setCurrentIndex((i) => i + 1);
            }, 10)
        } else {
            setShowResult(true);
        }
    }

    if (start) {
        return (
            <Start onStart={handleStart} />
        );
    }

    if (showResult) {
        let endMessage = "";
        if (score < (quizData.length / 2)) endMessage = "Maybe Art History is not your cup of tea...";
        else if (score <= (quizData.length - 2)) endMessage = "Not bad at all!";
        else endMessage = "Wow, congratulations, you aced this!";
        return (
            <>
                <div className="flex flex-col items-center gap-6 p-6 text-center h-fit fixed top-0 left-0 right-0 bg-white z-100">
                    <h2 className="text-base font-bold">End of quiz</h2>
                    <p className="sm:mt-4 sm:text-2xl text-xl">Score: {score} / {quizData.length}</p>
                    <p className="sm:mt-4 sm:text-xl sm:w-full w-[90%] font-bold">{endMessage}</p>

                    <button
                        onClick={() => handleRestart()}
                        className="sm:mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                    >
                        Try again
                    </button>
                </div>
                <div className="h-fit overflow-y-scroll shadow-inner shadow-gray-500/8 flex justify-center w-screen">
                    <div className="inline-grid auto-cols-[minmax(1fr,1fr)] sm:grid-cols-2 md:grid-cols-3 grid-cols-1 auto-rows-[minmax(1fr,1fr)] sm:grid-rows-2 md:grid-rows-3 grid-rows-1 gap-4 w-auto h-fit p-9 pl-5 pr-5 pb-20 sm:pt-90 pt-70">
                        {quizData.map((art) => (
                            <div className="flex flex-col items-center gap-2 h-full">
                                <div className={`max-w-lg bg-white rounded-2xl group`}
                                    style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}>
                                    <div className="sm:p-5 p-2 text-center flex items-center flex-col justify-center relative">
                                        <img
                                            src={art.image}
                                            alt="Obra de arte"
                                            className="w-90 h-auto sm:h-90 sm:w-90 max-h-full object-contain"
                                        />
                                        <div className="text-center flex items-center flex-col justify-center p-3 absolute bg-white/70 w-full opacity-0 group-focus:opacity-100"
                                            style={{
                                                transition: "opacity 0.3s ease-out"
                                            }}
                                        >
                                            <p className="text-lg font-semibold mb-5">{art.title}</p>
                                            <p className="text-lg font-semibold">{art.artist}</p>

                                            {mode === "movement" && (
                                                <p className="text-lg font-semibold mt-5">{art.movement}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center gap-6 p-6 max-h-screen">
            <Card
                imageSrc={currentArt.image}
                flipped={selected}
                artist={currentArt.artist}
                title={currentArt.title}
                movement={currentArt.movement}
                mode={mode}
                showResult
            />
            <div className="flex gap-4 flex-wrap sm:flex-nowrap justify-center items-center">
                {options.map((option, i) => (
                    <button
                        type="button"
                        key={i}
                        onClick={() => handleAnswer(option)}
                        disabled={selected}
                        className={`p-3 rounded-lg border
                            ${!selected
                                ? "cursor-pointer hover:bg-gray-200 bg-gray-100"
                                : option === selected
                                    ? option === currentArt[mode]
                                        ? "bg-green-200 border-green-500 cursor-auto"
                                        : "bg-red-200 border-red-500 cursor-auto"
                                    : "bg-gray-100 cursor-auto"
                            }`}>
                        {option}
                    </button>
                ))}
            </div>
            <p className="ms:mt-4 text-sm text-gray-600 text-center">
                Pergunta {currentIndex + 1} de {quizData.length} | Pontuação: {score}
            </p>
            {selected && (
                <button
                    onClick={() => handleNext()}
                    className="ms:mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                >
                    Próxima
                </button>
            )}
        </div>
    );
}
