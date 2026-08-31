import React, { useState } from 'react';
import { Mail, Linkedin, MessageSquare, Send, CheckCircle2, Copy, Check, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'training_cohort',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);

  const emailAddress = 'ashmanagerid@gmail.com';
  const linkedInUrl = 'https://in.linkedin.com/in/ashish-mishra-digital-marketer';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopiedEmail(true);
    setTimeout(() => setIsCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <MessageSquare className="w-3.5 h-3.5" /> Direct Channels
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            "Traffic without tracking is a guess.{' '}
            <span className="grad-text">Let's talk."</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            For structured digital marketing training, tracking audits, campaign consultations, or university workshops — reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 space-y-6 border border-white/15">
              
              <div className="flex items-center gap-3 pb-5 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                  AM
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">Ashish Mishra</h3>
                  <p className="text-xs text-slate-400">Assistant Head Trainer @ NDMIT Lucknow</p>
                </div>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-violet-400 font-semibold">
                    <Mail className="w-4 h-4" /> Primary Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {isCopiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{isCopiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-violet-300 transition-colors block break-all font-mono"
                >
                  {emailAddress}
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                <span className="text-xs text-blue-400 font-semibold flex items-center gap-1.5">
                  <Linkedin className="w-4 h-4" /> Professional Profile
                </span>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white flex items-center justify-between group transition-colors"
                >
                  <span>linkedin.com/in/ashish-mishra-digital-marketer</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Accepting Engagements</span>
                  <span className="text-slate-400 text-[11px]">Training cohorts &amp; tracking audits</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/15">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Inquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, <strong>{formData.name}</strong>. Ashish will review your message and reply to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', serviceType: 'training_cohort', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-xs text-slate-300 hover:text-white mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2">
                    <h3 className="text-xl font-bold text-white font-display">Send a Direct Inquiry</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tell me about your learning goals or project scope.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. priya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Inquiry Purpose / Engagement Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="training_cohort">12-Week Performance &amp; Marketing Cohort</option>
                      <option value="tracking_audit">GA4 / GTM / Server-Side Measurement Audit</option>
                      <option value="consulting">Performance Marketing Media Buying Advisory</option>
                      <option value="corporate_workshop">Corporate Training / Institutional Workshop</option>
                      <option value="other">General Collaboration / Mentorship</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Message &amp; Project Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe what you're looking to achieve (e.g. fixing GTM discrepancies, enrolling in upcoming batch, etc.)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message to Ashish</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
