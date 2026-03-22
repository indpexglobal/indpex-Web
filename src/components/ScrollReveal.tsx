"use client";

import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const elements = document.querySelectorAll('[data-reveal]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const revealPoint = window.innerHeight * 0.85;
        if (rect.top < revealPoint) {
          el.classList.add('revealed');
        }
      });
    };

    // Initial check
    revealOnScroll();

    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return null;
};

export default ScrollReveal;
