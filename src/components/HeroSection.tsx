import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  Activity, 
  Zap,
  BarChart3,
  Mail,
  Search,
  Target,
  ShoppingBag
} from 'lucide-react';
import { NavPage, UserJourney } from '../types';
import { SITE_IMAGES } from '../data/siteImages';

interface HeroSectionProps {
  onNavigate?: (page: NavPage) => void;
  onOpenContact?: (intent: UserJourney, topic?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onNavigate = (_page: NavPage) => {}, 
  onOpenContact = (_intent: UserJourney, _topic?: string) => {} 
}) => {
  const photoUrl = SITE_IMAGES.heroPortrait;

  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#0B0B14] text-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col space-y-7 text-left">
            
            {/* Live Status & Persona Tags */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/30 text-violet-300 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Performance Marketing &amp; Tracking Projects
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900 border border-white/10 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                MarTech Consultant
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-[-0.035em] text-white leading-[1.12]">
                Performance Marketing Trainer. Advanced Tracking Practitioner.{' '}
                <span className="grad-text">Helping Businesses Scale Real Revenue.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                I’m <strong className="text-white font-semibold">Ashish Mishra</strong> — a Digital Marketing Trainer, Performance Marketing practitioner, and Advanced Tracking practitioner with 4+ years of experience at NDMIT and <strong className="text-white font-semibold">5,000+ learners trained and mentored</strong>. I bridge the gap between learning and real-world marketing — helping people build practical skills and businesses turn their marketing efforts into measurable growth.
              </p>
            </div>

            {/* Core Competency & Platform Badges (as shown in reference) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('performance-marketing')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#10101C]/90 hover:bg-[#16162a] border border-white/15 hover:border-rose-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer group"
              >
                <Target className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                <span>Google Ads</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('performance-marketing')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#10101C]/90 hover:bg-[#16162a] border border-white/15 hover:border-blue-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer group"
              >
                <Layers className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Meta Ads</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('tracking')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#10101C]/90 hover:bg-[#16162a] border border-white/15 hover:border-emerald-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer group"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Advance E-Commerce Tracking</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('tracking')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#10101C]/90 hover:bg-[#16162a] border border-white/15 hover:border-cyan-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer group"
              >
                <Activity className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Advance Service-Based Tracking</span>
              </button>
            </div>

            {/* Intent-Driven Action CTA Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onNavigate('performance-marketing')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-xl shadow-violet-900/40 flex items-center gap-2 cursor-pointer"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Explore Media Buying</span>
              </button>

              <button
                onClick={() => onNavigate('tracking')}
                className="px-5 py-3.5 rounded-2xl bg-[#10101C] hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-white/25 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span>Server-Side sGTM &amp; CAPI</span>
              </button>

              <button
                onClick={() => onOpenContact('work', 'Account Audit Request')}
                className="px-4 py-3.5 rounded-2xl bg-transparent hover:bg-white/5 text-violet-300 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer underline-offset-4 hover:underline"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Book an Account Audit</span>
              </button>
            </div>

            {/* Operating Standard */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Operating Principle: <strong className="text-slate-200 font-medium">"If conversions don't match bank receipts or CRM deals, we don't count them."</strong></span>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (Portrait Showcase Card) ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Ambient Glowing Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-violet-600 via-blue-500 to-emerald-400 opacity-40 blur-xl transition-all duration-500 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-[#10101C] border border-white/15 p-3.5 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Photo Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                  <img
                    src={photoUrl}
                    alt="Ashish Mishra - Performance Marketer & Tracking Specialist"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-Left Live Status Pill */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40 text-[12px] font-semibold text-emerald-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Ashish Mishra</span>
                  </div>

                  {/* Bottom Dark Gradient Fade Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-12 text-left">
                    <div className="font-display font-bold text-xl text-white tracking-tight">
                      Ashish Mishra
                    </div>
                    <div className="text-xs text-violet-300 font-medium flex items-center gap-1.5 mt-0.5">
                      <span>Assistant Head Trainer (NDMIT) &bull; MarTech Consultant</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      5,000+ learners trained at NDMIT &bull; Scaling businesses with Google Ads, Meta Ads &amp; Advanced Tracking.
                    </p>
                  </div>
                </div>

                {/* Micro Metric Highlight Boxes Under Photo */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-left">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Learners Mentored</span>
                    <span className="text-lg font-bold font-display text-white mt-0.5">5,000+</span>
                    <span className="text-[10px] text-violet-300">NDMIT Alumni</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Training &amp; Consulting</span>
                    <span className="text-lg font-bold font-display text-emerald-400 mt-0.5">4+ Years</span>
                    <span className="text-[10px] text-slate-400">Practical Experience</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
