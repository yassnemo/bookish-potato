import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none transition-colors"
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <motion.div
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="h-5 w-5 text-secondary" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 45 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="h-5 w-5 text-primary" />
        </motion.div>
      )}
    </motion.button>
  );
}
