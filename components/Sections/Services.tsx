import React from 'react';
import { Target, Smartphone, Camera, Mail } from 'lucide-react';
import { SERVICES } from '../../constants';
import { SectionId } from '../../types';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />
};

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-dark-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-dark-950 to-dark-950 opacity-80 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 border-b border-slate-800 pb-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight UPPERCASE">
              ARSENAL <span className="text-primary">ESTRATÉGICO</span>
            </h2>
            <p className="text-slate-400">
              Tecnologia e criatividade alinhadas para performance máxima.
            </p>
          </div>
          <div className="text-center md:text-right hidden md:block">
             <div className="text-xs font-mono text-slate-500">SYSTEM MODULES</div>
             <div className="text-xl font-display font-bold text-white">04 ACTIVE</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group relative p-8 bg-slate-900/30 border border-slate-800 backdrop-blur-sm rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 text-left"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300">
                    {iconMap[service.icon]}
                </div>
                
                <h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-wide">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-3 group-hover:border-primary/20 transition-colors">
                    {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};