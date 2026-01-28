import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SectionId } from '../../types';

const data = [
  { name: 'MÊS 01', leads: 400, vendas: 240 },
  { name: 'MÊS 02', leads: 800, vendas: 590 },
  { name: 'MÊS 03', leads: 1400, vendas: 1100 },
  { name: 'EVENTO', leads: 2200, vendas: 1800 },
];

export const Results: React.FC = () => {
  return (
    <section id={SectionId.RESULTS} className="py-24 bg-dark-900 relative overflow-hidden border-y border-slate-900">
        {/* Background Grid Accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-grid-pattern opacity-20 pointer-events-none border-l border-slate-800"></div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                    <div>
                        <div className="text-primary font-mono text-xs mb-2 tracking-widest">&gt; PROJECTION_ANALYSIS</div>
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight UPPERCASE">
                            CURVA DE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">CRESCIMENTO</span>
                        </h2>
                    </div>
                    
                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                        Benchmarks indicam aceleração exponencial no segundo estágio da campanha. Foco total em <strong className="text-white">ROAS (Return on Ad Spend)</strong>.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            "Redução de CPA (-30%)",
                            "Upsell de Áreas VIP (LTV+)",
                            "Tracking Pixel Granular"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 bg-slate-950/50 p-4 border border-slate-800 rounded-lg hover:border-primary/30 transition-colors mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
                                <div className="w-1 h-8 bg-primary/50 rounded-full shrink-0"></div>
                                <span className="font-display text-sm font-semibold text-slate-200 uppercase tracking-wide text-left">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="lg:w-1/2 w-full h-[450px] bg-dark-950 p-1 rounded-2xl border border-slate-800 shadow-2xl relative group mt-8 lg:mt-0">
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 to-transparent rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    
                    <div className="w-full h-full bg-slate-900/90 rounded-xl p-6 relative overflow-hidden backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                             <h3 className="text-white font-mono text-sm tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                LIVE DATA SIMULATION
                             </h3>
                             <div className="flex gap-4 text-[10px] text-slate-500 font-mono">
                                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-slate-700"></div> LEADS</div>
                                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-primary"></div> VENDAS</div>
                             </div>
                        </div>

                        <ResponsiveContainer width="100%" height="75%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis 
                                    dataKey="name" 
                                    stroke="#64748b" 
                                    tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} 
                                    axisLine={false}
                                    tickLine={false}
                                    dy={10}
                                />
                                <YAxis 
                                    stroke="#64748b" 
                                    tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} 
                                    axisLine={false} 
                                    tickLine={false}
                                />
                                <Tooltip 
                                    cursor={{fill: '#1e293b', opacity: 0.4}}
                                    contentStyle={{ 
                                        backgroundColor: '#020617', 
                                        borderColor: '#334155', 
                                        color: '#f1f5f9',
                                        fontFamily: 'monospace',
                                        fontSize: '12px',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                                    }}
                                    itemStyle={{ color: '#f1f5f9' }}
                                />
                                <Bar dataKey="leads" fill="#334155" radius={[2, 2, 0, 0]} barSize={40} />
                                <Bar dataKey="vendas" fill="#f97316" radius={[2, 2, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};