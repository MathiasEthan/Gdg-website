"use client";

import { useState, useEffect } from "react";

const phrases = [
  "to discover",
  "to create",
  "to connect",
  "to inspire",
  "to innovate",
];

export default function TextTransitionSection() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at "to connect"
  
  // Responsive line heights based on viewport
  const getLineHeight = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 56; // lg
      if (window.innerWidth >= 768) return 48; // md
      if (window.innerWidth >= 640) return 42; // sm
      return 36; // mobile
    }
    return 48;
  };
  
  const [lineHeight, setLineHeight] = useState(48);
  const visibleLines = 4; // Number of visible lines (1 above, center, 2 below)
  const linesAbove = 1;
  const linesBelow = 2;

  useEffect(() => {
    const handleResize = () => setLineHeight(getLineHeight());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Create extended array for smooth infinite scrolling
  // We need extra items at start and end for the blur effect
  const extendedPhrases = [
    ...phrases.slice(-linesAbove), // Items at the beginning
    ...phrases,
    ...phrases.slice(0, linesBelow), // Items at the end
  ];

  // Calculate the translateY to center the current phrase
  // Account for the prepended items
  const translateY = -(currentIndex + linesAbove) * lineHeight + (linesAbove * lineHeight);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-start justify-center">
          {/* Static "Time" text - positioned to align with center phrase */}
          <span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mr-2 sm:mr-3"
            style={{ 
              marginTop: `${linesAbove * lineHeight}px`,
              lineHeight: `${lineHeight}px`,
            }}
          >
            Time
          </span>

          {/* Slot machine container with mask for blur edges */}
          <div 
            className="relative overflow-hidden"
            style={{ 
              height: `${lineHeight * visibleLines}px`,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            }}
          >
            {/* Sliding reel */}
            <div
              className="transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                transform: `translateY(${translateY}px)`,
              }}
            >
              {extendedPhrases.map((phrase, index) => {
                // Calculate distance from center for styling
                const actualIndex = index - linesAbove; // Account for prepended items
                const distanceFromCenter = Math.abs(actualIndex - currentIndex);
                
                // Handle wrap-around distance
                const wrappedDistance = Math.min(
                  distanceFromCenter,
                  phrases.length - distanceFromCenter
                );

                const isCenter = wrappedDistance === 0;
                const isAdjacent = wrappedDistance === 1;
                const isNear = wrappedDistance === 2;

                return (
                  <div
                    key={index}
                    className="flex items-center justify-start transition-all duration-700"
                    style={{
                      height: `${lineHeight}px`,
                      filter: isCenter
                        ? "blur(0px)"
                        : isAdjacent
                        ? "blur(1px)"
                        : isNear
                        ? "blur(2px)"
                        : "blur(3.5px)",
                      opacity: isCenter ? 1 : isAdjacent ? 0.6 : isNear ? 0.4 : 0.2,
                    }}
                  >
                    <span
                      className={`
                        whitespace-nowrap transition-all duration-700
                        ${isCenter 
                          ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white" 
                          : isAdjacent 
                          ? "text-xl sm:text-2xl md:text-3xl font-light text-gray-400"
                          : "text-lg sm:text-xl md:text-2xl font-light text-gray-500 italic"
                        }
                      `}
                    >
                      {phrase}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
