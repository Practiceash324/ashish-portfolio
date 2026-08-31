import React from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Layers, 
  BarChart3, 
  Sparkles, 
  Zap, 
  Search, 
  Globe, 
  DollarSign, 
  Cpu,
  Compass
} from 'lucide-react';
import { NavPage, UserJourney } from '../../types';

interface PerformanceMarketingPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const PerformanceMarketingPage: React.FC<PerformanceMarketingPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/25 text-blue-300">
            <TrendingUp className="w-3.5 h-3.5" /> Performance Marketing Practitioner
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Performance Marketing Is <span className="grad-text">More Than Running Ads.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Profitable paid customer acquisition requires alignment between customer economics, high-intent targeting, creative testing, and clean telemetry.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onOpenContact('work', 'Performance Marketing Strategy')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-violet-900/40 cursor-pointer"
            >
              Discuss Your Marketing
            </button>
            <button
              onClick={() => onNavigate('work')}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              View Case Blueprints
            </button>
          </div>
        </div>

        {/* 4 Core Pillars of Performance Marketing */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold">
              The 4 Performance Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              The Closed-Loop Growth System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: '1. Strategy',
                flow: 'Audience → Offer → Funnel → Channel',
                desc: 'Establishing unit economics, gross margins, allowable CAC, and positioning hooks before launching ad spend.'
              },
              {
                step: '2. Campaign',
                flow: 'Google Ads → Meta Ads → Testing → Bidding',
                desc: 'Granular search match typing, negative sculpting, Advantage+ setups, and dynamic creative testing matrices.'
              },
              {
                step: '3. Measurement',
                flow: 'Clicks → Leads/Purchases → Signals → CRM',
                desc: 'Capturing clean dataLayer events, passing first-party hashed user data, and deduplicating server signals.'
              },
              {
                step: '4. Optimization',
                flow: 'Data → Insights → Decisions → Scaling',
                desc: 'Reallocating spend to winning segments, iterating on top-performing creative hooks, and running CRO sprints.'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#10101C] rounded-2xl p-5 border border-white/10 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">
                    {pillar.step}
                  </span>
                  <div className="text-xs font-semibold text-emerald-400 font-mono">
                    {pillar.flow}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {pillar.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full" style={{ width: `${(idx + 1) * 25}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive: Google Ads vs Meta Ads Frameworks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Google Ads Card */}
          <div className="bg-[#141424] rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Google Ads Execution</h3>
                <p className="text-xs text-slate-400">Capturing Existing High Commercial Intent</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Google Ads thrives when you align keyword intent with landing page clarity. We eliminate budget bleed by isolating exact/phrase search intent, rigorous negative keyword sculpting, and smart bidding calibrated to verified conversion values.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-white/5 text-xs">
              {[
                'Search Campaigns: Single Intent Ad Groups (SIAG) & Negative Sculpting',
                'Performance Max: Asset group segmentation with search themes & first-party signals',
                'Smart Bidding: Target CPA & Target ROAS with offline conversion reconciliation',
                'Quality Score Engineering: Headline relevance & mobile landing page speed'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meta Ads Card */}
          <div className="bg-[#141424] rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Meta Ads Execution</h3>
                <p className="text-xs text-slate-400">Generating Demand Through Creative Strategy</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              On Meta, creative is targeting. We implement modular Dynamic Creative Testing (DCT) sandboxes (3 hooks × 2 copy angles × 2 visuals) to identify winning ad formats before scaling into broad Advantage+ budget campaigns.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-white/5 text-xs">
              {[
                'Creative Strategy: 3-Second Hook Retention & Visual Contrast Optimization',
                'DCT Testing Sandboxes: Isolating winning elements before scaling budget',
                'Broad CBO Scaling: Allowing Meta algorithm maximum liquidity to find buyers',
                'Meta Conversions API: Passing server-side event deduplication for high EMQ'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Budget Allocation & Optimization Matrix */}
        <div className="bg-[#10101C] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              The 80/20 Budgeting Discipline
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Disciplined Scaling vs. Random Ad Testing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We allocate 80% of ad spend to proven, profitable evergreen campaigns and 20% to structured testing sandboxes. This protects baseline ROAS while constantly discovering the next generation of winning creatives and keywords.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-xs font-mono text-emerald-400">80% Spend</span>
              <h4 className="text-sm font-bold text-white">Scaling Sandbox</h4>
              <p className="text-xs text-slate-400">Broad CBO & proven search terms with stable CAC.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-xs font-mono text-violet-400">20% Spend</span>
              <h4 className="text-sm font-bold text-white">Testing Sandbox</h4>
              <p className="text-xs text-slate-400">Weekly creative sprints and new keyword experiments.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-xs font-mono text-blue-400">Daily Pacing</span>
              <h4 className="text-sm font-bold text-white">Marginal ROAS Checks</h4>
              <p className="text-xs text-slate-400">Scaling budgets only when marginal efficiency holds.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Want to Discuss Your Marketing Strategy?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Let's evaluate your current campaign performance, identify budget waste, and design a profitable acquisition roadmap.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onOpenContact('work', 'Performance Marketing Campaign Management')}
              className="px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-xl shadow-violet-900/40 cursor-pointer"
            >
              Discuss Your Marketing
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
