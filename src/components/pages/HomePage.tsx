import React from 'react';
import { HeroSection } from '../HeroSection';
import { TrustStrip } from '../TrustStrip';
import { WhoIHelpSection } from '../WhoIHelpSection';
import { MarketingFramework } from '../MarketingFramework';
import { TrackingArchitectureSimulator } from '../TrackingArchitectureSimulator';
import { UtmBuilderTool } from '../UtmBuilderTool';
import { TestimonialsSection } from '../TestimonialsSection';
import { FaqSection } from '../FaqSection';
import { 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles, 
  ShieldCheck,
  Compass,
  FileText,
  Mail,
  Award
} from 'lucide-react';
import { 
  PRACTICAL_CASE_STUDIES, 
  INSIGHT_ARTICLES,
  BUSINESS_SERVICES
} from '../../data/portfolioData';
import { NavPage, UserJourney } from '../../types';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="space-y-0 text-slate-100">
      {/* 1. Hero Section */}
      <HeroSection onNavigate={onNavigate} onOpenContact={onOpenContact} />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Who I Help (4 Audience Paths) */}
      <WhoIHelpSection onNavigate={onNavigate} onOpenContact={onOpenContact} />

      {/* 4. The 8-Stage Marketing & Measurement Framework */}
      <MarketingFramework />

      {/* 5. Interactive Telemetry / Tracking Simulator */}
      <TrackingArchitectureSimulator />

      {/* 6. Client Case Studies Highlight */}
      <section className="py-20 bg-[#0B0B14] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Proven Track Record
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Client <span className="grad-text">Case Studies</span>
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Real results across e-commerce scaling, search intent capture, and server-side telemetry.
              </p>
            </div>
            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>View all case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {PRACTICAL_CASE_STUDIES.slice(0, 2).map((study) => (
              <div 
                key={study.id}
                className="bg-[#10101C] rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-violet-500/40 transition-all shadow-xl space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                      {study.badge}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {study.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-violet-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {study.challenge}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-center">
                    {study.metrics?.map((m, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-black/50 border border-white/5">
                        <div className="text-base font-bold text-violet-400 font-display">{m.value}</div>
                        <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('work')}
                    className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-violet-600 border border-white/10 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Client Services Overview */}
      <section className="py-20 bg-[#0E0E1A] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
              <TrendingUp className="w-3.5 h-3.5" /> Growth Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Paid Media &amp; <span className="grad-text">Attribution Services</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              High-impact solutions designed to scale customer acquisition, lower blended CAC, and recover lost attribution data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {BUSINESS_SERVICES.slice(0, 3).map((service) => (
              <div 
                key={service.id}
                className="bg-[#10101C] rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all shadow-xl space-y-6"
              >
                <div className="space-y-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300">
                    {service.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.subtitle}
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] uppercase font-semibold text-slate-400">Key Deliverables:</span>
                    <div className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('services')}
                  className="w-full py-3 px-4 rounded-2xl text-xs font-semibold bg-slate-900 hover:bg-violet-600 border border-white/10 hover:border-violet-500 text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Working UTM Tool Utility */}
      <UtmBuilderTool />

      {/* 9. Featured Insights */}
      <section className="py-20 bg-[#0B0B14] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/25 text-blue-300 mb-2">
                <FileText className="w-3.5 h-3.5" /> Strategic Knowledge
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Frameworks &amp; <span className="grad-text">Marketing Teardowns</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('insights')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>View all insights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {INSIGHT_ARTICLES.slice(0, 3).map((article) => (
              <div 
                key={article.id}
                className="bg-[#10101C] rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-violet-500/40 transition-all space-y-4 cursor-pointer"
                onClick={() => onNavigate('insights')}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-lg bg-white/5 font-mono text-[10px] text-violet-300">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-display hover:text-violet-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-violet-400 font-semibold">
                  <span>Read Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Testimonials (with Review Submission feature) & FAQs */}
      <TestimonialsSection />
      <FaqSection onOpenContact={(topic) => onOpenContact('work', topic)} />

      {/* 11. Final Conversion Trigger */}
      <section className="py-24 bg-gradient-to-b from-[#0B0B14] to-[#121024] border-t border-white/10 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-violet-600/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" /> Scale With Confidence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Stop Guessing. Build Profitable Campaigns <br />
            <span className="grad-text">Backed by Resilient Measurement.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to fix attribution blind spots, eliminate ghost conversions, or scale your Meta &amp; Google Ads spend profitably?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact('work', 'Paid Media Scaling Project')}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-xl shadow-violet-900/40 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Work With Ashish</span>
            </button>
            <button
              onClick={() => onNavigate('tracking')}
              className="px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Explore Server-Side sGTM</span>
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-4 rounded-2xl bg-transparent hover:bg-white/5 text-violet-300 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer underline-offset-4 hover:underline"
            >
              <TrendingUp className="w-4 h-4 text-violet-400" />
              <span>View Service Packages</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
