import React, { useState } from 'react';
import { 
  Layers, 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  Search, 
  Sparkles, 
  Check, 
  Terminal, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const ExpertiseSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('digital-strategy');

  const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'digital-strategy': return <Layers className="w-4 h-4" />;
      case 'performance': return <TrendingUp className="w-4 h-4" />;
      case 'analytics-measurement': return <BarChart3 className="w-4 h-4" />;
      case 'advanced-tracking': return <Cpu className="w-4 h-4" />;
      case 'seo-tech': return <Search className="w-4 h-4" />;
      case 'ai-tools': return <Sparkles className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/25 text-blue-300">
            <Cpu className="w-3.5 h-3.5" /> Technical & Strategic Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Comprehensive <span className="grad-text">Skill Architecture</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            No generic progress bars. Here is the exact technical and operational breakdown of systems I deploy and teach.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-600/30 scale-105 border border-violet-400/40'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-white/10'
                }`}
              >
                {getIcon(category.id)}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Breakdown Card */}
        <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                  {getIcon(activeCategory.id)}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {activeCategory.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                {activeCategory.description}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                {activeCategory.skills.length} Specialized Sub-Modules
              </span>
            </div>
          </div>

          {/* Grid of Sub-Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {activeCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-violet-500/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      {skill.name}
                    </h4>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
                      skill.level === 'Expert'
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                  <span>Industry Applied</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Verified Module
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Terminal Snippet preview */}
          <div className="mt-6 p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-400 truncate">
                dataLayer.push(&#123; event: 'skill_verified', category: '{activeCategory.title}' &#125;)
              </span>
            </div>
            <span className="text-[11px] text-violet-400 shrink-0 font-medium">
              100% Practical Implementation &rarr;
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
