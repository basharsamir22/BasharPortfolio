import React from 'react';
import { motion } from 'framer-motion'; // استيراد موشن
import { User, Code, Lightbulb, GraduationCap, Target, Rocket } from 'lucide-react';

const About = () => {
  // إعدادات الحركة للحاوية الكبيرة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // تأخير ظهور العناصر خلف بعضها
      },
    },
  };

  // إعدادات الحركة لكل بطاقة (Card)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* عنوان القسم مع أنميشن */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-2">About Me</h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-bashar-gradient"
        ></motion.div>
      </motion.div>

      {/* شبكة البطاقات مع أنميشن Stagger */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // يبدأ الأنميشن لما يظهر 20% من القسم
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        
        {/* Main Bio Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5 }} // تأثير بسيط عند تمرير الماوس
          className="md:col-span-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-3xl relative overflow-hidden group"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-bashar-gradient rounded-2xl"
              >
                <Rocket size={24} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold">Linking Front-End Programming and Strategy</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed font-medium mb-6">
              I am a <span className="text-white font-bold">Software Engineer</span> specializing in crafting high-performance Frontend architectures using <span className="text-blue-400">React 19</span> and Modern Web Technologies.
            </p>
            
            <p className="text-gray-400 text-sm leading-loose">
              My unique edge lies at the intersection of technical excellence and business intelligence. Currently pursuing an <span className="text-purple-400 font-bold italic">MBA in AI Business Management</span>, I architect digital solutions that aren't just visually stunning, but strategically impactful.
            </p>
          </div>
        </motion.div>

        {/* MBA Focus Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-center"
        >
          <GraduationCap size={40} className="mb-6 text-purple-400" />
          <h4 className="text-xl font-bold mb-2 text-white">MBA in AI Business</h4>
          <p className="text-sm text-gray-400 italic leading-loose">
            Focusing on how AI-driven strategies can optimize software ROI and user-centric growth.
          </p>
        </motion.div>

        {/* Principles Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-4 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 hover:bg-white/[0.04] transition-all"
        >
          <Target size={30} className="mb-4 text-blue-400" />
          <h4 className="font-bold mb-2 uppercase tracking-widest text-xs text-white">Strategic Impact</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed">Designing systems that align with business goals while maintaining top-tier code quality.</p>
        </motion.div>

        {/* Quote Card */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-8 bg-bashar-gradient rounded-[2.5rem] p-[1px]"
        >
          <div className="bg-[#030303] w-full h-full rounded-[2.5rem] p-8 flex items-center gap-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lightbulb size={40} className="text-yellow-400 shrink-0" />
            </motion.div>
            <p className="text-xl md:text-2xl font-serif italic text-white leading-snug">
              "I translate business visions into high-end technical realities."
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;