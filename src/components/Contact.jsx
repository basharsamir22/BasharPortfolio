import React, { useState } from 'react'; // استخدمنا useState بدلاً من useRef هنا
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  // حالة تخزين بيانات الحقول
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socials = [
    { name: 'GitHub', icon: <Github size={14} />, url: 'https://github.com/basharsamir22', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <Linkedin size={14} />, url: 'https://www.linkedin.com/in/bashar-samir-abu-thabit-965943264/', color: 'hover:text-[#0077b5]' },
    { name: 'Facebook', icon: <Facebook size={14} />, url: 'https://www.facebook.com/bashar.abu.thabet', color: 'hover:text-[#1877F2]' }
  ];

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    
    // رقمك بصيغة دولية بدون أصفار أو + (مثلاً فلسطين: 970)
    const phoneNumber = "970599053547"; // <-- ضع رقمك الحقيقي هنا يا بشار
    
    // تنسيق نص الرسالة التي ستصلك على الواتساب
    const text = `*New Inquiry from Portfolio* 🚀%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Message:* ${formData.message}`;

    // فتح رابط الواتساب في نافذة جديدة
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* الجانب الأيسر: المعلومات */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-6 leading-tight">
              Ready to create <br /> 
              <span className="bg-bashar-gradient bg-clip-text text-transparent">The Future?</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-sm italic text-sm md:text-lg">
              Send me a message and it will be delivered directly to my WhatsApp.
            </p>
            
            {/* عرض الإيميل والموقع */}
            <div className="space-y-6 text-[10px] font-bold tracking-[0.2em] uppercase">
              <div className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-all">
                <Mail size={18} className="text-purple-500" />
                <span>basharsamir731@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-all">
                <MapPin size={18} className="text-blue-500" />
                <span>Palestine ➜ Gaza ➜ Rafah</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: نموذج الاتصال المربوط بالواتساب */}
          <form onSubmit={handleWhatsAppSend} className="space-y-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[10px] font-bold tracking-widest uppercase focus:border-blue-500 outline-none transition-all"
              />
              <input 
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[10px] font-bold tracking-widest uppercase focus:border-purple-500 outline-none transition-all"
              />
            </div>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project" 
              rows="4" 
              className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-[10px] font-bold tracking-widest uppercase focus:border-pink-500 outline-none transition-all resize-none"
            ></textarea>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-5 bg-bashar-gradient rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 shadow-2xl"
            >
              Chat on WhatsApp <Send size={16} />
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* الفوتر */}
      <footer className="mt-24 pt-12 pb-16 border-t border-white/5 w-full flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">© 2026 BASHAR SAMIR ABUTHABET</p>
          <span className="text-[9px] font-bold uppercase tracking-[0.6em] bg-bashar-gradient bg-clip-text text-transparent">Architecting The Web</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className={`flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-white/30 transition-all ${social.color}`}>
              {social.icon} <span>{social.name}</span>
            </a>
          ))}
        </div>
        <div className="w-12 h-[2px] bg-bashar-gradient rounded-full opacity-40" />
      </footer>
    </section>
  );
};

export default Contact;