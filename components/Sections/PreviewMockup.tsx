import React from 'react';
import { SectionId } from '../../types';
import { MousePointer2, ExternalLink } from 'lucide-react';

export const PreviewMockup: React.FC = () => {
  return (
    <section id={SectionId.PREVIEW} className="py-16 bg-dark-950 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center md:items-center font-mono justify-center md:justify-start text-center md:text-left">
          <span className="text-primary text-sm font-bold tracking-tighter">04.1 // 08</span>
          <div className="h-px w-12 md:flex-1 bg-slate-800"></div>
          <span className="text-slate-500 text-[10px] tracking-widest uppercase">Visual Preview</span>
        </div>

        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
            PROPOSTA DE <span className="text-primary">INTERFACE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            Uma imersão visual no futuro portal da FEIND, respeitando a sobriedade industrial com tecnologia de ponta.
          </p>
        </div>

        {/* Laptop Mockup Container */}
        <div className="relative max-w-5xl mx-auto w-full px-2 md:px-0">
          {/* Bezel / Screen */}
          <div className="relative rounded-t-xl md:rounded-t-[2rem] border-4 md:border-[12px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden aspect-video group">
            <div className="absolute inset-0 bg-[#000d1a]">
              {/* INTERFACE DO CLIENTE (FEIND) */}
              <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-hide font-sans">
                {/* Site Header FEIND */}
                <header className="sticky top-0 w-full bg-[#001529]/80 backdrop-blur-md border-b border-cyan-500/20 px-2 md:px-8 py-2 md:py-4 flex justify-between items-center z-50">
                  <div className="flex items-center gap-1.5 md:gap-3">
                    <div className="w-4 h-4 md:w-9 md:h-9 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded flex items-center justify-center font-bold text-white text-[6px] md:text-lg">F</div>
                    <div className="flex flex-col leading-none">
                      <span className="font-bold text-white text-[6px] md:text-sm tracking-tight">FEIND</span>
                      <span className="text-[4px] md:text-[7px] text-cyan-400 font-bold tracking-widest block">INDÚSTRIA 4.0</span>
                    </div>
                  </div>
                  {/* Navigation restored for mobile visual fidelity with VERY small text to fit */}
                  <nav className="flex gap-2 md:gap-8">
                    {['EXPOSITORES', 'PROGRAMAÇÃO', 'LOCALIZAÇÃO', 'CONTATO'].map(item => (
                      <span key={item} className="text-[4px] md:text-[8px] font-bold text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors tracking-wide">{item}</span>
                    ))}
                  </nav>
                  <button className="px-1.5 py-0.5 md:px-5 md:py-2 bg-transparent border border-cyan-500/50 text-cyan-400 text-[4px] md:text-[9px] font-bold rounded uppercase hover:bg-cyan-500/10 transition-all whitespace-nowrap">Portal do Expositor</button>
                </header>

                {/* Site Hero FEIND */}
                <main className="flex-1 flex flex-col items-center justify-center text-center p-6 md:p-12 bg-[#000d1a] relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/5 blur-[120px] rounded-full"></div>
                   
                   <div className="relative z-10 space-y-2 md:space-y-8">
                      <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[6px] md:text-[8px] font-bold tracking-[0.2em] rounded">EDIÇÃO 2026</div>
                      
                      <h1 className="text-2xl md:text-6xl font-black text-white leading-none tracking-tight uppercase">
                        FEIRA DAS INDÚSTRIAS<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">DE INDAIATUBA</span>
                      </h1>
                      
                      <p className="text-slate-300 text-[6px] md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
                        O maior encontro das indústrias da <span className="text-cyan-400">Região Metropolitana de Campinas</span>. Conectando inovação, negócios e tecnologia.
                      </p>
                   </div>
                </main>
              </div>
            </div>

            {/* Interactive Cursor Simulation - Visible on mobile for visual fidelity */}
            <div className="absolute top-1/2 left-1/2 pointer-events-none group-hover:translate-x-32 group-hover:-translate-y-16 transition-transform duration-1000 block">
               <MousePointer2 className="text-white fill-cyan-500 w-3 h-3 md:w-6 md:h-6 shadow-2xl" />
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative h-2 md:h-4 w-full md:w-[110%] md:-left-[5%] bg-slate-700 rounded-b-xl md:rounded-b-2xl shadow-xl border-t border-slate-600 mt-[-1px]"></div>
          <div className="relative h-1 md:h-2 w-[30%] md:w-[20%] mx-auto bg-slate-800 rounded-b-lg"></div>
        </div>

        {/* Decorative Specs */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Identity', value: 'Industrial Tech' },
            { label: 'UX Strategy', value: 'B2B Optimized' },
            { label: 'Visual Engine', value: 'Tailwind + Blue/Green' },
            { label: 'Componentry', value: 'Modular System' }
          ].map((spec, i) => (
            <div key={i} className="text-center border-t border-slate-800 pt-4">
              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">{spec.label}</div>
              <div className="text-sm font-display font-bold text-white uppercase">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};