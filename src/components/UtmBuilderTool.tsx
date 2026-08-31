import React, { useState } from 'react';
import { Link2, Copy, Check, Sparkles, Terminal, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

export const UtmBuilderTool: React.FC = () => {
  const [baseUrl, setBaseUrl] = useState('https://ashishmishra.io/course');
  const [source, setSource] = useState('google');
  const [medium, setMedium] = useState('cpc');
  const [campaign, setCampaign] = useState('q4_perf_masterclass');
  const [content, setContent] = useState('v1_hook_system_thinking');
  const [term, setTerm] = useState('digital+marketing+trainer+lucknow');
  const [copied, setCopied] = useState(false);

  const cleanUrl = baseUrl.trim().replace(/\/+$/, '');
  const params = new URLSearchParams();
  if (source) params.append('utm_source', source);
  if (medium) params.append('utm_medium', medium);
  if (campaign) params.append('utm_campaign', campaign);
  if (content) params.append('utm_content', content);
  if (term) params.append('utm_term', term);

  const finalUrl = `${cleanUrl}${params.toString() ? '?' + params.toString() : ''}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreset = (presetSource: string, presetMedium: string, presetCampaign: string) => {
    setSource(presetSource);
    setMedium(presetMedium);
    setCampaign(presetCampaign);
  };

  return (
    <section id="utm-builder" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <Link2 className="w-3.5 h-3.5" /> Interactive Practitioner Tool
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Campaign <span className="grad-text">UTM &amp; Tracking Architect</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Never launch campaigns with messy or inconsistent tags. Build, standardize, and preview clean attribution parameters instantly.
          </p>
        </div>

        {/* Main Builder Container */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/15">
          
          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/10">
            <span className="text-xs font-semibold text-slate-400">Quick Channel Presets:</span>
            <button
              onClick={() => handlePreset('google', 'cpc', 'google_search_high_intent')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs text-amber-300 hover:bg-slate-800 transition-colors"
            >
              Google Search Ads
            </button>
            <button
              onClick={() => handlePreset('meta', 'paid_social', 'meta_advantage_plus_broad')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs text-blue-300 hover:bg-slate-800 transition-colors"
            >
              Meta Broad CBO
            </button>
            <button
              onClick={() => handlePreset('linkedin', 'sponsored_content', 'corporate_workshop_inquiry')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs text-violet-300 hover:bg-slate-800 transition-colors"
            >
              LinkedIn B2B
            </button>
            <button
              onClick={() => handlePreset('newsletter', 'email', 'weekly_tracking_digest')}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs text-emerald-300 hover:bg-slate-800 transition-colors"
            >
              Email Broadcast
            </button>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Website Destination URL</label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://example.com/landing"
                className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Campaign Source (utm_source)</label>
              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value.toLowerCase())}
                placeholder="google, meta, linkedin"
                className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Campaign Medium (utm_medium)</label>
              <input
                type="text"
                value={medium}
                onChange={(e) => setMedium(e.target.value.toLowerCase())}
                placeholder="cpc, email, paid_social"
                className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Campaign Name (utm_campaign)</label>
              <input
                type="text"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value.toLowerCase().replace(/\s+/g, '_'))}
                placeholder="q4_lead_generation"
                className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Creative / Hook (utm_content)</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value.toLowerCase().replace(/\s+/g, '_'))}
                placeholder="v2_carousel_stat"
                className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Search Term / Keyword (utm_term)</label>
              <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value.toLowerCase().replace(/\s+/g, '+'))}
                placeholder="digital+marketing+course"
                className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 font-mono"
              />
            </div>

          </div>

          {/* Generated URL Box */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <Terminal className="w-4 h-4 text-emerald-400" /> Standardized Campaign URL
              </span>
              <span className="text-[11px] text-emerald-400">GA4 Ready</span>
            </div>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 text-xs text-emerald-300 break-all select-all font-mono leading-relaxed">
              {finalUrl}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-lg shadow-violet-600/30 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Clean Tracking URL'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
