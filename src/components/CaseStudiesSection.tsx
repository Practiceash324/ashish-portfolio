import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ChevronRight, AlertCircle, TrendingUp, ShieldCheck, Layers } from 'lucide-react';
import { PRACTICAL_CASE_STUDIES } from '../data/portfolioData';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(PRACTICAL_CASE_STUDIES[0].id);

  const activeCase = PRACTICAL_CASE_STUDIES.find(c => c.id === selectedCaseId) || PRACTICAL_CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 bg-slate-950/60 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Briefcase className="w-3.5 h-3.5" /> Practical Problem Solving
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Applied <span className="grad-text">Campaign &amp; Tracking Case Studies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Real architectural breakdowns demonstrating how data diagnosis and structured measurement resolve costly marketing bottlenecks.
          </p>
        </div>

        {/* Case Study Switcher Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PRACTICAL_CASE_STUDIES.map((study) => {
            const isSelected = study.id === selectedCaseId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'glass-panel-elevated border-violet-500/60 ring-2 ring-violet-500/30 scale-[1.02]'
                    : 'glass-panel border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-violet-300">
                      {study.badge}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-medium">
                      Demonstration
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display line-clamp-2">
                    {study.title}
                  </h4>
                </div>
                <span className="text-xs text-violet-400 font-semibold flex items-center gap-1">
                  <span>Inspect Blueprint</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Case Study Container */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-white/15 space-y-8">
          
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold">
                  {activeCase.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  [{activeCase.tag}]
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display">
                {activeCase.title}
              </h3>
            </div>
          </div>

          {/* 2-Column Challenge & Diagnosis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" /> 1. The Challenge
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" /> 2. Data-Driven Diagnosis
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.diagnosis}
              </p>
            </div>
          </div>

          {/* Strategy & Implementation Steps */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 space-y-4">
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                3. The Strategic Architecture
              </h4>
              <p className="text-sm text-white font-medium">
                {activeCase.strategy}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                Technical Execution Highlights:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCase.implementation.map((step, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Measurement & Verified Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Measurement Verification
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.measurement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> Quantified Outcome
              </span>
              <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
                {activeCase.outcome}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
