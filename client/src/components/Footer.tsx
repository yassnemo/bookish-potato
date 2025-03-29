import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaKaggle } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
              Yassine.E
            </Link>
            <p className="mt-2 text-gray-400">Data Scientist & Machine Learning Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Yassine Erradouani. All rights reserved.</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a 
              href="https://github.com/YassineEr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ y: -3 }}
            >
              <FaGithub className="text-lg" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yassine-erradouani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ y: -3 }}
            >
              <FaLinkedinIn className="text-lg" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/YassineErradouani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ y: -3 }}
            >
              <FaTwitter className="text-lg" />
            </motion.a>
            <motion.a 
              href="https://kaggle.com/yassineerradouani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              whileHover={{ y: -3 }}
            >
              <FaKaggle className="text-lg" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
