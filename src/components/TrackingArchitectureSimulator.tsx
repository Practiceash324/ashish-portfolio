import React, { useState } from 'react';
import { 
  Activity, 
  Cpu, 
  ShieldCheck, 
  AlertTriangle, 
  Check, 
  Terminal, 
  RefreshCw, 
  Database, 
  Server, 
  Layers, 
  Radio, 
  Zap,
  ArrowDown
} from 'lucide-react';

export const TrackingArchitectureSimulator: React.FC = () => {
  const [signalMode, setSignalMode] = useState<'standard' | 'resilient'>('resilient');
  const [activeEvent, setActiveEvent] = useState<'page_view' | 'lead_submit' | 'purchase'>('lead_submit');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 600);
  };

  const getPayload = () => {
    if (activeEvent === 'lead_submit') {
      return {
        event: 'lead_form_submitted',
        user_data: {
          email_hash: signalMode === 'resilient' ? 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' : '[REDACTED_OR_STRIPPED]',
          phone_hash: signalMode === 'resilient' ? '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' : null,
          fbc: signalMode === 'resilient' ? 'fb.1.1718920192.IwAR34...' : null,
          fbp: 'fb.1.1718920190.998124',
          gclid: signalMode === 'resilient' ? 'CjwKCAjwzNmwBhBkEiwA-SRcrO...' : '[DROPPED_BY_REDIRECT]'
        },
        custom_params: {
          course_interest: 'Advanced Tracking Masterclass',
          lead_source: 'Google_Search_NDMIT',
          crm_lead_id: 'CRM-2026-8941',
          value: 450,
          currency: 'USD'
        },
        telemetry: {
          event_id: 'evt_998124_1718920192',
          consent_status: 'granted',
          server_container_status: signalMode === 'resilient' ? 'sGTM_200_OK' : 'BROWSER_ONLY'
        }
      };
    } else if (activeEvent === 'purchase') {
      return {
        event: 'purchase',
        ecommerce: {
          transaction_id: 'T_904128',
          value: 650.00,
          currency: 'USD',
          items: [{ item_name: '12-Week Performance Cohort', item_id: 'NDMIT_PERF_12', price: 650.00 }]
        },
        event_id: 'purchase_904128_hash'
      };
    } else {
      return {
        event: 'page_view',
        page_location: 'https://ashishmishra.io/tracking-audit',
        page_title: 'Full Stack GA4 & Server Tagging Systems'
      };
    }
  };

  return (
    <section id="tracking-lab" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Radio className="w-3.5 h-3.5 text-emerald-400" /> Interactive Measurement Lab
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            "Don't Guess What Worked. <span className="grad-text">Measure It."</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Every broken signal can become a wasted ad dollar. Experience how modern server-side measurement protects lead attribution against cookie decay, ad blockers, and cross-domain drops.
          </p>
        </div>

        {/* Diagnostic Simulator Container */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            
            {/* Mode Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Tracking Mode:</span>
              <div className="flex bg-slate-900 rounded-xl p-1 border border-white/10 text-xs font-medium">
                <button
                  onClick={() => setSignalMode('standard')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    signalMode === 'standard' 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Client-Side Only (Vulnerable)
                </button>
                <button
                  onClick={() => setSignalMode('resilient')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    signalMode === 'resilient' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm font-semibold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Full-Stack sGTM + CAPI
                </button>
              </div>
            </div>

            {/* Event Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Trigger Event:</span>
              <div className="flex bg-slate-900 rounded-xl p-1 border border-white/10 text-xs">
                {(['page_view', 'lead_submit', 'purchase'] as const).map((evt) => (
                  <button
                    key={evt}
                    onClick={() => setActiveEvent(evt)}
                    className={`px-3 py-1.5 rounded-lg transition-all font-mono ${
                      activeEvent === evt ? 'bg-violet-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {evt}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Pipeline Visual Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
            
            {/* Step 1: Ad Click & UTMs */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">[01] Inbound Click</span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <h4 className="text-sm font-bold text-white font-display">Traffic &amp; UTM Capture</h4>
              <p className="text-[11px] text-slate-400">
                Captures <code>gclid</code>, <code>utm_campaign</code>, and sets 1st-party cookie.
              </p>
              <div className="pt-2 text-[10px] font-mono text-emerald-400">
                {signalMode === 'resilient' ? '✓ GCLID stored in sessionStorage' : '⚠ Safari ITP 24hr expiry risk'}
              </div>
            </div>

            {/* Step 2: Data Layer Push */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">[02] Web Client</span>
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              </div>
              <h4 className="text-sm font-bold text-white font-display">Structured Data Layer</h4>
              <p className="text-[11px] text-slate-400">
                Web GTM fires trigger on validated form submit API callback.
              </p>
              <div className="pt-2 text-[10px] font-mono text-violet-400">
                ✓ dataLayer.push() active
              </div>
            </div>

            {/* Step 3: Server-Side Tagging & CAPI */}
            <div className={`p-4 rounded-2xl border space-y-2 relative transition-all ${
              signalMode === 'resilient' 
                ? 'bg-emerald-950/20 border-emerald-500/40 shadow-lg' 
                : 'bg-amber-950/20 border-amber-500/30'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">[03] Measurement Hub</span>
                {signalMode === 'resilient' ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                )}
              </div>
              <h4 className="text-sm font-bold text-white font-display">
                {signalMode === 'resilient' ? 'sGTM + CAPI Endpoint' : 'Standard Browser Beacon'}
              </h4>
              <p className="text-[11px] text-slate-300">
                {signalMode === 'resilient' 
                  ? 'Cloud container hashes user PII, deduplicates event_id, sends direct to Meta/Google APIs.' 
                  : 'Ad-blockers and privacy extensions can block up to 25% of client hits.'}
              </p>
              <div className="pt-2 text-[10px] font-mono font-semibold">
                {signalMode === 'resilient' ? (
                  <span className="text-emerald-400">Event Match Quality: 8.9 / 10</span>
                ) : (
                  <span className="text-amber-400">Match Quality: 4.1 / 10 (Poor)</span>
                )}
              </div>
            </div>

            {/* Step 4: CRM & GA4 Attribution */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">[04] Single Source</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h4 className="text-sm font-bold text-white font-display">CRM &amp; GA4 Reconciliation</h4>
              <p className="text-[11px] text-slate-400">
                Matched lead is sent back into Google Ads Smart Bidding as verified conversion.
              </p>
              <div className="pt-2 text-[10px] font-mono text-emerald-400">
                {signalMode === 'resilient' ? '✓ Discrepancy &lt; 2%' : '⚠ 35%+ Unattributed Lead Drop'}
              </div>
            </div>

          </div>

          {/* Interactive Live Payload Inspector */}
          <div className="rounded-2xl bg-slate-950 border border-white/10 overflow-hidden font-mono">
            <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-semibold">Telemetry Data Layer Stream:</span>
                <span className="text-slate-500">[{activeEvent}]</span>
              </div>
              <button
                onClick={handleSimulate}
                className="flex items-center gap-1 text-[11px] text-violet-300 hover:text-white bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>Simulate Dispatch</span>
              </button>
            </div>

            <div className="p-4 text-xs overflow-x-auto max-h-60 text-slate-300 leading-relaxed">
              <pre className="text-emerald-300">
                {JSON.stringify(getPayload(), null, 2)}
              </pre>
            </div>
          </div>

          {/* Bottom Callout Note */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <p className="text-slate-300">
                Want to eliminate lead discrepancies in your Google Ads or Meta Ads campaigns?
              </p>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity shrink-0 shadow-md"
            >
              Request a Tracking Audit
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
