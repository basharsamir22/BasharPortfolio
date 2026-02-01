import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';

const projects = [
  { 
    id: 1, 
    title: "Dual-Path Productivity OS", 
    desc: "A sophisticated productivity ecosystem for deep work and strategic task management.", 
    tech: ["React 19", "Tailwind v4","Framer Motion"], 
    size: "md:col-span-2 md:row-span-1", // يأخذ مساحة الثلثين
    color: "from-blue-600/40 to-purple-600/40",
    image: img1,
    github: "https://github.com/basharsamir22/TaskeManager.git",
    demo: "https://book-reviewer-platform.netlify.app/" 
  },
  { 
    id: 2, 
    title: "BookHive Platform", 
    desc: "Advanced book review ecosystem with strategic UX, featuring React 19 and Tailwind 4 integration.", 
    tech: ["React 19", "Tailwind 4", "Framer Motion"], 
    size: "md:col-span-1 md:row-span-1", // يأخذ مساحة الثلث المتبقي ليكمل الصف
    color: "from-indigo-600/40 to-purple-600/40",
    image: img2,
    github: "https://github.com/basharsamir22/BookReview",
    demo: "https://book-reviewe-platform.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-2">Selected Works</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600" />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8" 
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ y: -10 }}
            className={`group relative rounded-[2.5rem] border border-white/5 overflow-hidden bg-black min-h-[400px] ${project.size}`}
          >
            {/* Image Layer */}
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-black/80 to-transparent opacity-90 transition-opacity`} />

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-black mb-2 tracking-tighter uppercase leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-300 mb-6 italic line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full uppercase tracking-widest text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-blue-400 transition-all border border-white/10"
                      title="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-purple-400 transition-all border border-white/10"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;