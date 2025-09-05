export default function Start({ onStart }) {

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6 text-center">
            <p className="text-gray-600">Welcome to the</p>
            <h1 className="text-4xl font-bold">Art Quiz</h1>
            <p className="text-gray-600">Choose your theme to begin</p>
            <div className="flex gap-4">
                <button
                    onClick={() => onStart("artist")}
                    className="px-6 py-3 w-35 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                >
                    Artists
                </button>
                <button
                    onClick={() => onStart("movement")}
                     className="px-6 py-3 w-35 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
                >
                    Movements
                </button>
            </div>
        </div>
    );
}
