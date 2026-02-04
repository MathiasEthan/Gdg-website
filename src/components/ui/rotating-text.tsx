"use client";

import { useState, useEffect, forwardRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  texts: string[];
  className?: string;
  rotationInterval?: number;
  transition?: {
    type?: string;
    stiffness?: number;
    damping?: number;
    duration?: number;
  };
  initial?: { y: string | number; opacity: number };
  animate?: { y: number; opacity: number };
  exit?: { y: string | number; opacity: number };
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  auto?: boolean;
  loop?: boolean;
}

const RotatingText = forwardRef<HTMLSpanElement, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: "spring", stiffness: 200, damping: 25 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-100%", opacity: 0 },
      rotationInterval = 2500,
      staggerDuration = 0.025,
      staggerFrom = "first",
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      auto = true,
      loop = true,
      ...props
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const splitIntoCharacters = (text: string): string[] => {
      return Array.from(text);
    };

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex];
      if (splitBy === "characters") {
        return splitIntoCharacters(currentText);
      } else if (splitBy === "words") {
        return currentText.split(" ");
      } else if (splitBy === "lines") {
        return currentText.split("\n");
      } else if (typeof splitBy === "string") {
        return currentText.split(splitBy);
      }
      return splitIntoCharacters(currentText);
    }, [currentTextIndex, texts, splitBy]);

    const getStaggerDelay = useCallback(
      (index: number, total: number): number => {
        if (staggerFrom === "first") {
          return index * staggerDuration;
        } else if (staggerFrom === "last") {
          return (total - 1 - index) * staggerDuration;
        } else if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        } else if (typeof staggerFrom === "number") {
          return Math.abs(staggerFrom - index) * staggerDuration;
        }
        return index * staggerDuration;
      },
      [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex);
        if (onNext) onNext(newIndex);
      },
      [onNext]
    );

    useEffect(() => {
      if (!auto) return;
      const interval = setInterval(() => {
        handleIndexChange(
          loop
            ? (currentTextIndex + 1) % texts.length
            : Math.min(currentTextIndex + 1, texts.length - 1)
        );
      }, rotationInterval);
      return () => clearInterval(interval);
    }, [auto, rotationInterval, currentTextIndex, texts.length, handleIndexChange, loop]);

    return (
      <span className={cn("inline-flex overflow-hidden", mainClassName)} ref={ref} {...props}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTextIndex}
            className={cn("inline-flex", splitLevelClassName)}
          >
            {elements.map((element, index) => (
              <motion.span
                key={`${currentTextIndex}-${index}`}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: getStaggerDelay(index, elements.length),
                }}
                className={cn("inline-block", elementLevelClassName)}
              >
                {element === " " ? "\u00A0" : element}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>
    );
  }
);

RotatingText.displayName = "RotatingText";

export default RotatingText;
