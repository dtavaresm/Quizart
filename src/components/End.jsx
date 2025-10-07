import { useMediaQuery } from 'usehooks-ts';

const End = (props) => {
    const isMobile = useMediaQuery('(max-width: 800px)');
    const quizData = props.data || [];
    return (
        <>
            <div className="flex flex-col items-center gap-6 p-6 text-center h-fit fixed top-0 left-0 right-0 bg-white z-100 shadow-xl">
                <h2 className="text-base font-bold">End of quiz</h2>
                <p className="sm:text-2xl text-xl">Score: {props.score} / {props.quizLength}</p>
                <p className="sm:text-xl sm:w-full w-[90%] font-bold">{props.message}</p>

                <button
                    onClick={props.onEnd}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
                    Try again
                </button>
            </div >
            <div className="h-fit overflow-y-scroll shadow-inner shadow-gray-500/8 flex justify-center w-screen">
                <div className="inline-grid auto-cols-[minmax(1fr,1fr)] sm:grid-cols-2 md:grid-cols-3 grid-cols-1 auto-rows-[minmax(1fr,1fr)] sm:grid-rows-2 md:grid-rows-3 grid-rows-1 gap-4 w-auto h-fit p-9 pl-5 pr-5 pb-20 sm:pt-70 pt-70">
                    {quizData.map((art, i) => (
                        <div className="flex flex-col items-center gap-2 h-full"
                            key={i}>
                            <div className={`max-w-lg bg-white rounded-2xl group`}
                                style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}>
                                <div className="sm:p-5 p-2 text-center flex items-center flex-col justify-center relative">
                                    <img
                                        src={art.image}
                                        alt="Obra de arte"
                                        className="w-90 h-auto sm:h-90 sm:w-90 max-h-full object-contain"
                                    />

                                    {isMobile ? (
                                        <div className="text-center flex items-center flex-col justify-center p-2">
                                            <p className="text-xs font-semibold mb-1">{art.title}</p>
                                            <p className="text-xs font-semibold">{art.artist}</p>

                                            {props.mode === "movement" && (
                                                <p className="text-xs font-semibold mt-2">{art.movement}</p>
                                            )}
                                        </div>) : (
                                        <div className="text-center flex items-center flex-col justify-center p-3 absolute bg-white/70 w-full opacity-0 group-hover:opacity-100"
                                            style={{
                                                transition: "opacity 0.3s ease-out"
                                            }}
                                        >
                                            <p className="text-lg font-semibold mb-5">{art.title}</p>
                                            <p className="text-lg font-semibold">{art.artist}</p>

                                            {props.mode === "movement" && (
                                                <p className="text-lg font-semibold mt-5">{art.movement}</p>
                                            )}
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default End;
