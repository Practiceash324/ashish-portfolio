export type NavPage = 
  | 'home'
  | 'about'
  | 'training'
  | 'performance-marketing'
  | 'services'
  | 'tracking'
  | 'work'
  | 'insights'
  | 'contact'
  | 'thank-you';

export type UserJourney = 
  | 'learn'
  | 'work'
  | 'tracking'
  | 'consulting'
  | 'general';

export interface ServiceBadge {
  id: string;
  name: string;
  category: string;
  color: string;
}

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

export interface AudiencePath {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  targetAudience: string[];
  primaryCtaText: string;
  targetPage: NavPage;
  intent: UserJourney;
  badge: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Expert';
    details: string;
  }[];
}

export interface FrameworkStep {
  id: number;
  title: string;
  subtitle: string;
  category: 'Strategy' | 'Traffic' | 'Measurement' | 'Growth';
  description: string;
  keyActions: string[];
  deliverable: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Performance' | 'Ecommerce' | 'Lead Generation' | 'Tracking' | 'Strategy';
  badge: string;
  challenge: string;
  diagnosis: string;
  strategy: string;
  implementation: string[];
  measurement: string;
  outcome: string;
  tag: string;
  metrics?: { label: string; value: string }[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'Digital Marketing' | 'Performance Marketing' | 'Analytics & Measurement' | 'Advanced Tracking' | 'AI for Marketing';
  audience: string;
  duration: string;
  badge?: string;
  description: string;
  topics: string[];
  practicalDeliverable: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  feedback: string;
  avatarUrl?: string;
  isVerified: boolean;
  type: 'Client' | 'Founder' | 'Brand Director' | 'Student' | 'Corporate' | 'Professional';
  rating?: number;
  projectType?: string;
  date?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Performance Marketing' | 'Tracking & Measurement' | 'Services & Audits' | 'Working Together' | 'Consulting';
}

export interface InsightArticle {
  id: string;
  title: string;
  summary: string;
  category: 'Performance Marketing' | 'Tracking' | 'Strategy' | 'Google Ads' | 'Meta Ads' | 'AI in Marketing';
  readTime: string;
  date: string;
  featured?: boolean;
  takeaways: string[];
  contentSnippet: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  whoItIsFor: string[];
  deliverables: string[];
  ctaText: string;
  intent: UserJourney;
}
