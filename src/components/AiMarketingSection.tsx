import React from 'react';
import { Sparkles, Code, Database, Bot, Zap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TOOL_STACK } from '../data/portfolioData';

export const AiMarketingSection: React.FC = () => {
  return (
    <section id="ai-marketing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Modern Marketing Technology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            AI, Python &amp; Data for <span className="grad-text">Performance Marketers</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            AI is not a substitute for fundamental marketing strategy — it is a high-speed accelerator for campaign research, data cleanup, and automated ad analysis.
          </p>
        </div>

        {/* 3 AI Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4 hover:border-violet-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              AI-Powered Audience Research
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Synthesizing thousands of Reddit reviews, customer support logs, and competitor ad libraries to uncover subconscious buying triggers and emotional hooks.
            </p>
            <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Structured Prompt Frameworks
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4 hover:border-blue-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Python for Marketing Analytics
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Automating UTM audit scripts, finding 404 broken landing page links in Google Ads, and batching large audience cohorts directly through API scripts.
            </p>
            <div className="pt-2 text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Pandas &amp; Google Ads API
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              SQL &amp; BigQuery for GA4
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Querying raw GA4 un-sampled event streams in BigQuery to build custom retention curves, LTV cohort calculations, and multi-touch pathing.
            </p>
            <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Unsampled GA4 Export Mastery
            </div>
          </div>

        </div>

        {/* Complete Tool Stack Matrix */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                Supported Marketing &amp; Telemetry Stack
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Every platform taught in classroom labs and deployed in live consulting engagements.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-emerald-400">
              100% Industry Standard
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mt-6">
            {TOOL_STACK.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-violet-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-300 block mb-1">
                    {tool.category}
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {tool.name}
                  </div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-white/5 w-fit">
                  {tool.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
