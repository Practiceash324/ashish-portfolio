import React from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Briefcase, 
  ShieldCheck, 
  Layers, 
  Cpu,
  Target
} from 'lucide-react';
import { BUSINESS_SERVICES } from '../../data/portfolioData';
import { NavPage, UserJourney } from '../../types';

interface ServicesPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <Briefcase className="w-3.5 h-3.5" /> Client & Business Services
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Marketing & Measurement Built for <span className="grad-text">Real Business Outcomes.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I help businesses acquire customers with disciplined Google & Meta Ads, resolve tracking blind spots, and optimize digital funnels.
          </p>
        </div>

        {/* 3 Core Service Categories */}
        <div className="space-y-12">
          
          {/* SERVICE 01: Performance Marketing */}
          <div className="bg-[#10101C] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6 hover:border-violet-500/30 transition-all shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                  Service 01 &bull; Media Buying & Growth
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Performance Marketing (Google Ads & Meta Ads)
                </h2>
              </div>
              <button
                onClick={() => onOpenContact('work', 'Performance Marketing Management')}
                className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-violet-600/30 flex items-center gap-2 self-start md:self-auto cursor-pointer"
              >
                <span>Discuss Performance Marketing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              End-to-end management and scaling of paid advertising across Google Search, Performance Max, YouTube, and Meta Ads (Facebook & Instagram). Every dollar spent is tied to target CAC and ROAS benchmarks with continuous creative testing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3 bg-slate-900/60 p-5 rounded-2xl border border-white/5">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">Who This Is For:</h4>
                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Ecommerce brands looking to scale beyond flat ROAS</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> High-ticket service businesses needing qualified leads</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Companies with wasted ad spend on broad untargeted keywords</div>
                </div>
              </div>

              <div className="space-y-3 bg-slate-900/60 p-5 rounded-2xl border border-white/5">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">Key Deliverables:</h4>
                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" /> Complete campaign buildout & negative keyword sculpting</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" /> Dynamic Creative Testing (DCT) frameworks & hook scripts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" /> Landing page conversion rate optimization (CRO) feedback</div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 02: Advanced Tracking & Measurement (Split into Ecommerce & Lead-Gen) */}
          <div className="bg-[#10101C] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-8 hover:border-emerald-500/30 transition-all shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Service 02 &bull; Specialized Capability
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Advanced Tracking & Measurement Services
                </h2>
              </div>
              <button
                onClick={() => onOpenContact('tracking', 'Advanced Tracking Audit')}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 self-start md:self-auto cursor-pointer"
              >
                <span>Get a Tracking Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              Clean data is the foundation of high-performing advertising. When your tracking is broken, ad algorithms optimize against false positives. We provide specialized measurement solutions for online stores and lead-generation businesses.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              
              {/* Ecommerce Subcard */}
              <div className="bg-[#141424] rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">Ecommerce Tracking</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For Shopify, WooCommerce, and custom ecommerce stores. Ensure every product view, add to cart, and purchase event is accurately tracked in GA4, Google Ads, and Meta Ads.
                </p>
                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> GA4 Enhanced Ecommerce purchase & checkout funnel events</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Meta CAPI server-side integration with event_id deduplication</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Google Enhanced Conversions with hashed first-party user data</div>
                </div>
              </div>

              {/* Service-Based / Lead Gen Subcard */}
              <div className="bg-[#141424] rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">Service-Based & Lead Tracking</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For B2B, clinics, education, real estate, and professional services. Filter out fake clicks and pass real lead conversion signals directly into your CRM and ad platforms.
                </p>
                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Verified form submission triggers (eliminating ghost clicks)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Hidden fields capturing GCLID, UTM source & campaign parameters</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Google Ads Offline Conversion Import (OCI) workflow setup</div>
                </div>
              </div>

            </div>
          </div>

          {/* SERVICE 03: Digital Marketing Consulting */}
          <div className="bg-[#10101C] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6 hover:border-amber-500/30 transition-all shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Service 03 &bull; Strategic Advisory
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Digital Marketing & Funnel Consulting
                </h2>
              </div>
              <button
                onClick={() => onOpenContact('consulting', 'Strategic Marketing Consultation')}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-amber-600/30 flex items-center gap-2 self-start md:self-auto cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              1-on-1 strategic advisory for business owners, marketing teams, and founders. We review existing ad accounts, eliminate budget leaks, redesign conversion funnels, and provide actionable growth roadmaps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1 text-xs">
                <h4 className="font-bold text-white">Full Marketing Funnel Audit</h4>
                <p className="text-slate-400">Identifying conversion drop-offs between discovery and sale.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1 text-xs">
                <h4 className="font-bold text-white">Ad Spend Health Check</h4>
                <p className="text-slate-400">Eliminating negative keyword waste and unprofitable ad sets.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1 text-xs">
                <h4 className="font-bold text-white">Team Upskilling & SOPs</h4>
                <p className="text-slate-400">Standard operating procedures for in-house marketing staff.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Why Work With Ashish? (Section 27 of Master Prompt) */}
        <div className="bg-[#141424] rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 shadow-2xl">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold">
              The Business Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Work With Ashish?
            </h3>
            <p className="text-sm text-slate-300">
              Unlike traditional agencies that isolate media buying from tracking, I combine strategic marketing understanding with deep measurement precision:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Marketing Understanding',
                desc: 'Strategic customer psychology and offer framing, not just mindless button clicking.'
              },
              {
                title: 'Performance Thinking',
                desc: 'Obsession with real business outcomes — allowable CAC, gross margin, and bottom-line revenue.'
              },
              {
                title: 'Measurement Mindset',
                desc: 'Better data leads to better decisions. Clean tracking prevents algorithm corruption.'
              },
              {
                title: 'Practical Approach',
                desc: 'Customized solutions tailored directly to your actual business requirements and tech stack.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/90 border border-white/5 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-400">0{idx + 1}</div>
                <h4 className="text-base font-bold text-white font-display">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
