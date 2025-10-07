import { useRef, useEffect } from "react";

const Card = (props) => {
    const boundingRef = useRef(null);
    const cardRef = useRef(null);
    const frame = useRef(0);

    const baseTransform = () => `rotateY(${props.flipped ? 180 : 0}deg)`;

    useEffect(() => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = baseTransform();
        cardRef.current.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
    }, [props.flipped]);

    const handleMouseEnter = (event) => {
        boundingRef.current = event.currentTarget.getBoundingClientRect();
    };

    const handleMouseLeave = () => {
        boundingRef.current = null;
        cancelAnimationFrame(frame.current);

        if (!cardRef.current) return;

        cardRef.current.style.transform = baseTransform();
        cardRef.current.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
    };

    const handleMouseMove = (event) => {
        if (!boundingRef.current || !cardRef.current) return;

        const { left, top, width, height } = boundingRef.current;
        const x = event.clientX - left - width / 2;
        const y = event.clientY - top - height / 2;

        const shadowX = (x / (width / 2)) * 20;
        const shadowY = (y / (height / 2)) * 20;
        const shadowBlur = 30;

        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
            cardRef.current.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0,0,0,0.25)`;
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            className={`max-w-lg mx-auto w-full h-70 sm:h-144 sm:w-144 [perspective:800px] bg-white rounded-2xl relative duration-700 transform 
                ${props.flipped ? "rotate-y-180" : ""} 
                transform-style-preserve-3d`}
            style={{
                transition: "transform 1s ease-out, box-shadow 0.3s ease-out",
                transformStyle: "preserve-3d",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
            }}
        >
            <div className="absolute w-full h-full backface-hidden p-5 text-center flex items-center flex-col justify-center">
                <img
                    src={props.imageSrc}
                    alt="Obra de arte"
                    className="w-full h-auto max-h-full object-contain"
                />
            </div>

            <div className={`absolute w-full h-full backface-hidden rotate-y-180 p-5 text-center flex items-center flex-col justify-center`}>
                {props.flipped && (
                    <div className={`${props.flipped ? "flex" : "hidden"} text-center items-center flex-col justify-center`}>
                        <p className="sm:text-lg text-xs sm:font-semibold mb-5">{props.title}</p>
                        <p className="sm:text-lg text-xs sm:font-semibold">{props.artist}</p>

                        {props.mode === "movement" && (
                            <p className="sm:text-lg text-xs mt-5">{props.movement}</p>
                        )}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Card;
