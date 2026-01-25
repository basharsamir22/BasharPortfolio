import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './utils/CustomCursor';
import About from './components/About';
import Education from './components/Education';
import Preloader from './components/Preloader'; // تأكد من استيراد اللودر

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // إخفاء اللودر بعد 2.5 ثانية أو عند اكتمال تحميل الصفحة
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-purple-500/30">
      
      {/* 1. شاشة التحميل (تظهر فقط عندما يكون loading true) */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      {/* 2. محتوى الموقع - يظهر فقط بعد انتهاء التحميل */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* الكيرسر المخصص */}
          <CustomCursor/>
          
          {/* شريط التنقل */}
          <Navbar />
          
          {/* المحتوى الرئيسي */}
          <main>
            <Hero />
            <About />
            <Projects/>
            
            <div className="py-20 text-center">
              <p className="text-2xl md:text-4xl font-serif italic text-white/20 px-10">
                "Engineering is the bridge between imagination and reality."
              </p>
            </div>
            
            <Skills />
            <Education/>
            <Contact />
          </main>

          {/* لمسة جمالية: إضاءة خلفية ثابتة */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/5 blur-[120px] rounded-full"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;