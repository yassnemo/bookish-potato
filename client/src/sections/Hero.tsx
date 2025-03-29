import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
  
  // Wave SVG
  const waveAnimation = (
    <div className="absolute inset-0 z-0">
      <div className="wave-container">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(108, 99, 255, 0.1)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(75, 219, 255, 0.1)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 94, 148, 0.1)" />
          </g>
        </svg>
      </div>
    </div>
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
      {waveAnimation}

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
          className="h-8 overflow-hidden my-4"
          variants={itemVariants}
        >
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
            {roles.map((role, index) => (
              <div 
                key={role}
                className="transition-all duration-500 transform"
                style={{ 
                  opacity: currentRoleIndex === index ? 1 : 0,
                  transform: `translateY(${(index - currentRoleIndex) * 32}px)`,
                  position: index === 0 ? 'relative' : 'absolute',
                  width: '100%'
                }}
              >
                {role}
              </div>
            ))}
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
