import React from 'react';
import { 
  Compass, 
  Award, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Target,
  Sparkles,
  Layers,
  Mail,
  Zap,
  Activity,
  Cpu
} from 'lucide-react';
import { NavPage, UserJourney } from '../../types';
import { SITE_IMAGES } from '../../data/siteImages';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  const profilePhoto = SITE_IMAGES.aboutProfile;
  const workspacePhoto = SITE_IMAGES.classroomWorkspace;

  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 text-left border-b border-white/10 pb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Compass className="w-3.5 h-3.5" /> Practitioner Story &amp; Philosophy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight">
            "Great performance marketing isn't about hacks. It's about unit economics, clean telemetry, and psychological resonance."
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            I am Ashish Mishra — Assistant Head Trainer at NDMIT and MarTech Consultant. I help learners build high-demand marketing skills and guide businesses to scale real revenue through Google Ads, Meta Ads, and Advanced Tracking.
          </p>
        </div>

        {/* 2-Column Overview with Profile Showcase Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative - Human Ghostwritten Story */}
          <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed text-left">
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                How I Got Here: Moving Past Vanity Metrics
              </h2>
              <p>
                Early in my career managing paid ad accounts, I noticed a frustrating disconnect that plagues nearly every growing business: ad dashboards boast 4x ROAS and hundreds of conversions, yet the business owner looks at their bank account or CRM and wonders where the real profit went.
              </p>
              <p>
                The truth is that <strong>most advertising waste doesn't come from poor creativity alone — it comes from flying blind on attribution and unit economics</strong>. When browser privacy restrictions (Safari ITP, Firefox, ad blockers) kill 30% of your purchase signals, Meta's Advantage+ and Google's Smart Bidding algorithms end up optimizing against ghost clicks and duplicate events.
              </p>
              <p>
                I made it my personal mission to master both sides of the coin: the <strong>creative and psychological levers of paid acquisition</strong> (Meta CBO, Dynamic Creative Testing 3x2x2, Google Search Intent) and the <strong>hard technical telemetry</strong> (Google Tag Manager, GA4, Server-Side sGTM, and Meta Conversions API) required to feed algorithms 100% clean data.
              </p>
            </div>

            {/* Core Tenet Box */}
            <div className="p-6 rounded-2xl bg-[#141424] border border-violet-500/20 space-y-3">
              <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> My Operating Standard
              </div>
              <p className="text-base text-white font-medium italic">
                "If we cannot verify a conversion in your actual backend revenue or CRM, we don't count it. Real growth requires mathematical honesty, disciplined creative testing, and resilient first-party data."
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h2 className="text-2xl font-bold text-white font-display">
                The Four Pillars of How I Work with Clients
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: '1. Margin & Unit Economics First',
                    desc: 'We calculate your gross margins, repeat purchase LTV, and allowable CAC before launching any campaign.'
                  },
                  {
                    title: '2. Zero-Leakage Telemetry',
                    desc: 'We deploy Server-Side GTM and Meta CAPI so your ad platforms receive 100% deduplicated purchase and lead signals.'
                  },
                  {
                    title: '3. Disciplined Creative Testing',
                    desc: 'Using modular DCT 3x2x2 frameworks to test 3 hooks, 2 angles, and 2 visual formats systematically without burning budget.'
                  },
                  {
                    title: '4. Transparent Single-Pane BI',
                    desc: 'Live Looker Studio dashboards connecting ad spend to actual bank receipts and qualified deals in real time.'
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Work with Me */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xl font-bold text-white font-display">
                Direct Partnership, Not Agency Runaround
              </h3>
              <p>
                When you hire an agency, your account is often passed to junior interns who tweak budgets randomly. When you partner with me, you work directly with a senior practitioner who builds the campaigns, writes the scripts, audits the server containers, and diagnoses your funnels firsthand.
              </p>
            </div>

          </div>

          {/* Right Sidebar: Rich Image Card & Quick Summary */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Image Showcase Card 1 (Ashish Mishra Portrait) */}
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-violet-600 via-blue-500 to-emerald-400 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl bg-[#10101C] p-3.5 border border-white/15 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={profilePhoto}
                    alt="Ashish Mishra - Performance Marketer & Tracking Specialist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Status Overlay Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40 text-xs font-semibold text-emerald-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Ashish Mishra &bull; Growth Strategist</span>
                  </div>

                  {/* Bottom Text Bar */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-12 text-left">
                    <div className="font-display font-bold text-xl text-white tracking-tight">
                      Ashish Mishra
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
                      Performance Marketer &amp; Tracking Architect
                    </div>
                  </div>
                </div>

                {/* Sub-card quick stats */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-1 text-center">
                  <div className="p-3 rounded-2xl bg-black/50 border border-white/5">
                    <div className="text-lg font-bold text-violet-400 font-display">₹5Cr+</div>
                    <div className="text-[11px] text-slate-400 font-medium">Ad Spend Strategized</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/50 border border-white/5">
                    <div className="text-lg font-bold text-emerald-400 font-display">99.4%</div>
                    <div className="text-[11px] text-slate-400 font-medium">Attribution Accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Image Showcase Card 2 (Workspace / Data Telemetry) */}
            <div className="relative group">
              <div className="relative rounded-3xl bg-[#10101C] p-3 border border-white/10 shadow-xl overflow-hidden">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={workspacePhoto}
                    alt="Ashish Mishra Analytics & Server-Side Telemetry"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-slate-200">
                    <Cpu className="w-3.5 h-3.5 text-violet-400" />
                    <span>Analytics &amp; Server-Side Telemetry</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3.5 pt-6 text-left">
                    <p className="text-xs text-slate-300 font-medium">
                      Live GTM server container routing, GA4 custom event telemetry, and Meta CAPI match scoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Professional Summary Card */}
            <div className="bg-[#10101C] rounded-3xl p-6 border border-white/10 space-y-4 text-left">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" /> Professional Summary
              </h3>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Primary Specialization:</span>
                  <span className="text-white font-medium text-right">Meta Ads &amp; Google Ads</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Technical Expertise:</span>
                  <span className="text-violet-300 font-medium text-right">Server-Side GTM &amp; Meta CAPI</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Average ROAS Lift:</span>
                  <span className="text-emerald-400 font-bold text-right">+45% - 80% Post-Audit</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Locations Served:</span>
                  <span className="text-white font-medium text-right">India &amp; Global Remote</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Direct Inquiries:</span>
                  <span className="text-violet-300 font-mono text-[11px] text-right">ashmanagerid@gmail.com</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenContact('work', 'Paid Media & Tracking Collaboration')}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Work With Ashish</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom CTAs */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-left">
          <button
            onClick={() => onNavigate('performance-marketing')}
            className="px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-violet-600/25 flex items-center gap-2 cursor-pointer"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Explore Paid Media Services</span>
          </button>
          <button
            onClick={() => onNavigate('tracking')}
            className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Server-Side Tracking Architecture</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
