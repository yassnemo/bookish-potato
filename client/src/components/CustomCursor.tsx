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
    <motion.div
      className="fixed w-3 h-3 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
      animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
    />
  );
}
