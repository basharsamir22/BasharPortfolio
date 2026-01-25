import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* حلقات التوهج الخلفية */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-bashar-gradient blur-3xl rounded-full opacity-20"
        />
        
        {/* اختصار اسمك BSA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-7xl font-black tracking-[0.2em] italic text-white"
        >
          B<span className="text-blue-500">.</span>S<span className="text-purple-500">.</span>A
        </motion.div>
      </div>

      {/* شريط التحميل السفلي */}
      <div className="mt-8 w-48 h-[2px] bg-white/5 overflow-hidden relative">
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-bashar-gradient"
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-[8px] font-bold uppercase tracking-[0.5em] text-white"
      >
        Architecting Experience
      </motion.p>
    </motion.div>
  );
};

export default Preloader;