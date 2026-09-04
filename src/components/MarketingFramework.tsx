import React, { useState } from 'react';
import { 
  GitBranch, 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Play,
  RotateCcw
} from 'lucide-react';
import { MARKETING_FRAMEWORK_STEPS } from '../data/portfolioData';

export const MarketingFramework: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const activeStep = MARKETING_FRAMEWORK_STEPS.find(s => s.id === selectedStepId) || MARKETING_FRAMEWORK_STEPS[0];

  const handleNext = () => {
    setSelectedStepId(prev => (prev >= MARKETING_FRAMEWORK_STEPS.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedStepId(prev => (prev <= 1 ? MARKETING_FRAMEWORK_STEPS.length : prev - 1));
  };

  return (
    <section id="framework" className="py-20 bg-slate-950/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <GitBranch className="w-3.5 h-3.5" /> End-to-End Operating Model
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The 8-Stage <span className="grad-text">Marketing &amp; Measurement System</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A successful digital marketing engine is never built around ads alone. Every layer from unit economics to server-side telemetry must connect seamlessly.
          </p>
        </div>

        {/* Horizontal Visual Pipeline / Step Pills */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2">
          <div className="flex items-center min-w-max gap-2 px-2">
            {MARKETING_FRAMEWORK_STEPS.map((step, idx) => {
              const isSelected = step.id === selectedStepId;
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setSelectedStepId(step.id)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-violet-600 text-white border-violet-400 shadow-lg shadow-violet-600/40 scale-105 ring-2 ring-violet-500/30'
                        : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border-white/10'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                      isSelected ? 'bg-white text-violet-700' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.id}
                    </span>
                    <span>{step.title}</span>
                  </button>

                  {idx < MARKETING_FRAMEWORK_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep Dive Card */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Stage Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-blue-600 flex items-center justify-center font-display font-extrabold text-white text-lg shadow-md">
                  0{activeStep.id}
                </span>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-violet-400 font-semibold block">
                    Category: {activeStep.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-emerald-400 font-semibold">
                &rarr; {activeStep.subtitle}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Key Implementation Actions */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Critical Execution Steps:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.keyActions.map((action, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-violet-950/40 via-slate-900 to-blue-950/40 border border-violet-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Standard Output Deliverable:</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">{activeStep.deliverable}</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-violet-400" />
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 transition-colors"
                  >
                    &larr; Prev Stage
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-mono text-slate-300">
                  Step {activeStep.id} of {MARKETING_FRAMEWORK_STEPS.length}
                </span>
              </div>

            </div>

            {/* Right: Architecture Diagram Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-slate-900/90 border border-white/10 p-6 space-y-4 shadow-2xl relative">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-slate-400">System Flow Matrix</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Live Diagram
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {MARKETING_FRAMEWORK_STEPS.map((s) => {
                    const isCurrent = s.id === activeStep.id;
                    const isPast = s.id < activeStep.id;
                    return (
                      <div 
                        key={s.id}
                        onClick={() => setSelectedStepId(s.id)}
                        className={`p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                          isCurrent 
                            ? 'bg-violet-600/30 border border-violet-500 text-white font-bold shadow-md' 
                            : isPast 
                              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300' 
                              : 'bg-black/30 border border-white/5 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-[10px] opacity-70">[{s.id}]</span>
                          <span className="truncate">{s.title}</span>
                        </div>
                        {isCurrent ? (
                          <Activity className="w-3.5 h-3.5 text-violet-400 animate-pulse shrink-0" />
                        ) : isPast ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <span className="text-[10px] text-slate-600 shrink-0">&middot;&middot;&middot;</span>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
