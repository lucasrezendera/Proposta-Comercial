export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum SectionId {
  HERO = 'hero',
  DIAGNOSIS = 'diagnosis',
  SOLUTION = 'solution',
  TECH_SPECS = 'tech-specs',
  PREVIEW = 'preview',
  BRANDING = 'branding',
  COMPARISON = 'comparison',
  INVESTMENT = 'investment',
  SERVICES = 'services',
  RESULTS = 'results',
}