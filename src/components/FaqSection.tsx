import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';

interface FaqSectionProps {
  onOpenContact?: (topic?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Performance Marketing', 'Tracking & Measurement', 'Services & Audits', 'Working Together'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(f => f.category === selectedCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#0B0B14] relative border-t border-white/5 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <HelpCircle className="w-3.5 h-3.5" /> Client FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.03em]">
            Frequently Asked <span className="grad-text">Questions</span>
          </h2>
          <p className="text-sm text-slate-300">
            Everything you need to know about campaign management, server-side tracking audits, turnaround timelines, and reporting.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#10101C] border border-white/10 overflow-hidden transition-all text-left"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#141424] transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400 font-semibold block">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white font-display">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-violet-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3.5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        {onOpenContact && (
          <div className="mt-12 p-6 rounded-2xl bg-[#141424] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question about your ad accounts or tracking?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Let's discuss your unit economics, ad spend goals, and measurement bottlenecks.</p>
            </div>
            <button
              onClick={() => onOpenContact('Have a question about services')}
              className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all shadow-md shadow-violet-600/25 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Directly</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
