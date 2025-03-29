import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.max(0, Math.min(1, window.scrollY / windowHeight));
      setScrollProgress(scrolled * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-40">
      <motion.div 
        className="h-full bg-gradient-to-r from-primary to-secondary"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: "tween" }}
      />
    </div>
  );
}
