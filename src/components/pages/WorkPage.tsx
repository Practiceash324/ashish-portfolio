import React, { useState } from 'react';
import { 
  FolderCheck, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  ShoppingBag, 
  Briefcase, 
  Layers, 
  Sparkles,
  AlertCircle,
  FileCheck2
} from 'lucide-react';
import { PRACTICAL_CASE_STUDIES } from '../../data/portfolioData';
import { NavPage, UserJourney } from '../../types';

interface WorkPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    'All',
    'Performance',
    'Ecommerce',
    'Lead Generation',
    'Tracking',
    'Strategy'
  ];

  const filteredStudies = activeFilter === 'All'
    ? PRACTICAL_CASE_STUDIES
    : PRACTICAL_CASE_STUDIES.filter(cs => cs.category === activeFilter);

  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <FolderCheck className="w-3.5 h-3.5" /> Case Blueprints & Applied Frameworks
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            How Marketing Systems Are <span className="grad-text">Diagnosed & Built.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Detailed breakdowns of actual acquisition, funnel optimization, and telemetry challenges — illustrating exact diagnostic and execution frameworks.
          </p>

          {/* Transparent Demonstration Disclaimer */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono">
            <FileCheck2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Structured Frameworks & Applied Industry Demonstrations</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case Studies Detailed Cards */}
        <div className="space-y-10">
          {filteredStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-[#10101C] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6 hover:border-violet-500/40 transition-all shadow-xl"
            >
              {/* Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300">
                    {study.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {study.badge}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                  {study.tag}
                </span>
              </div>

              {/* Title & Metrics */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {study.title}
                </h3>

                {study.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-900/90 border border-white/5 space-y-0.5">
                        <span className="text-[10px] font-mono uppercase text-slate-400">{m.label}</span>
                        <div className="text-lg font-bold text-emerald-400 font-display">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 2-Column Deep Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                
                {/* Left Column: Problem & Diagnosis */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase text-red-400 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> 1. The Challenge:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase text-amber-400 flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5" /> 2. Data Diagnosis:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{study.diagnosis}</p>
                  </div>
                </div>

                {/* Right Column: Strategy & Implementation */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase text-blue-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" /> 3. Strategic Solution:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{study.strategy}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141424] border border-white/5 space-y-2">
                    <span className="text-[11px] font-mono font-semibold uppercase text-violet-400">
                      4. Tactical Implementation:
                    </span>
                    <div className="space-y-1.5">
                      {study.implementation.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Outcome Banner */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 space-y-1">
                <span className="text-[11px] font-mono font-semibold uppercase text-emerald-400">
                  5. Verified System Outcome:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {study.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl bg-[#141424] border border-white/10 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Need a Similar Framework Applied to Your Business?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Whether you want to resolve tracking discrepancies or scale performance campaigns with disciplined creative testing, let's connect.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onOpenContact('work', 'Case Study Framework Application')}
              className="px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-xl shadow-violet-900/40 cursor-pointer"
            >
              Discuss Your Project
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
