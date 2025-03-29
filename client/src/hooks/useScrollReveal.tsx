import { useEffect, useRef } from "react";
import { useInView, useAnimation, AnimationControls } from "framer-motion";

export function useScrollReveal(): [React.RefObject<HTMLDivElement>, AnimationControls] {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { 
    once: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
}
