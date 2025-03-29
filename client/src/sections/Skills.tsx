import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import { skills, experiences, education, technologies } from "@/data/portfolio";
import { FaBrain, FaPython, FaDatabase, FaChartBar, FaCodeBranch, FaCloud, FaProjectDiagram, FaFire } from "react-icons/fa";

export default function Skills() {
  const [ref, controls] = useScrollReveal();
  const [githubData, setGithubData] = useState<string | null>(null);

  // GitHub contributions data fetching (mock for now, would be replaced with actual GitHub API integration)
  useEffect(() => {
    // This would be an actual API call in a real implementation
    const fetchGithubData = async () => {
      try {
        // Mock data for now
        setGithubData("GitHub contributions data would be displayed here");
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setGithubData("Failed to load GitHub contributions");
      }
    };

    fetchGithubData();
  }, []);

  // Icon mapping for technologies
  const techIcons: Record<string, JSX.Element> = {
    "Python": <FaPython className="text-2xl text-primary mb-1" />,
    "TensorFlow": <FaBrain className="text-2xl text-secondary mb-1" />,
    "PyTorch": <FaFire className="text-2xl text-accent mb-1" />,
    "SQL": <FaDatabase className="text-2xl text-primary mb-1" />,
    "Pandas": <FaChartBar className="text-2xl text-secondary mb-1" />,
    "Git": <FaCodeBranch className="text-2xl text-accent mb-1" />,
    "AWS": <FaCloud className="text-2xl text-primary mb-1" />,
    "Scikit-learn": <FaProjectDiagram className="text-2xl text-secondary mb-1" />
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="section-heading">
          <h2>Skills & Experience</h2>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          {/* Technical Skills */}
          <div className="skills-container">
            <motion.h3 
              className="text-2xl font-heading font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Technical Skills
            </motion.h3>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Technology Icons */}
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-heading font-medium mb-4">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="tech-icon"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {techIcons[tech] || <FaCodeBranch className="text-2xl text-primary mb-1" />}
                    <span className="text-xs">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Experience Timeline */}
          <div className="experience-container">
            <motion.h3 
              className="text-2xl font-heading font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Experience & Education
            </motion.h3>
            
            <div className="relative border-l-2 border-primary/30 pl-8 pb-6 space-y-8">
              {/* Experience Items */}
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="experience-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  <div className="absolute -left-3 w-6 h-6 bg-white dark:bg-gray-900 border-2 border-primary rounded-full"></div>
                  <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">{exp.period}</div>
                  <h4 className="text-xl font-heading font-semibold">{exp.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
              
              {/* Education Items */}
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="experience-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                >
                  <div className="absolute -left-3 w-6 h-6 bg-white dark:bg-gray-900 border-2 border-secondary rounded-full"></div>
                  <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">{edu.period}</div>
                  <h4 className="text-xl font-heading font-semibold">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* GitHub Contributions */}
        <motion.div 
          className="mt-16 p-6 bg-white dark:bg-card rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-heading font-semibold mb-6">GitHub Contributions</h3>
          <div className="github-contributions-chart relative h-52 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                {githubData || "Loading GitHub contributions..."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
