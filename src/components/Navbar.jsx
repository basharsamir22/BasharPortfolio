import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[999] px-4 py-4">
      <div className="max-w-7xl mx-auto relative">
        
        {/* الحاوية الأساسية للـ Navbar */}
        <motion.div 
          className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl px-5 py-3 flex justify-between items-center"
        >
          {/* اللوجو */}
          <div 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
            className="flex flex-col cursor-pointer z-[1001]"
          >
            <span className="font-black text-xl tracking-tighter leading-none bg-bashar-gradient bg-clip-text text-transparent">
              B.S.A
            </span>
            <span className="text-[6px] font-bold uppercase tracking-[0.3em] opacity-40 mt-1">
              Portfolio 2026
            </span>
          </div>

          {/* روابط Desktop */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-all">
                {link.name}
              </a>
            ))}
          </div>

          {/* أزرار التواصل (LinkedIn & Github) */}
          <div className="flex gap-4 items-center z-[1001]">
            <div className="hidden sm:flex gap-4">
              {/* زر GitHub */}
              <a href="https://github.com/basharsamir22" target="_blank" rel="noreferrer" title="GitHub">
                <Github size={18} className="opacity-50 hover:opacity-100 hover:text-white transition-all" />
              </a>
              {/* زر LinkedIn الجديد */}
              <a href="https://www.linkedin.com/in/bashar-samir-abu-thabit-965943264/" target="_blank" rel="noreferrer" title="LinkedIn">
                <Linkedin size={18} className="opacity-50 hover:opacity-100 hover:text-[#0077b5] transition-all" />
              </a>
            </div>

            {/* زر القائمة للموبايل */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* قائمة الموبايل (Responsive Menu) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[75px] left-0 w-full bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:hidden z-[1000] shadow-2xl"
            >
              <ul className="flex flex-col gap-6 text-center md:text-left">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black uppercase tracking-tighter italic block hover:text-blue-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* أيقونات التواصل في قائمة الموبايل */}
              <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-white/5">
                <a href="https://github.com/basharsamir22" target="_blank" rel="noreferrer">
                   <Github className="opacity-50 hover:opacity-100" />
                </a>
                <a href="https://www.linkedin.com/in/bashar-samir-abu-thabit-965943264/" target="_blank" rel="noreferrer">
                   <Linkedin className="opacity-50 hover:opacity-100 text-[#0077b5]" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;