import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function About() {
  const [ref, controls] = useScrollReveal();
  
  const statsItems = [
    { number: "10+", text: "Projects" },
    { number: "3", text: "Years Experience" },
    { number: "15+", text: "Technologies" },
    { number: "5+", text: "Certifications" }
  ];
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="section-heading">
          <h2>About Me</h2>
        </div>
        
        <motion.div 
          ref={ref}
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="lg:w-2/5 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-tr from-primary to-secondary absolute -inset-1 rounded-xl blur-lg opacity-30 group-hover:opacity-100 transition"></div>
            <div className="relative bg-white dark:bg-card rounded-xl shadow-xl p-2 transform hover:scale-[1.01] transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Yassine Erradouani" 
                className="rounded-lg w-full object-cover"
              />
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <motion.a 
                href="https://github.com/YassineEr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                whileHover={{ y: -5 }}
              >
                <FaGithub className="text-xl text-gray-800 dark:text-gray-200" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yassine-erradouani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                whileHover={{ y: -5 }}
              >
                <FaLinkedinIn className="text-xl text-gray-800 dark:text-gray-200" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/YassineErradouani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                whileHover={{ y: -5 }}
              >
                <FaTwitter className="text-xl text-gray-800 dark:text-gray-200" />
              </motion.a>
            </div>
          </motion.div>
          
          <div className="lg:w-3/5">
            <motion.h3 
              className="text-2xl md:text-3xl font-heading font-semibold mb-4"
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Data Scientist & Machine Learning Engineer
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello! I'm Yassine, a passionate Data Science student with expertise in Machine Learning and Artificial Intelligence. My journey in the world of data began with a fascination for how information can be transformed into actionable insights and innovative solutions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I specialize in developing predictive models, conducting exploratory data analysis, and implementing machine learning algorithms to solve complex problems. My work spans from fraud detection systems to advanced chess game analyzers, always focusing on the intersection of data science and real-world applications.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {statsItems.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="about-stat"
                  whileHover={{ y: -5 }}
                >
                  <div className={`text-3xl font-heading font-bold ${
                    index === 0 ? "text-primary" : 
                    index === 1 ? "text-secondary" : 
                    index === 2 ? "text-accent" : "text-primary"
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.a 
              href="#contact" 
              className="btn-primary"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
