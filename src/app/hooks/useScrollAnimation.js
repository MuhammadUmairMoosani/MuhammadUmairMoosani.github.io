"use client";

import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".scroll-animate-left, .scroll-animate-right, .scroll-animate-up, .scroll-animate-scale, .scroll-animate-down, .scroll-animate-rotate"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Add a small delay before adding visible class for smoother effect
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, 100);
          }
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
      }
    );

    for (const element of animatedElements) {
      observer.observe(element);
    }

    return () => {
      for (const element of animatedElements) {
        observer.unobserve(element);
      }
    };
  }, []);
};
