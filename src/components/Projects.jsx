import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import img1 from '../assets/1.png';

const projects = [
  { 
    id: 1, 
    title: "Dual-Path Productivity OS", 
    desc: "A sophisticated productivity ecosystem for deep work.", 
    tech: ["React 19", "Tailwind v4"], 
    size: "md:col-span-2 md:row-span-2", 
    color: "from-blue-600/40 to-purple-600/40",
    image: img1,
    github: "https://github.com/basharsamir22/TaskeManager.git", // أضف رابط الجيت هاب هنا
    demo: "https://bashar-task-manager.netlify.app/"          // أضف رابط المشروع المباشر هنا
  },
  { 
    id: 2, 
    title: "AI Strategy Dashboard", 
    desc: "Data visualization with AI-driven insights.", 
    tech: ["Next.js", "Python"], 
    size: "md:col-span-1 md:row-span-1", 
    color: "from-emerald-600/40 to-teal-600/40",
    // image: img1,
    github: "https://github.com/basharsamir22",
    demo: "https://your-demo-link.com"
  },
  { 
    id: 3, 
    title: "Portfolio Architecture", 
    desc: "Minimalist high-end engineering portfolio.", 
    tech: ["Vite", "Motion"], 
    size: "md:col-span-1 md:row-span-1", 
    color: "from-orange-600/40 to-red-600/40",
    // image: img1,
    github: "https://github.com/basharsamir22",
    demo: "https://your-demo-link.com"
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
        <div className="h-1 w-20 bg-bashar-gradient" />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ y: -10 }}
            className={`group relative rounded-[2.5rem] border border-white/5 overflow-hidden bg-black ${project.size}`}
          >
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />

            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity`} />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-black mb-2 tracking-tighter uppercase">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-6 italic line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[8px] font-bold px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* الربط الفعلي للروابط هنا */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={18} />
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