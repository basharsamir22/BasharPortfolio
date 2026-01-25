import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: "MBA in Artificial Intelligence",
    institution: "Talal Abu-Ghazaleh Global University",
    duration: "2025 - 2026",
    status: "Present",
    glow: "shadow-blue-500/20"
  },
  {
    degree: "Computer Science",
    institution: "Islamic University of Gaza",
    duration: "2021 - 2023",
    status: "Completed",
    glow: "shadow-purple-500/20"
  },
  {
    degree: "Software and Databases",
    institution: "University College of Applied Sciences",
    duration: "2018 - 2020",
    status: "Completed",
    glow: "shadow-pink-500/20"
  }
];

const Education = () => {
  return (
    <section id="about" className="py-24 px-6 min-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto overflow-hidden">
      
      {/* العنوان المطور */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4">Academic Journey</h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="h-1 bg-bashar-gradient mx-auto mb-6" 
        />
        <p className="text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
          Professional Specialization & Growth
        </p>
      </motion.div>

      {/* حاوية الخط الزمني */}
      <div className="relative w-full max-w-6xl">
        
        {/* الخط الأفقي الواصل (يظهر في الشاشات الكبيرة فقط) */}
        <div className="absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center group relative text-center"
            >
              {/* أيقونة التخرج مع تأثير التوهج */}
              <div className="relative mb-10">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute inset-0 bg-bashar-gradient blur-2xl rounded-full opacity-20 group-hover:opacity-60 transition-opacity`}
                />
                <div className={`relative bg-black border border-white/10 w-24 h-24 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:rotate-[10deg] shadow-2xl ${item.glow}`}>
                  <GraduationCap className="text-white group-hover:scale-110 transition-transform" size={32} />
                  
                  {/* شارة "الحالي" */}
                  {item.status === "Present" && (
                    <span className="absolute -top-2 -right-2 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-black"></span>
                    </span>
                  )}
                </div>
              </div>

              {/* نصوص الدرجة العلمية */}
              <div className="px-4">
                <span className="text-[10px] font-black tracking-[0.3em] text-blue-500 mb-4 block uppercase">
                  {item.duration}
                </span>
                
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 leading-tight group-hover:bg-bashar-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {item.degree}
                </h3>
                
                <p className="text-xs text-gray-400 italic font-bold tracking-wide opacity-60 mb-6 max-w-[200px] mx-auto">
                  {item.institution}
                </p>

                <div className="w-8 h-[2px] bg-white/5 mx-auto group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
              </div>

              {/* خط الربط العمودي للموبايل */}
              {index !== educationData.length - 1 && (
                <div className="h-16 w-[1px] bg-gradient-to-b from-white/10 to-transparent md:hidden mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;