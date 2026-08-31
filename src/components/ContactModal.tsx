import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, Phone, Sparkles, Building, User } from 'lucide-react';
import { UserJourney } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIntent?: UserJourney;
  initialTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialIntent = 'learn',
  initialTopic = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [intent, setIntent] = useState<string>('Training');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialIntent === 'learn') {
      setIntent('Training & Mentorship');
    } else if (initialIntent === 'work') {
      setIntent('Performance Marketing (Google & Meta Ads)');
    } else if (initialIntent === 'tracking') {
      setIntent('Tracking Audit & Measurement');
    } else if (initialIntent === 'consulting') {
      setIntent('Digital Marketing Consulting');
    }

    if (initialTopic) {
      setMessage(`Hi Ashish, I am interested in: ${initialTopic}.`);
    }
  }, [initialIntent, initialTopic, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#10101C] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Inquiry Received!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Ashish will review your message regarding <span className="text-violet-300 font-medium">"{intent}"</span> and get in touch within 24 hours.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-all shadow-lg shadow-violet-600/25"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Header */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Start the Conversation
              </span>
              <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                Let's Discuss Your Goals
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Whether you want to learn practical marketing, scale campaigns, or audit your tracking setup.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Interest Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  I'm Interested In:
                </label>
                <select
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500 transition-colors"
                >
                  <option value="Training & Mentorship">🎓 Digital Marketing Training & Mentorship</option>
                  <option value="Performance Marketing (Google & Meta Ads)">🚀 Performance Marketing (Google & Meta Ads)</option>
                  <option value="Tracking Audit & Measurement">📊 Advanced Tracking & GA4 Measurement Audit</option>
                  <option value="Digital Marketing Consulting">💡 Digital Marketing & Funnel Consulting</option>
                  <option value="Corporate / Institutional Workshop">🏢 Corporate / College Workshop</option>
                  <option value="Other Inquiries">💬 Other Inquiries</option>
                </select>
              </div>

              {/* Name & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business / College / Profile
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="text"
                      placeholder="e.g. Student / Brand Name"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  How can Ashish help you? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share a brief about what you would like to achieve or learn..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-violet-500 placeholder-slate-600 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> Fast reply via email or WhatsApp
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-violet-900/40 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
