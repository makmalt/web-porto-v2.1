import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

type PixelTransitionProps = {
    firstContent: React.ReactNode;
    secondContent: React.ReactNode;
    gridSize?: number;
    pixelColor?: string;
    animationStepDuration?: number;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    aspectRatio?: string;
};

function PixelTransition({
    firstContent,
    secondContent,
    gridSize = 10,
    pixelColor = "#000",
    animationStepDuration = 0.4,
    className = "",
    style = {},
    href = "",
    aspectRatio = "100%",

}: PixelTransitionProps) {
    const pixelGridRef = useRef(null);
    const activeRef = useRef(null);
    const delayedCallRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;

    useEffect(() => {
        const el = pixelGridRef.current;
        if (!el) return;

        el.innerHTML = "";

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pixel = document.createElement("div");
                pixel.className = "absolute hidden";
                pixel.style.backgroundColor = pixelColor;

                const size = 100 / gridSize;
                pixel.style.width = `${size}%`;
                pixel.style.height = `${size}%`;
                pixel.style.left = `${col * size}%`;
                pixel.style.top = `${row * size}%`;

                el.appendChild(pixel);
            }
        }
    }, [gridSize, pixelColor]);

    const animatePixels = (activate) => {
        setIsActive(activate);

        const pixels = pixelGridRef.current?.children;
        const activeEl = activeRef.current;
        if (!pixels || !activeEl) return;

        gsap.killTweensOf(pixels);
        delayedCallRef.current?.kill();

        gsap.set(pixels, { display: "none" });

        const stagger = animationStepDuration / pixels.length;

        gsap.to(pixels, {
            display: "block",
            duration: 0,
            stagger: { each: stagger, from: "random" },
        });

        delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
            activeEl.style.display = activate ? "flex" : "none";
        });

        gsap.to(pixels, {
            display: "none",
            duration: 0,
            delay: animationStepDuration,
            stagger: { each: stagger, from: "random" },
        });
    };

    return (
        <div
            className={`
    ${className}
    border-4
    border-black
    shadow-[6px_6px_0_0_black]
    w-[160px]
    relative
    overflow-hidden
    transition-all
    duration-200
    hover:-translate-x-1
    hover:-translate-y-1
    hover:shadow-[10px_10px_0_0_black]
    ${isActive ? "bg-blue-400" : "bg-white"}
  `}
            style={style}
            onMouseEnter={!isTouchDevice ? () => !isActive && animatePixels(true) : undefined}
            onMouseLeave={!isTouchDevice ? () => isActive && animatePixels(false) : undefined}
            onClick={isTouchDevice ? () => animatePixels(!isActive) : undefined}
        >
            {/* Aspect Ratio */}
            <div style={{ paddingTop: aspectRatio }} />

            {/* First Content */}
            <div className="absolute inset-0 flex items-center justify-center font-black text-black text-xl">
                {href ? <a href={href}>{firstContent}</a> : firstContent}
            </div>

            {/* Second Content */}
            <div
                ref={activeRef}
                className="absolute inset-0 hidden items-center justify-center text-black font-black text-lg bg-blue-400 z-[2]"
            >
                {secondContent}
            </div>

            {/* Pixel Overlay */}
            <div
                ref={pixelGridRef}
                className="absolute inset-0 pointer-events-none z-[3]"
            />

            {/* Neo brutal accent */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 border-l-4 border-b-4 border-black z-[4]" />
        </div>
    );
}

export default PixelTransition;
