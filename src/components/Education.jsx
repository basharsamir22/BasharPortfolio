import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const educationData = [
  {
    degree: "MBA in Artificial Intelligence Business",
    institution: "Talal Abu-Ghazaleh Global University",
    duration: "2025 - 2026",
    status: "Completed",
    desc: "Focusing on AI-driven management and strategic digital transformation."
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Islamic University of Gaza",
    duration: "2021 - 2023",
    status: "Completed",
    desc: "Specialized in Software Engineering and Algorithmic Thinking."
  },
  {
    degree: "Diploma in Software & Databases",
    institution: "University College of Applied Sciences",
    duration: "2018 - 2020",
    status: "Completed",
    desc: "Foundation of full-stack development and database architecture."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto relative">
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-black italic tracking-tighter uppercase">Academic Journey</h2>
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em] mt-4">Merging theory with technical excellence</p>
      </motion.div>

      {/* الخط المركزي للـ Timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-[70%] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent top-48 hidden md:block opacity-20" />

      <div className="space-y-12">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* الكرت التعليمي */}
            <div className="w-full md:w-[45%] group">
              <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                {/* إضاءة خلفية للكرت الأول (الماجستير) */}
                {index === 0 && (
                  <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
                )}

                <div className="relative z-10">
                  <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase mb-2 block italic">
                    {item.duration} • {item.status}
                  </span>
                  <h3 className="text-2xl font-black text-white/90 mb-2 leading-tight uppercase tracking-tighter">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-bold text-white/40 mb-4">{item.institution}</p>
                  <p className="text-xs text-gray-500 leading-relaxed italic">{item.desc}</p>
                </div>
              </div>
            </div>

            {/* الأيقونة في المنتصف */}
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-white/10 z-20 group-hover:border-blue-500 transition-colors duration-500">
               {index === 0 ? <Award size={20} className="text-blue-500" /> : <BookOpen size={20} className="text-white/20" />}
            </div>

            {/* مساحة فارغة للجانب المقابل */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;