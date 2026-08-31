import React from 'react';
import { Users, Award, TrendingUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TRUST_METRICS } from '../data/portfolioData';

export const TrustStrip: React.FC = () => {
  return (
    <div className="border-y border-white/10 bg-[#0E0E1A] py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {metric.value}
                </span>
                {metric.highlight && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">
                    Verified
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {metric.label}
              </div>
              {metric.subtext && (
                <div className="text-[11px] text-slate-400">
                  {metric.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
