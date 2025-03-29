import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedinIn, FaTwitter, FaKaggle, FaCalendarAlt } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { contactInfo } from "@/data/portfolio";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [ref, controls] = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I'll get back to you soon.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="section-heading">
          <h2>Get In Touch</h2>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: -30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none" 
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/40 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-heading font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-700 dark:text-gray-300 hover:text-primary transition">
                      {contactInfo.email}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">{contactInfo.location}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <FaGlobe className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Social Profiles</h4>
                    <div className="flex space-x-3 mt-2">
                      <motion.a 
                        href={contactInfo.social.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a 
                        href={contactInfo.social.linkedin} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaLinkedinIn />
                      </motion.a>
                      <motion.a 
                        href={contactInfo.social.twitter} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaTwitter />
                      </motion.a>
                      <motion.a 
                        href={contactInfo.social.kaggle} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaKaggle />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-lg font-medium mb-4">Let's Connect</h4>
                <motion.a 
                  href={contactInfo.calendly} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 text-primary hover:from-primary/20 hover:to-secondary/20 transition"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCalendarAlt />
                  <span>Schedule a meeting</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
