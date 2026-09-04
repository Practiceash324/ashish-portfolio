import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Mail, 
  TrendingUp, 
  BarChart3, 
  FolderCheck,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { NavPage, UserJourney } from '../../types';
import { SITE_IMAGES } from '../../data/siteImages';

interface ThankYouPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
  submittedData?: {
    name?: string;
    email?: string;
    intent?: string;
    organization?: string;
  };
  onResetInquiry?: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  onNavigate,
  onOpenContact,
  submittedData = {
    name: 'Partner / Client',
    email: 'your email address',
    intent: 'Paid Media Scaling',
    organization: ''
  },
  onResetInquiry
}) => {
  const photoUrl = SITE_IMAGES.thankYouProfile;

  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Top Status Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Inquiry Received &bull; Priority Queued</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Thank You, <span className="grad-text">{submittedData.name || 'Partner'}!</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your inquiry regarding <strong className="text-white">"{submittedData.intent || 'Performance Collaboration'}"</strong> has been successfully received. Ashish Mishra personally reviews every submission and will reach out within 24 hours.
          </p>
        </div>

        {/* Center Grid: Next Steps Card + Customizable Host Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Next Steps Details */}
          <div className="lg:col-span-7 bg-[#10101C] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  What Happens Next
                </span>
                <span className="text-xs text-violet-300 font-medium">Response in &lt; 24 hrs</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#141424] border border-white/5">
                  <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center font-bold text-xs text-violet-300 shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Account &amp; Scope Assessment</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Ashish reviews your advertising channels, current monthly ad spend, or dataLayer tracking architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#141424] border border-white/5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-xs text-blue-300 shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Direct Strategy Note</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      You'll receive an initial diagnosis breakdown highlighting immediate ad spend leakages and tracking fixes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#141424] border border-white/5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-300 shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">1-on-1 Growth Consultation</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      A dedicated Google Meet or WhatsApp call to review unit economics targets and finalize project deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action back to portfolio */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('home')}
                className="px-5 py-2.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-all shadow-lg shadow-violet-600/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Return to Home</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {onResetInquiry && (
                <button
                  onClick={onResetInquiry}
                  className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Inquiry</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Card: Host Image Frame with Photo Upload & Customization */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600 via-blue-500 to-emerald-400 opacity-25 group-hover:opacity-40 blur-xl transition-all duration-500 pointer-events-none" />
            
            <div className="relative rounded-3xl bg-[#10101C] p-4 border border-white/15 shadow-2xl space-y-4 h-full flex flex-col justify-between">
              
              {/* Image Frame */}
              <div className="relative aspect-[4/4.5] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={photoUrl}
                  alt="Ashish Mishra - Performance Marketer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Status */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40 text-xs font-semibold text-emerald-300 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ashish Mishra</span>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-10 text-left">
                  <div className="font-display font-bold text-lg text-white">
                    Ashish Mishra
                  </div>
                  <p className="text-xs text-slate-300">
                    Assistant Head Trainer (NDMIT) &bull; MarTech Consultant
                  </p>
                </div>
              </div>

              {/* Direct Reach Out Bar */}
              <div className="p-3.5 rounded-2xl bg-[#141424] border border-white/5 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct Email</span>
                  <span className="font-mono text-violet-300 font-semibold text-[11px]">ashmanagerid@gmail.com</span>
                </div>
                <a
                  href="mailto:ashmanagerid@gmail.com"
                  className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all font-semibold"
                >
                  Email
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Recommended Explorations */}
        <div className="pt-6 border-t border-white/10 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white font-display">
              While You Wait &mdash; Explore Frameworks &amp; Systems
            </h2>
            <p className="text-xs text-slate-400">
              Check out live tracking simulators, media buying methodologies, and client case studies:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div 
              onClick={() => onNavigate('tracking')}
              className="p-5 rounded-3xl bg-[#10101C] border border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer space-y-2 group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Interactive Tracking Simulator
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Test browser vs server-side dataLayer payloads and conversion recovery.
              </p>
            </div>

            <div 
              onClick={() => onNavigate('performance-marketing')}
              className="p-5 rounded-3xl bg-[#10101C] border border-white/10 hover:border-violet-500/40 transition-all cursor-pointer space-y-2 group"
            >
              <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                Media Buying Frameworks
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Explore Meta Dynamic Creative Testing (DCT 3x2x2) and Google Search SIAG models.
              </p>
            </div>

            <div 
              onClick={() => onNavigate('work')}
              className="p-5 rounded-3xl bg-[#10101C] border border-white/10 hover:border-blue-500/40 transition-all cursor-pointer space-y-2 group"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <FolderCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                Client Case Studies
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Read deep breakdowns of how we eliminated lead discrepancies and scaled ROAS.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
