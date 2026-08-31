import React from 'react';
import { ShieldCheck, Target, Zap, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

export const WhyLearnFromMe: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Target className="w-3.5 h-3.5" /> Competitive Edge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Learn From <span className="grad-text">Ashish Mishra?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Tools change every year. Marketing principles, measurement logic, and analytical skills compound throughout your entire career.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 flex flex-col justify-between hover:border-violet-500/40 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-white font-display">Systemic Marketing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Understand user psychology, value proposition angles, and full-funnel architectures before touching an ad manager.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/5">
              ✓ Strategic Depth
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 flex flex-col justify-between hover:border-blue-500/40 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-white font-display">True Performance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Learn how paid algorithms actually bid, how creative sandbox testing works, and how to scale without spiking CAC.
              </p>
            </div>
            <div className="text-[11px] font-mono text-blue-400 pt-2 border-t border-white/5">
              ✓ Media Buying Rigor
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-white font-display">Precision Measurement</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Track every critical milestone after the click using GTM, dataLayer, GA4 events, Meta CAPI, and Enhanced Conversions.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/5">
              ✓ 100% Signal Clarity
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 flex flex-col justify-between hover:border-amber-500/40 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-white font-display">Actionable Analysis</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transform raw reporting dashboards into confident business decisions: know when to scale, pause, or iterate copy.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-400 pt-2 border-t border-white/5">
              ✓ Decision Frameworks
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
