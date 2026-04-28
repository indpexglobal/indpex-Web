"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number; // in milliseconds
}

export default function AnimatedNumber({ value, duration = 2000 }: AnimatedNumberProps) {
  // Extract number from string, e.g. "50+" -> 50, "1995" -> 1995
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect after first trigger if you only want it to animate once
          // observer.disconnect();
        } else {
          // Reset if you want it to animate every time it comes into view
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isNaN(numericValue)) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * numericValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, numericValue, duration]);

  if (isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}
