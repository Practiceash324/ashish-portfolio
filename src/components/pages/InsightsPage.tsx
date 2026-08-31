import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Bookmark, 
  Layers, 
  Cpu,
  Share2
} from 'lucide-react';
import { INSIGHT_ARTICLES } from '../../data/portfolioData';
import { NavPage, UserJourney } from '../../types';

interface InsightsPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: (intent: UserJourney, topic?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate, onOpenContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(null);

  const categories = [
    'All',
    'Strategy',
    'Tracking',
    'Meta Ads',
    'Performance Marketing',
    'AI in Marketing'
  ];

  const filteredArticles = INSIGHT_ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.contentSnippet.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#0B0B14] min-h-screen text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/25 text-blue-300">
            <FileText className="w-3.5 h-3.5" /> Content & Frameworks Hub
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            What I'm Teaching, <span className="grad-text">Testing & Learning.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical articles, marketing experiments, measurement blueprints, and classroom frameworks to help you understand how digital marketing works in practice.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-[#10101C] rounded-2xl p-4 sm:p-6 border border-white/10 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, frameworks, tracking topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#10101C] border border-white/10 space-y-2">
              <p className="text-sm text-slate-400">No articles found matching your query.</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="text-xs text-violet-400 font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div 
                key={article.id}
                className="bg-[#10101C] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-violet-500/40 transition-all space-y-6 shadow-xl"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="text-[11px] font-semibold text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                        Featured Framework
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {article.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Key Takeaways Box */}
                <div className="p-4 rounded-2xl bg-[#141424] border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase text-emerald-400">
                    Core Insights & Takeaways:
                  </span>
                  <div className="space-y-1.5">
                    {article.takeaways.map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Deep Dive Snippet */}
                {expandedArticleId === article.id && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-slate-300 space-y-3 animate-in fade-in duration-300 leading-relaxed">
                    <div className="font-mono text-violet-400 font-semibold uppercase text-[10px]">
                      Article Excerpt & Teaching Notes:
                    </div>
                    <p>{article.contentSnippet}</p>
                    <p>
                      In our training sessions and consulting audits, we systematically implement this logic to ensure that campaigns generate predictable returns without relying on superficial software tricks.
                    </p>
                  </div>
                )}

                {/* Action Footer */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setExpandedArticleId(expandedArticleId === article.id ? null : article.id)}
                    className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{expandedArticleId === article.id ? 'Collapse Notes' : 'Read Full Breakdown'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenContact('learn', `Inquiry from Article: ${article.title}`)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Discuss in Next Cohort &rarr;
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
