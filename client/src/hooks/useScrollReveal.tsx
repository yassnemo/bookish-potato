import { useEffect, useRef } from "react";
import { useInView, useAnimation, AnimationControls } from "framer-motion";

export function useScrollReveal(): [React.RefObject<HTMLDivElement>, AnimationControls] {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { 
    once: true, // Changed to true to trigger once
    amount: 0.1, // Use amount instead of threshold
  });

  useEffect(() => {
    // Always start with content visible
    controls.start("visible");
  }, [controls, inView]);

  return [ref, controls];
}
