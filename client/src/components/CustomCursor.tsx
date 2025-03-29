import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 border-2 border-primary mix-blend-difference"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      />
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      />
    </>
  );
}
