"use client";
import React, { useState, useRef } from "react";

const WeddingBell = () => {
  const [isRinging, setIsRinging] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio("/assets/weddingSongT.m4a") : null
  );

  if (audioRef.current) {
    audioRef.current.volume = 0.1;
    audioRef.current.loop = true;
  }

  const toggleBell = () => {
    if (!audioRef.current) return;

    if (isRinging) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsRinging(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
      setIsRinging(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={toggleBell}
        className="p-2 rounded-full transition-transform duration-200 hover:scale-105"
        aria-label={isRinging ? "Stop bell" : "Ring bell"}
      >
        <div
          className="absolute w-full text-center -left-[0.2rem]"
          style={{ top: "-2rem" }}
        >
          <div className="relative inline-block">
            {"ring the bell".split("").map((char, i) => (
              <span
                key={i}
                className="absolute  origin-bottom font-[cormorantInfant]"
                style={{
                  transform: `rotate(${
                    i * 10 - ("ring the bell".length - 1) * 5
                  }deg)`,
                  transformOrigin: `0 70px`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <img
          src="/assets/weddingBell.png"
          alt="Wedding Bell"
          width={100}
          height={100}
          className="animate-perpetual-ring"
        />
      </button>
      <style jsx global>{`
        @keyframes perpetualRing {
          0%,
          100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        .animate-perpetual-ring {
          animation: perpetualRing 0.5s ease-in-out infinite;
          transform-origin: top center;
        }

        /* Additional shake animation for when the bell is actively ringing */
        @keyframes bell-shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-3px) rotate(-7deg);
          }
          75% {
            transform: translateX(3px) rotate(7deg);
          }
        }

        .animate-perpetual-ring.ringing {
          animation: bell-shake 0.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WeddingBell;
