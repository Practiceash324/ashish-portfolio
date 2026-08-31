import React, { useState, useEffect } from 'react';
import { MessageSquareQuote, ShieldCheck, Star, Users, PlusCircle, CheckCircle2, Sparkles, X, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Testimonial } from '../types';

const STORAGE_REVIEWS_KEY = 'ashish_portfolio_user_reviews_v1';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Review Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [projectType, setProjectType] = useState('Meta Ads & sGTM Setup');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    try {
      const savedUserReviews = localStorage.getItem(STORAGE_REVIEWS_KEY);
      if (savedUserReviews) {
        const parsed: Testimonial[] = JSON.parse(savedUserReviews);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...TESTIMONIALS]);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !feedback.trim()) return;

    const newReview: Testimonial = {
      id: `user-rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Client',
      organization: organization.trim() || 'Verified Business',
      feedback: feedback.trim(),
      isVerified: true,
      type: 'Client',
      rating: rating,
      projectType: projectType,
      date: 'Just Now'
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      const existingUserReviews = localStorage.getItem(STORAGE_REVIEWS_KEY);
      const parsedList: Testimonial[] = existingUserReviews ? JSON.parse(existingUserReviews) : [];
      localStorage.setItem(STORAGE_REVIEWS_KEY, JSON.stringify([newReview, ...parsedList]));
    } catch {
      // ignore
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setName('');
      setRole('');
      setOrganization('');
      setFeedback('');
    }, 1800);
  };

  const filteredReviews = activeCategory === 'All' 
    ? reviews 
    : reviews.filter(r => r.projectType?.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="py-20 relative bg-[#0B0B14] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <Users className="w-3.5 h-3.5" /> Client Reviews &amp; Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.03em]">
              Trusted by Founders &amp; <span className="grad-text">Growth Teams</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Real results from e-commerce scaling campaigns, high-intent search overhauls, and server-side tracking implementations.
            </p>
          </div>

          {/* Action Button to Leave a Review */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/60 border border-white/10 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-slate-400">({reviews.length} Reviews)</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-violet-600/25 flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Meta Ads', 'Google Ads', 'Tracking', 'Audit'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat === 'All' ? 'All Reviews' : cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-6 sm:p-7 bg-[#10101C] border border-white/10 flex flex-col justify-between space-y-6 hover:border-violet-500/40 hover:bg-[#141424] transition-all text-left group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified {item.type}
                  </span>
                </div>

                {item.projectType && (
                  <div className="inline-block text-[11px] font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-lg">
                    {item.projectType}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">{item.name}</h4>
                    <p className="text-[11px] text-slate-400">{item.role} &bull; {item.organization}</p>
                  </div>
                </div>
                {item.date && (
                  <span className="text-[10px] text-slate-500 font-mono">{item.date}</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-lg rounded-3xl p-6 sm:p-7 border border-white/15 bg-[#10101C] text-slate-100 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Share Your Experience</h3>
                  <p className="text-xs text-slate-400">Leave a review for Ashish Mishra's services</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Thank You for Your Review!</h4>
                <p className="text-xs text-slate-300">Your feedback has been added directly to the website.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="mt-4 space-y-4">
                {/* Rating Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Overall Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-6 h-6 ${
                            (hoverRating !== null ? star <= hoverRating : star <= rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-300 ml-2">{rating}.0 / 5.0</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Your Role / Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Founder & CEO"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Company or Brand</label>
                    <input
                      type="text"
                      placeholder="e.g. Aura Lifestyle D2C"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Service Category</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500 cursor-pointer"
                    >
                      <option value="Meta Ads & sGTM Setup">Meta Ads &amp; sGTM Setup</option>
                      <option value="Google Ads & Lead Tracking">Google Ads &amp; Lead Tracking</option>
                      <option value="Paid Media Account Audit">Paid Media Account Audit</option>
                      <option value="Tracking & Meta CAPI">Tracking &amp; Meta CAPI</option>
                      <option value="Full-Funnel CRO Consulting">Full-Funnel CRO Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Your Feedback / Review *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share what it was like working with Ashish, key metrics achieved, or how the setup helped your business..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full bg-slate-900 border border-white/15 rounded-xl p-3.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white rounded-xl shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
