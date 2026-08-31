import React from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  ShoppingBag, 
  Briefcase, 
  Zap, 
  Terminal, 
  Lock,
  Sparkles,
  Layers,
  AlertTriangle
} from 'lucide-react';
import { TrackingArchitectureSimulator } from '../TrackingArchitectureSimulator';
import { NavPage, UserJourney } from '../../types';

interface TrackingPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const TrackingPage: React.FC<TrackingPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <BarChart3 className="w-3.5 h-3.5" /> Specialized Measurement Capability
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            I Help Businesses Improve Their <span className="grad-text">Marketing Measurement.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            When tracking is inaccurate, ad algorithms bid blindly. We replace broken client-side tags with resilient server-side data telemetry so your ad spend delivers real ROAS.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onOpenContact('tracking', 'Comprehensive Tracking Audit')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-500 hover:to-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-violet-900/40 cursor-pointer"
            >
              Get a Tracking Audit
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              Ask a Technical Question
            </button>
          </div>
        </div>

        {/* Business-First Problem Diagnosis (Section 23 in Master Prompt) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Ecommerce Problem & Solution */}
          <div className="bg-[#10101C] rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/15 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">The Ecommerce Problem</h3>
                <p className="text-xs text-slate-400">Online Stores, Shopify & WooCommerce</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>The Pain Point:</span>
              </div>
              <p className="text-slate-300">
                "You are generating sales on Shopify, but your Meta Ads dashboard and GA4 only record 60-70% of purchases due to iOS privacy, Safari ITP, and ad blockers."
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <span className="font-mono uppercase font-semibold text-emerald-400 text-[11px]">How We Fix It:</span>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Deploy Server-Side GTM (sGTM) on GCP to bypass client-side ad blockers.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Implement Meta Conversions API (CAPI) with <code>event_id</code> deduplication (EMQ 8.5+).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Google Enhanced Conversions passing SHA256 hashed customer transaction data.</span>
              </div>
            </div>
          </div>

          {/* Service Business Problem & Solution */}
          <div className="bg-[#10101C] rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">The Lead Gen Problem</h3>
                <p className="text-xs text-slate-400">B2B, Clinics, Real Estate & Agencies</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>The Pain Point:</span>
              </div>
              <p className="text-slate-300">
                "Google Ads reports 100 conversions at $20 CPA, but your CRM only has 45 real leads. Tags fire on button clicks, counting empty form submissions and spammers as success."
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <span className="font-mono uppercase font-semibold text-blue-400 text-[11px]">How We Fix It:</span>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Trigger conversion tags only on verified server-confirmed API responses.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Capture GCLID, UTM source, medium, and campaign into hidden CRM fields.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Establish Offline Conversion Imports (OCI) to feed closed-won sales back into smart bidding.</span>
              </div>
            </div>
          </div>

        </div>

        {/* The 6-Stage Measurement Chain */}
        <div className="bg-[#141424] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold">
              The Data Flow Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Website → Events → Conversion → Analytics → Advertising → Business Decisions
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            {[
              { step: '01', title: 'Website Event', desc: 'User clicks or submits form' },
              { step: '02', title: 'Data Layer', desc: 'Clean JSON payload generated' },
              { step: '03', title: 'Server GTM', desc: 'Signals sent to private proxy' },
              { step: '04', title: 'Ad Platform', desc: 'Google & Meta CAPI deduplication' },
              { step: '05', title: 'GA4 / CRM', desc: 'Full multi-touch attribution' },
              { step: '06', title: 'Optimization', desc: 'Smart bidding trains on real data' },
            ].map((node, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-white/5 space-y-1 text-center">
                <span className="text-[10px] font-mono text-violet-400 font-bold px-2 py-0.5 rounded bg-violet-500/10">
                  {node.step}
                </span>
                <h4 className="text-xs font-bold text-white mt-1">{node.title}</h4>
                <p className="text-[11px] text-slate-400">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Signal Lab & Simulator */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Interactive Telemetry Diagnostic
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Live Signal Simulator: Client vs. Server
            </h2>
          </div>
          <TrackingArchitectureSimulator />
        </div>

        {/* CTA Audit Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-violet-900/40 via-blue-900/40 to-emerald-900/30 border border-white/15 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Need Your Tracking Pipeline Audited?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            I will inspect your GTM container, GA4 properties, Meta Pixel/CAPI, and conversion triggers to find and fix data discrepancies.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onOpenContact('tracking', 'Audit Existing Tracking Setup')}
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-xl shadow-emerald-900/40 cursor-pointer"
            >
              Request a Tracking Audit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
