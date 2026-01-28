import React from 'react';
import { COMPANY_NAME, CLIENT_NAME, PRODUCT_NAME } from '../../constants';
import { Zap, Shield, CheckCircle2, Globe, Smartphone, BarChart3, Clock, CreditCard } from 'lucide-react';
import { EagleLogo } from '../UI/EagleLogo';

export const ProposalPdfTemplate: React.FC = () => {
  const today = new Date();
  const dateStr = today.toLocaleDateString('pt-BR');

  const validityDate = new Date();
  validityDate.setDate(today.getDate() + 15);
  const validityStr = validityDate.toLocaleDateString('pt-BR');

  return (
    <div id="pdf-export-template" className="w-[794px] bg-[#020617] overflow-hidden">

      {/* PÁGINA 01: CAPA PREMIUM REFINADA */}
      <div
        className="relative w-full flex flex-col p-24 bg-[#020617] overflow-hidden justify-between"
        style={{
          height: '1122px',
          margin: 0,
          boxSizing: 'border-box'
        }}
      >
        {/* Elemento de Fundo Estático */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-r-[1px] border-t-[1px] border-primary/10 -mr-20 -mt-20 rounded-full"></div>

        {/* Identidade Superior Simplificada e Alinhada */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4 -ml-4"> {/* Ajuste negativo para compensar o respiro interno do SVG da logo */}
            <EagleLogo size={54} />
            <span className="text-white font-display font-bold text-2xl tracking-tighter uppercase">
              {COMPANY_NAME}<span className="text-primary">.</span>
            </span>
          </div>
        </div>

        {/* Bloco Central - Alinhamento Perfeito com a Identidade Superior */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="mb-24 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-primary"></div>
              <span className="text-primary font-mono text-sm font-bold tracking-[0.6em] uppercase">
                Documento Estratégico
              </span>
            </div>

            <h1 className="text-white font-display text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
              PROPOSTA<br />
              <span className="text-primary">COMERCIAL</span>
            </h1>

            <div className="h-1 w-24 bg-white/10 mt-8"></div>
          </div>

          <div className="space-y-6">
            <span className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em] block">Parceiro Estratégico:</span>
            <h2 className="text-white font-display text-[90px] font-bold tracking-tighter uppercase leading-none">
              {CLIENT_NAME}
            </h2>
            <div className="flex items-center gap-4 text-slate-400 font-display text-2xl tracking-tight">
              <span>Feira das Indústrias Indaiatuba</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* Rodapé - Metadados e Segurança */}
        <div className="relative z-10 pt-16 border-t border-slate-900 flex justify-between items-end">
          <div className="grid grid-cols-2 gap-24">
            <div className="space-y-2">
              <span className="text-slate-600 font-mono text-[10px] uppercase tracking-widest block">Data de Emissão</span>
              <p className="text-white font-bold text-xl">{dateStr}</p>
            </div>
            <div className="space-y-2">
              <span className="text-primary font-mono text-[10px] uppercase tracking-widest block font-bold">Data de Validade</span>
              <p className="text-white font-bold text-xl">{validityStr}</p>
            </div>
          </div>

          <div className="text-right space-y-3">
            <div className="inline-flex items-center justify-end gap-3 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
              <Shield size={14} className="text-primary" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Confidencial // Nível 01</span>
            </div>
            <p className="text-slate-600 font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
              Ref: EAGLE-BI-2026-{CLIENT_NAME}
            </p>
          </div>
        </div>
      </div>

      {/* PÁGINA 02: CONTEÚDO ORIGINAL */}
      <div
        className="bg-[#020617] text-white p-10 w-[794px] overflow-hidden font-sans relative flex flex-col"
        style={{
          height: '1122px',
          boxSizing: 'border-box',
          margin: 0,
          pageBreakAfter: 'avoid'
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full flex-1">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-slate-800 pb-8 mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary rounded-2xl shadow-xl shadow-primary/20">
                <Zap className="text-white w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold tracking-tighter uppercase leading-none">
                  {COMPANY_NAME}<span className="text-primary">.</span>
                </h1>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] mt-2">Soluções Tecnológicas de Alta Performance</p>
              </div>
            </div>
            <div className="text-right font-mono">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">PROPOSTA: #2026-V1</p>
              <p className="text-sm font-bold text-white mt-1">{dateStr}</p>
            </div>
          </div>

          <div className="mb-10 text-center">
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.5em] mb-2 block">Apresentando o Produto</span>
            <h2 className="text-5xl font-display font-bold tracking-tighter text-white">ECOSSISTEMA <span className="text-glow">{PRODUCT_NAME}</span></h2>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5">
              <span className="text-[9px] font-mono text-primary uppercase tracking-widest block mb-2">Responsável Técnico</span>
              <h3 className="text-sm font-bold text-white uppercase">{COMPANY_NAME}</h3>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Marketing & Digital House</p>
            </div>
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5">
              <span className="text-[9px] font-mono text-primary uppercase tracking-widest block mb-2">Destinatário</span>
              <h3 className="text-sm font-bold text-white uppercase">{CLIENT_NAME}</h3>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Feira das Indústrias Indaiatuba 2026</p>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] shrink-0">Escopo de Entrega</h3>
              <div className="h-px flex-1 bg-slate-800"></div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-5 p-5 bg-slate-900/20 border border-slate-800/50 rounded-2xl">
                <Globe className="text-primary shrink-0" size={20} />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase mb-1">Engenharia Web Next.js 15</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">Desenvolvimento de plataforma institucional com foco em SEO Industrial e conversão de expositores.</p>
                </div>
              </div>
              <div className="flex gap-5 p-5 bg-slate-900/20 border border-slate-800/50 rounded-2xl">
                <Smartphone className="text-primary shrink-0" size={20} />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase mb-1">Mobile Experience (iOS/Android)</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">Aplicativo nativo para visitantes com mapa interativo de stands e notificações estratégicas em tempo real.</p>
                </div>
              </div>
              <div className="flex gap-5 p-5 bg-slate-900/20 border border-slate-800/50 rounded-2xl">
                <BarChart3 className="text-primary shrink-0" size={20} />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase mb-1">Dashboard de Gestão {PRODUCT_NAME}</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">Painel administrativo centralizado para controle de vendas de stands e métricas de tráfego do evento.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] shrink-0">Opções de Investimento</h3>
              <div className="h-px flex-1 bg-slate-800"></div>
            </div>

            <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/50">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/80 border-b border-slate-800">
                    <th className="p-5 text-[9px] font-mono text-slate-500 uppercase tracking-widest">Plano / Configuração</th>
                    <th className="p-5 text-[9px] font-mono text-slate-500 uppercase tracking-widest text-right">Investimento (BRL)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-900">
                    <td className="p-5">
                      <div className="text-sm font-bold text-slate-300 uppercase">01. DIGITAL BRANDING (ESSENCIAL)</div>
                      <div className="text-[9px] text-slate-500 font-mono mt-1">Identidade Visual + Website Institucional + Hospedagem</div>
                    </td>
                    <td className="p-5 text-right font-display text-xl font-bold text-slate-300 tracking-tighter">R$ 21.000,00</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="p-5">
                      <div className="text-sm font-bold text-primary uppercase">02. ECOSSISTEMA {PRODUCT_NAME} (COMPLETO)</div>
                      <div className="text-[9px] text-primary/60 font-mono mt-1">Digital Branding + App Nativo + Gestão de Stands + Dashboard</div>
                    </td>
                    <td className="p-5 text-right font-display text-2xl font-bold text-primary tracking-tighter">R$ 35.000,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-[9px] text-slate-600 uppercase font-mono mt-4 tracking-widest">Nota: Os planos não são cumulativos. Valores para licenciamento do ecossistema.</p>
          </div>

          <div className="mt-auto pt-10 border-t border-slate-800 grid grid-cols-2 gap-10 items-end">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-[9px] font-bold tracking-widest">
                <Shield size={12} />
                GARANTIA DE PERFORMANCE EAGLE
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-[8px] text-slate-500 uppercase leading-tight font-mono">
                  <Clock size={10} className="text-slate-700 mt-0.5" />
                  Validade: 15 dias
                </div>
                <div className="flex items-start gap-2 text-[8px] text-slate-500 uppercase leading-tight font-mono">
                  <CreditCard size={10} className="text-slate-700 mt-0.5" />
                  Aporte: 50/50
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="w-48 h-px bg-slate-800 mb-2 ml-auto"></div>
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Autorização Digital</p>
              <div className="flex items-center justify-end gap-1">
                <CheckCircle2 size={10} className="text-primary" />
                <span className="text-[8px] font-mono text-slate-700 uppercase">EAGLE-AMPEI-2026-SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};