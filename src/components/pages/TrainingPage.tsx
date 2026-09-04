import React from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Compass, 
  Mail,
  Target
} from 'lucide-react';
import { MARKETING_FRAMEWORK_STEPS, BUSINESS_SERVICES } from '../../data/portfolioData';
import { NavPage, UserJourney } from '../../types';

interface TrainingPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Compass className="w-3.5 h-3.5" /> Performance Methodologies &amp; Systems
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The Performance <span className="grad-text">Operating Framework</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            How we engineer profitable customer acquisition from baseline unit economics and dynamic creative testing to server-side telemetry.
          </p>
        </div>

        {/* 8-Stage Framework Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MARKETING_FRAMEWORK_STEPS.map((step) => (
            <div
              key={step.id}
              className="p-6 rounded-3xl bg-[#10101C] border border-white/10 flex flex-col justify-between space-y-4 hover:border-violet-500/40 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300">
                    Stage 0{step.id}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{step.category}</span>
                </div>

                <h3 className="text-base font-bold text-white font-display group-hover:text-violet-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-400">Deliverable:</span>
                <div className="text-xs font-semibold text-emerald-400">{step.deliverable}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Consultation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#141424] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-display">Need this framework applied to your ad accounts?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Let's audit your dataLayer triggers, creative fatigue, and Google/Meta ad spend.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenContact('work', 'Framework Implementation Inquiry')}
              className="px-6 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all shadow-lg shadow-violet-600/30 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>Book Growth Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
