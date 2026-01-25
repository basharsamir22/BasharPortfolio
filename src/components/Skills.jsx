import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="text-blue-400" />,
    items: ["JS","React 19", "Next.js", "Tailwind CSS v4", "Framer Motion", "TypeScript"]
  },
  {
    category: "State & Logic",
    icon: <Code2 className="text-purple-400" />,
    items: ["Redux Toolkit", "Context API", "Zustand", "React Query"]
  },
  {
    category: "Dev Tools",
    icon: <Wrench className="text-orange-400" />,
    items: ["Git/GitHub", "Vite", "Cursor", "netlify"]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    // أضفنا min-h-screen و flex-col و justify-center للتوسيط العمودي
    <section id="skills" className="py-24 px-6 min-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16 text-center w-full"
      >
        <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4">Tech Stack</h2>
        <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase max-w-md opacity-60">
          The specialized tools I use to transform concepts into engineering reality.
        </p>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] bg-bashar-gradient mt-6"
        />
      </motion.div>

      {/* أضفنا justify-items-center و w-full لتوسيط الشبكة نفسها */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center max-w-5xl"
      >
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
            className="group p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all duration-300 relative overflow-hidden w-full max-w-[350px]"
          >
            <div className="absolute inset-0 bg-bashar-gradient opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />

            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:rotate-[10deg] transition-transform duration-500">
              {skill.icon}
            </div>
            
            <h3 className="text-xl font-black mb-6 text-white/90 tracking-tight uppercase italic">{skill.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <motion.span 
                  key={item}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                  className="px-4 py-2 text-[9px] font-black uppercase tracking-widest bg-white/5 border border-white/5 rounded-xl transition-all cursor-default text-white/40 hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;