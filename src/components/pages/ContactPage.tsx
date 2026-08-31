import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  MessageSquare,
  Building,
  User,
  ShieldCheck, 
  Activity
} from 'lucide-react';
import { NavPage, UserJourney } from '../../types';
import { SITE_IMAGES } from '../../data/siteImages';

interface ContactPageProps {
  onNavigate: (page: NavPage) => void;
  defaultIntent?: UserJourney;
  onFormSubmitted?: (data: {
    name: string;
    email: string;
    intent: string;
    organization?: string;
  }) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  onNavigate, 
  defaultIntent = 'general',
  onFormSubmitted
}) => {
  const [selectedIntent, setSelectedIntent] = useState<string>(
    defaultIntent === 'work' 
      ? 'Paid Media Management (Meta & Google Ads)' 
      : defaultIntent === 'tracking' 
      ? 'Server-Side Tracking & GA4 Audit' 
      : defaultIntent === 'consulting'
      ? 'Paid Media Account Audit & CRO'
      : 'Paid Media Management (Meta & Google Ads)'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const photoUrl = SITE_IMAGES.contactProfile;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFormSubmitted) {
      onFormSubmitted({
        name: name || 'Client',
        email,
        intent: selectedIntent,
        organization
      });
    } else {
      onNavigate('thank-you');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <MessageSquare className="w-3.5 h-3.5" /> Direct Consultation &amp; Inquiries
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let's Scale Your <span className="grad-text">Performance.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discuss paid acquisition management across Meta &amp; Google Ads, server-side tracking architecture (sGTM/CAPI), or an in-depth account audit.
          </p>
        </div>

        {/* 3 Clear Service Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div 
            onClick={() => setSelectedIntent('Paid Media Management (Meta & Google Ads)')}
            className={`p-6 rounded-3xl bg-[#10101C] border transition-all cursor-pointer space-y-3 ${
              selectedIntent.includes('Paid Media') ? 'border-violet-500 ring-1 ring-violet-500/50 bg-[#141424]' : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">1. Paid Media Management</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Google Search, Performance Max, and Meta Ads management focused on profitable unit economics and continuous creative testing.
            </p>
            <span className="text-[11px] font-semibold text-violet-400 block pt-1">Select Service &rarr;</span>
          </div>

          <div 
            onClick={() => setSelectedIntent('Server-Side Tracking & GA4 Audit')}
            className={`p-6 rounded-3xl bg-[#10101C] border transition-all cursor-pointer space-y-3 ${
              selectedIntent.includes('Server-Side') ? 'border-blue-500 ring-1 ring-blue-500/50 bg-[#141424]' : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">2. Tracking &amp; Meta CAPI</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Shopify/WooCommerce purchase tracking, sGTM cloud deployment, event deduplication (EMQ 8.5+), and offline conversion imports.
            </p>
            <span className="text-[11px] font-semibold text-blue-400 block pt-1">Select Service &rarr;</span>
          </div>

          <div 
            onClick={() => setSelectedIntent('Paid Media Account Audit & CRO')}
            className={`p-6 rounded-3xl bg-[#10101C] border transition-all cursor-pointer space-y-3 ${
              selectedIntent.includes('Audit') ? 'border-emerald-500 ring-1 ring-emerald-500/50 bg-[#141424]' : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">3. 45-Point Account Audit</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Comprehensive health check of your ad accounts, wasted spend identification, landing page CRO recommendations, and strategic roadmaps.
            </p>
            <span className="text-[11px] font-semibold text-emerald-400 block pt-1">Select Service &rarr;</span>
          </div>
        </div>

        {/* Main Form & Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Container */}
          <div className="lg:col-span-7 bg-[#10101C] rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-white font-display">Initiate a Project Inquiry</h2>
                <p className="text-xs text-slate-400">Tell me about your business, current ad spend, and growth bottlenecks.</p>
              </div>

              {/* Intent Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Service Required *
                </label>
                <select
                  value={selectedIntent}
                  onChange={(e) => setSelectedIntent(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 transition-colors cursor-pointer"
                >
                  <option value="Paid Media Management (Meta & Google Ads)">🚀 Paid Media Management (Meta &amp; Google Ads)</option>
                  <option value="Server-Side Tracking & GA4 Audit">📊 Server-Side Tracking &amp; Meta CAPI Setup</option>
                  <option value="Paid Media Account Audit & CRO">🔍 45-Point Ad Account &amp; Tracking Audit</option>
                  <option value="Full-Funnel Growth Advisory">💡 Full-Funnel Growth &amp; Strategy Advisory</option>
                  <option value="General Collaboration">💬 General Inquiry / Discussion</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Phone / WhatsApp (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Company / Brand Website
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="text"
                      placeholder="e.g. yourbrand.com"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Project Details &amp; Current Ad Spend *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share your current monthly ad spend, advertising channels, and key objectives or bottlenecks..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-xl shadow-violet-900/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry &amp; Request Callback</span>
              </button>
            </form>
          </div>

          {/* Contact Details & Photo Showcase Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Portrait Image Frame with Photo Upload */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600 via-blue-500 to-emerald-400 opacity-25 group-hover:opacity-40 blur-xl transition-all duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl bg-[#10101C] p-3.5 border border-white/15 shadow-2xl space-y-3">
                <div className="relative aspect-[4/4.5] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={photoUrl}
                    alt="Ashish Mishra - Performance Marketer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Status Overlay */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40 text-xs font-semibold text-emerald-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Ashish Mishra</span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-10 text-left">
                    <div className="font-display font-bold text-lg text-white">
                      Ashish Mishra
                    </div>
                    <p className="text-xs text-slate-300">
                      Performance Marketing &amp; Tracking Architect
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Direct Inquiries:</span>
                  <span className="text-violet-300 font-mono font-medium">ashmanagerid@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Direct Channels Box */}
            <div className="bg-[#10101C] rounded-3xl p-6 sm:p-7 border border-white/10 space-y-4 text-left">
              <h3 className="text-base font-bold text-white font-display">Direct Channels &amp; Availability</h3>
              
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Email</span>
                    <a href="mailto:ashmanagerid@gmail.com" className="text-white font-medium hover:text-violet-300 transition-colors">
                      ashmanagerid@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Base Location</span>
                    <span className="text-white font-medium">Lucknow, Uttar Pradesh, India (Remote Worldwide)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Audit Turnaround</span>
                    <span className="text-slate-200">3-5 business days for comprehensive telemetry audit</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
