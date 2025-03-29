import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Data Scientist", "Machine Learning Engineer", "AI Enthusiast"];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Text rotation effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  // Gradient background effect
  const gradientBackground = (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10"></div>
  );

  // Hero container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {gradientBackground}

      <motion.div 
        className="container mx-auto px-6 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="relative inline-block"
          variants={itemVariants}
        >
          <span className="absolute -top-16 -left-16 md:-top-20 md:-left-20 text-8xl md:text-9xl opacity-10 text-primary font-bold">
            DS
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
            <span className="block md:inline">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">Yassine Erradouani</span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="h-10 overflow-hidden my-4"
          variants={itemVariants}
        >
          <div className="flex justify-center items-center">
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium text-center">
              <AnimatePresence mode="wait">
                {currentRoleIndex === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    key="data-scientist"
                  >
                    Data Scientist
                  </motion.div>
                )}
                {currentRoleIndex === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    key="ml-engineer"
                  >
                    Machine Learning Engineer
                  </motion.div>
                )}
                {currentRoleIndex === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    key="ai-enthusiast"
                  >
                    AI Enthusiast
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
          variants={itemVariants}
        >
          Transforming complex data into meaningful insights and innovative solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          variants={itemVariants}
        >
          <motion.a 
            href="#about" 
            className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-card shadow-lg cursor-pointer transition"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
