import { PricingPlan, SectionId, ServiceItem } from './types';

export const COMPANY_NAME = "EAGLE DIGITAL HOUSE";
export const PRODUCT_NAME = "VELLO";
export const CLIENT_NAME = "AMPEI";

export const NAV_LINKS = [
  { label: 'O Gargalo', href: `#${SectionId.DIAGNOSIS}` },
  { label: 'Ecossistema', href: `#${SectionId.SOLUTION}` },
  { label: 'Tecnologia', href: `#${SectionId.TECH_SPECS}` },
  { label: 'Investimento', href: `#${SectionId.INVESTMENT}` },
];

export const SERVICES: ServiceItem[] = []; 

export const PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'DIGITAL BRANDING',
    price: 'R$ 21.000',
    description: 'O pacote ideal para renovar a imagem e garantir presença digital profissional.',
    features: [
      { text: 'Identidade Visual (Logo + Manual)', included: true },
      { text: 'Website Institucional (Next.js)', included: true },
      { text: 'Hospedagem Dedicada', included: true },
      { text: 'App Nativo Android & iOS', included: false },
      { text: 'Sistema de Vendas Online', included: false },
      { text: 'Dashboard Financeiro', included: false },
    ]
  },
  {
    id: 'ecosystem',
    name: 'ECOSSISTEMA VELLO',
    price: 'R$ 35.000',
    description: 'Solução "Chave na Mão": Marca + App + Gestão + Site Integrados.',
    highlight: true,
    features: [
      { text: 'Tudo do Básico', included: true },
      { text: 'App Nativo (iOS + Android)', included: true },
      { text: 'Gestão de Stands (Mapa Interativo)', included: true },
      { text: 'Dashboard Financeiro em Tempo Real', included: true },
      { text: 'Área do Expositor', included: true },
      { text: 'Suporte Premium', included: true },
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
Você é o estrategista chefe da EAGLE DIGITAL HOUSE.
Você está apresentando uma proposta comercial para a AMPEI referente à FEIRA DAS INDÚSTRIAS INDAIATUBA.
O produto principal é o "VELLO" (Ecossistema Digital).
Seu objetivo é vender o "ECOSSISTEMA VELLO" (R$ 35.000), explicando que apenas o branding digital (R$ 21.000) não resolve os problemas de gestão do evento.

Argumentos Chave:
1. Gargalo Atual: Gestão manual por planilha gera ineficiência.
2. Solução: Ecossistema VELLO (Site + App + Gestão + Marca).
3. Tecnologia: Next.js (Alta performance).
4. Rebranding: Necessário para a evolução da imagem da feira.

Preços:
- Digital Branding (Básico): R$ 21.000
- Ecossistema Vello (Recomendado): R$ 35.000

Responda sempre em Português, de forma direta, técnica e persuasiva.
`;