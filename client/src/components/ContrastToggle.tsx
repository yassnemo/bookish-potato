import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";

export default function ContrastToggle() {
  const { isHighContrast, toggleContrast } = useTheme();

  return (
    <motion.button
      onClick={toggleContrast}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none transition-colors ml-2"
      whileTap={{ scale: 0.9 }}
      aria-label={isHighContrast ? "Switch to normal contrast" : "Switch to high contrast mode"}
      title={isHighContrast ? "Normal contrast" : "High contrast"}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <EyeIcon className={`h-5 w-5 ${isHighContrast ? "text-accent" : "text-muted-foreground"}`} />
      </motion.div>
    </motion.button>
  );
}