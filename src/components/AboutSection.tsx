import React from 'react';
import { Target, Compass, BookOpen, Layers, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950/60 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Compass className="w-3.5 h-3.5" /> Philosophy & Background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            "Don't memorize tools. <span className="grad-text">Understand systems."</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Marketing without measurement is guesswork. True performance comes from connecting customer intent, campaign economics, and full-funnel tracking.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Role */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                  AM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Ashish Mishra</h3>
                  <p className="text-xs text-violet-300 font-medium">
                    Assistant Head Trainer @ NDMIT (National Digital Marketing Institute & Training), Lucknow
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Over the past <strong>4+ years</strong>, I have mentored more than <strong>1,000+ students, career switchers, and business owners</strong>. 
                My focus has always been simple: teaching digital marketing as an interconnected discipline rather than a collection of disjointed tactics.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Core Teaching Principle
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  "Tools change every quarter — Google Ads interfaces update, privacy laws evolve, and algorithms shift. But marketing fundamentals, behavioral intent, and telemetry logic compound forever."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Customer Journey Intent Mapping',
                  'GTM & Server-Side Data Layers',
                  'ROAS & Marginal CAC Economics',
                  'Lead-to-CRM Attribution Reconciliation'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#training"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shadow-violet-600/25"
              >
                <BookOpen className="w-4 h-4" /> Explore Training Cohorts
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 transition-all"
              >
                <span>Review Case Demonstrations</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: The 4 Converging Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
              <Layers className="w-4 h-4 text-violet-400" /> The 4 Integrated Pillars:
            </div>

            <div className="space-y-3">
              {[
                {
                  title: '1. Training & Mentorship',
                  badge: 'Primary Persona',
                  color: 'border-violet-500/40 bg-violet-500/10 text-violet-300',
                  desc: 'Practical, industry-oriented training designed around live campaigns, hands-on debugging, and portfolio readiness.'
                },
                {
                  title: '2. Performance Marketing',
                  badge: 'Growth Engine',
                  color: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
                  desc: 'Strategic media buying across Google Ads (Search, PMax, YouTube) and Meta Ads with ruthless testing frameworks.'
                },
                {
                  title: '3. Analytics & GA4',
                  badge: 'Telemetry Core',
                  color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
                  desc: 'Building clean event tracking in GA4, cohort explorations, user acquisition journeys, and custom business dashboards.'
                },
                {
                  title: '4. Advanced Tracking & CAPI',
                  badge: 'Signal Security',
                  color: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
                  desc: 'Server-side GTM, Meta CAPI, Google Enhanced Conversions, and Consent Mode v2 to restore lost conversion signals.'
                }
              ].map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel rounded-xl p-4 border transition-all hover:border-white/20 hover:translate-x-1"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-white font-display">{pillar.title}</h4>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${pillar.color}`}>
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
