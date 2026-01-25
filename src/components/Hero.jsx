import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react'; 
import final from '../assets/finalCvAI.pdf'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full"
      />

      <div className="relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40 mb-4 block"
        >
          Front-End Developer & AI Business Management Specialist
        </motion.span>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-bashar-gradient bg-clip-text text-transparent inline-block"
          >
            BASHAR SAMIR
          </motion.span>
          <br />
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white inline-block"
          >
            ABUTHABET
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-xl mx-auto text-gray-400 text-sm md:text-base italic opacity-80"
        >
          "Crafting high-performance interfaces where logic meets aesthetics."
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4 px-4"
        >
          {/* الرابط المباشر للملف في مجلد public */}
          <motion.a
            href={final}
            download="Bashar_Samir_CV.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] transition-all group cursor-pointer"
          >
            Download CV
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.button 
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 border border-white/10 rounded-2xl font-black text-white text-[10px] uppercase tracking-[0.2em] transition-all backdrop-blur-sm"
          >
            View Projects
            <ArrowRight size={16} />
          </motion.button>

          <motion.button 
            onClick={() => scrollToSection('contact')}
            whileHover={{ letterSpacing: "0.4em", opacity: 1 }}
            className="w-full md:w-auto mt-4 md:mt-0 px-8 py-4 text-white/50 font-black text-[10px] uppercase tracking-[0.2em] transition-all underline-offset-8 hover:underline"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 opacity-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;