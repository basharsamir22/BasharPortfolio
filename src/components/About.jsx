import React from 'react';
import { User, Code, Lightbulb, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-2">About Me</h2>
        <div className="h-1 w-20 bg-bashar-gradient"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bio Card - Large */}
        <div className="md:col-span-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-bashar-gradient rounded-2xl">
                <User size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Front-End Engineering</h3>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed italic mb-6">
              I am <span className="text-white font-bold">Bashar Samir AbuThabet</span>, a Software Engineer specialized in Frontend Development. 
              I don't just write code; I architect digital experiences that bridge the gap between rigorous engineering and visual storytelling.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              I strive to build systems that aren't just "functional" but "inspirational." My focus is on high-performance metrics, 
              seamless user experiences, and maintainable, scalable clean code.
            </p>
          </div>
        </div>

        {/* Education Card - Small */}
        <div className="md:col-span-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-center">
          <GraduationCap size={40} className="mb-6 text-purple-400" />
          <h4 className="text-xl font-bold mb-2">Software Engineering</h4>
          <p className="text-sm text-gray-400 italic leading-loose">
            Deeply focused on Software Architecture and Modern Web Technologies.
          </p>
        </div>

        {/* Principles Card */}
        <div className="md:col-span-4 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 hover:bg-white/[0.04] transition-all">
          <Code size={30} className="mb-4 text-blue-400" />
          <h4 className="font-bold mb-2 uppercase tracking-widest text-xs">Clean Code</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed">Writing clean code is a long-term investment in software quality and agility.</p>
        </div>

        {/* Quote Card */}
        <div className="md:col-span-8 bg-bashar-gradient rounded-[2.5rem] p-[1px]">
          <div className="bg-[#030303] w-full h-full rounded-[2.5rem] p-8 flex items-center gap-8">
            <Lightbulb size={40} className="text-yellow-400 hidden md:block" />
            <p className="text-xl font-black italic tracking-tight">
              "Creativity is the result of balancing logical thinking with vast imagination."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;