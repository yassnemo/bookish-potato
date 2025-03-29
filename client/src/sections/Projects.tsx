import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [ref, controls] = useScrollReveal();
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="section-heading">
          <h2>My Projects</h2>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card group"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        techIndex % 3 === 0 ? "bg-primary/10 text-primary" : 
                        techIndex % 3 === 1 ? "bg-secondary/10 text-secondary" : 
                        "bg-accent/10 text-accent"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white text-center mb-4">{project.longDescription}</p>
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.demoLink} 
                    className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-opacity-90 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                  <motion.a 
                    href={project.githubLink} 
                    className="px-4 py-2 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="https://github.com/YassineEr" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-card shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub className="text-xl" />
            <span>See More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
