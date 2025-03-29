import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Define Particle type
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();
    
    // Create particles
    const particleCount = 80;
    const particles: Particle[] = [];
    
    const colors = ["#6C63FF", "#4BDBFF", "#FF5E94"];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around screen
        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;
        
        // Draw particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.2 * (1 - distance / 150);
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  
  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
    />
  );
}
