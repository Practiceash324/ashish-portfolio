import { 
  ServiceBadge, 
  MetricItem, 
  AudiencePath, 
  SkillCategory, 
  FrameworkStep, 
  CaseStudy, 
  Testimonial, 
  FaqItem, 
  InsightArticle, 
  ServiceDetail 
} from '../types';

export const HERO_SERVICES: ServiceBadge[] = [
  { id: 'meta', name: 'Meta Ads Scaling', category: 'CBO & Creative Testing', color: 'from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30' },
  { id: 'gads', name: 'Google Ads & PMax', category: 'High-Intent Search', color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30' },
  { id: 'tracking', name: 'Server-Side sGTM & CAPI', category: 'Attribution & Telemetry', color: 'from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30' },
  { id: 'analytics', name: 'GA4 & Funnel CRO', category: 'Conversion Architecture', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30' }
];

export const TRUST_METRICS: MetricItem[] = [
  { label: 'Learners Mentored', value: '5,000+', subtext: 'Live Cohorts & NDMIT Alumni', highlight: true },
  { label: 'Live Batches Delivered', value: '100+', subtext: 'Classroom & Online Training Sessions' },
  { label: 'Core Modules Covered', value: '15+', subtext: 'Google Ads, Meta Ads, GA4 & Telemetry' },
  { label: 'Practical Implementation', value: '95%+', subtext: 'Real Budgets & Live Campaign Setup' }
];

export const WHO_I_HELP_PATHS: AudiencePath[] = [
  {
    id: 'ecommerce-d2c',
    title: 'E-Commerce & D2C Brands',
    subtitle: 'Scale profitably with Meta Ads, Google PMax & high repeat LTV',
    icon: 'Rocket',
    badge: 'D2C & Retail Brands',
    description: 'For growing e-commerce brands needing systematic creative testing (DCT), broad targeting, Advantage+ scaling, and clean purchase signal recovery.',
    targetAudience: ['Shopify & WooCommerce Stores', 'D2C Fashion & Beauty Brands', 'High-AOV Consumer Goods', 'Multi-SKU E-commerce'],
    primaryCtaText: 'Explore Media Buying Services',
    targetPage: 'performance-marketing',
    intent: 'work'
  },
  {
    id: 'b2b-leadgen',
    title: 'High-Ticket & B2B Lead Gen',
    subtitle: 'Acquire qualified sales pipeline without burning budget on spam clicks',
    icon: 'Target',
    badge: 'B2B & High-Ticket Services',
    description: 'For clinics, consultancies, SaaS, real estate, and B2B providers looking for search intent capture, single-intent ad groups, and CRM-verified offline conversion bidding.',
    targetAudience: ['B2B Services & SaaS', 'Healthcare & Clinics', 'Real Estate & Financial Services', 'Corporate Consultancies'],
    primaryCtaText: 'Explore Lead Gen Systems',
    targetPage: 'services',
    intent: 'work'
  },
  {
    id: 'broken-tracking',
    title: 'Brands Needing Tracking Audits',
    subtitle: 'Eliminate data discrepancies between ad platforms and your backend revenue',
    icon: 'BarChart3',
    badge: 'Attribution & Tracking Fix',
    description: 'For businesses experiencing missing purchase events in Meta, broken GA4 funnels, iOS 14.5+ Safari drops, or unverified button-click conversions.',
    targetAudience: ['Brands with Low Meta EMQ (<6.0)', 'Stores with GA4 Revenue Gaps', 'Companies Needing Server-Side GTM', 'Agencies Requiring Technical Audits'],
    primaryCtaText: 'Explore Tracking Architecture',
    targetPage: 'tracking',
    intent: 'tracking'
  },
  {
    id: 'consulting-advisory',
    title: 'Growth & Strategy Advisory',
    subtitle: 'On-demand ad account audits, funnel CRO, and marketing leadership',
    icon: 'Compass',
    badge: 'Strategic Advisory',
    description: 'For founders and in-house growth teams looking for deep 45-point account audits, unit economics modeling, landing page CRO reviews, and strategic roadmaps.',
    targetAudience: ['Founders & Growth Directors', 'In-House Marketing Teams', 'Companies Launching New Products', 'Brands Needing Audit Verification'],
    primaryCtaText: 'Book Growth Consultation',
    targetPage: 'services',
    intent: 'consulting'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'performance-media',
    title: 'Performance Marketing & Media Buying',
    icon: 'TrendingUp',
    description: 'Profitable media buying across Google Ads and Meta Ads driven by mathematical bidding and creative testing frameworks.',
    skills: [
      { name: 'Meta Ads (Advantage+, CBO & Dynamic Testing)', level: 'Expert', details: 'Dynamic Creative Testing (DCT 3x2x2), Broad CBO scaling, and creative fatigue rotation.' },
      { name: 'Google Ads (Search, PMax, Display & YouTube)', level: 'Expert', details: 'Intent match typing, negative sculpting, smart bidding, and asset group optimization.' },
      { name: 'Unit Economics & Budget Allocation', level: 'Expert', details: 'Marginal ROAS calculation, allowable CAC modeling, and cross-channel pacing.' },
      { name: 'Ad Copywriting & Hook Psychology', level: 'Expert', details: 'Problem-aware messaging frameworks for e-commerce buyers and B2B decision-makers.' }
    ]
  },
  {
    id: 'advanced-tracking',
    title: 'Advanced Tracking & Telemetry',
    icon: 'Cpu',
    description: 'Server-side measurement and conversion APIs safeguarding data resilience against ad blockers and privacy limits.',
    skills: [
      { name: 'Server-Side GTM (sGTM)', level: 'Expert', details: 'Cloud Run / GCP server containers, HTTP routing, and first-party cookie extension.' },
      { name: 'Meta Conversions API (CAPI)', level: 'Expert', details: 'Server-to-server event dispatch, event_id deduplication, and high EMQ scoring (8.5+).' },
      { name: 'Google Enhanced Conversions', level: 'Expert', details: 'SHA-256 hashed first-party user data transmission for web and offline conversion matching.' },
      { name: 'Google Consent Mode v2', level: 'Expert', details: 'Cookieless ping integration, regional default consent states, and behavioral modeling.' }
    ]
  },
  {
    id: 'analytics-measurement',
    title: 'Analytics & Measurement Systems',
    icon: 'BarChart3',
    description: 'Transforming website telemetry into clear marketing decisions with GA4, GTM, and custom dashboards.',
    skills: [
      { name: 'Google Analytics 4 (GA4)', level: 'Expert', details: 'Closed funnel exploration reports, custom dimension mapping, and BigQuery data exports.' },
      { name: 'Google Tag Manager (GTM Web)', level: 'Expert', details: 'Container architecture, custom JavaScript variables, trigger sequencing, and regex filters.' },
      { name: 'Data Layer Architecture', level: 'Expert', details: 'Structured e-commerce event pushes, form dataLayer variables, and user ID stitching.' },
      { name: 'Attribution Modeling', level: 'Expert', details: 'Reconciling data-driven vs. first/last-click attribution across multi-touch journeys.' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Funnel Architecture & CRO',
    icon: 'Layers',
    description: 'End-to-end customer acquisition and engagement systems built on human psychology and conversion architecture.',
    skills: [
      { name: 'Customer Journey & Funnels (TOFU/MOFU/BOFU)', level: 'Expert', details: 'Intent mapping, stage-specific offer alignment, and lead velocity optimization.' },
      { name: 'Conversion Rate Optimization (CRO)', level: 'Expert', details: 'Landing page friction elimination, A/B split testing, and form conversion UX.' },
      { name: 'Offer Framing & Value Proposition', level: 'Expert', details: 'Crafting high-converting hooks, value stacks, and risk-reversal guarantees.' },
      { name: 'Organic Search & Technical SEO', level: 'Advanced', details: 'Search intent optimization, topic clustering, and Google Search Console diagnostics.' }
    ]
  }
];

export const MARKETING_FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    id: 1,
    title: 'Unit Economics & Margin Baseline',
    subtitle: 'Establish allowable CAC & Target ROAS',
    category: 'Strategy',
    description: 'Before spending a single rupee on ads, we calculate your gross margins, repeat purchase rates, and target allowable CAC.',
    keyActions: ['Gross margin audit', 'Allowable CAC modeling', 'Blended ROAS targets'],
    deliverable: 'Unit Economics & Budget Plan'
  },
  {
    id: 2,
    title: 'Audience & Search Intent Mapping',
    subtitle: 'Commercial Intent & Competitor Gaps',
    category: 'Strategy',
    description: 'Identifying high-converting search queries, customer pain points, and creative angles that competitors overlook.',
    keyActions: ['Commercial keyword intent analysis', 'Competitor creative teardowns', 'Persona trigger matrix'],
    deliverable: 'Intent & Hook Strategy'
  },
  {
    id: 3,
    title: 'High-Converting Offer & Funnel CRO',
    subtitle: 'Frictionless Conversion Architecture',
    category: 'Strategy',
    description: 'Designing landing page flows that answer objections instantly, reduce cognitive friction, and maximize conversion rates.',
    keyActions: ['Landing page wireframing', 'Value proposition enhancement', 'Micro-conversion checkout review'],
    deliverable: 'Conversion-Optimized Funnel'
  },
  {
    id: 4,
    title: 'Paid Media Campaign Architecture',
    subtitle: 'Google Ads, Meta Ads & PMax Deploy',
    category: 'Traffic',
    description: 'Deploying structured ad accounts with clear separation between creative testing sandboxes and broad scaling campaigns.',
    keyActions: ['Single-Intent Google search groups', 'Meta 3x2x2 dynamic creative testing', 'Negative keyword sculpting'],
    deliverable: 'Active Campaign Infrastructure'
  },
  {
    id: 5,
    title: 'Data Layer & Client-Side GTM',
    subtitle: 'Standardized E-commerce & Form Telemetry',
    category: 'Measurement',
    description: 'Instrumenting bulletproof dataLayer pushes to capture every user click, checkout step, and verified lead submission.',
    keyActions: ['GTM web container configuration', 'Custom event trigger sequencing', 'UTM and GCLID persistence'],
    deliverable: 'Validated Client-Side Tracking'
  },
  {
    id: 6,
    title: 'Server-Side Tagging & Meta CAPI',
    subtitle: 'First-Party Cloud Signals & Deduplication',
    category: 'Measurement',
    description: 'Deploying sGTM containers on GCP/Cloudflare to send server-to-server signals with SHA-256 hashed data and event_id matching.',
    keyActions: ['Meta CAPI server dispatch', 'Event_id deduplication (EMQ 8.5+)', 'Google Enhanced Conversions'],
    deliverable: 'Resilient Server Measurement Layer'
  },
  {
    id: 7,
    title: 'Attribution & CRM Reconciliation',
    subtitle: 'Single-Source Truth Against Backend Revenue',
    category: 'Measurement',
    description: 'Connecting ad platform reported numbers with your actual bank receipts and CRM closed deals to eliminate ghost conversions.',
    keyActions: ['CRM GCLID attribution match', 'Multi-touch attribution analysis', 'Looker Studio single-pane dashboard'],
    deliverable: 'Single-Source Performance Dashboard'
  },
  {
    id: 8,
    title: 'Systematic Scaling & Creative Sprints',
    subtitle: 'Compound Profitable Ad Spend',
    category: 'Growth',
    description: 'Shifting budget aggressively to top-performing ads, iterating new creative hooks weekly, and expanding profitable spend.',
    keyActions: ['Marginal ROAS scaling', 'Weekly creative iteration cycles', 'Landing page A/B testing sprints'],
    deliverable: 'Compounding Revenue Growth Engine'
  }
];

export const BUSINESS_SERVICES: ServiceDetail[] = [
  {
    id: 'service-performance-marketing',
    title: 'Paid Media Management (Meta & Google Ads)',
    subtitle: 'High-intent acquisition campaigns engineered for profitable ROAS and qualified pipeline.',
    badge: 'Growth & Media Buying',
    description: 'End-to-end management of paid advertising campaigns across Google Search, Performance Max, YouTube, and Meta Ads (Facebook & Instagram). We focus on allowable CAC, ROAS targets, and continuous creative testing.',
    whoItIsFor: [
      'E-commerce & D2C brands scaling beyond stagnant ROAS',
      'High-ticket lead generation & B2B companies needing qualified pipeline',
      'Startups and growth companies launching new paid acquisition funnels',
      'Companies wanting disciplined budget allocation and transparent reporting'
    ],
    deliverables: [
      'Comprehensive competitor & search intent audit',
      'Full campaign architecture & negative keyword sculpting',
      'Meta Dynamic Creative Testing (DCT 3x2x2) frameworks',
      'Conversion Rate Optimization (CRO) recommendations for landing pages',
      'Transparent weekly performance & attribution reporting'
    ],
    ctaText: 'Discuss Paid Media Management',
    intent: 'work'
  },
  {
    id: 'service-tracking-ecommerce',
    title: 'Advanced Tracking & Server-Side CAPI — Ecommerce',
    subtitle: 'Clean purchase tracking, GA4 enhanced ecommerce, and server-side signal recovery.',
    badge: 'Specialized Tracking Service',
    description: 'Specialized measurement service for online stores on Shopify, WooCommerce, or custom platforms. Ensure every checkout, purchase, and product interaction is accurately recorded in GA4, Google Ads, and Meta Ads.',
    whoItIsFor: [
      'Shopify & WooCommerce online stores with missing purchase events',
      'Brands experiencing discrepancies between Shopify revenue and GA4 reports',
      'Stores suffering from Safari ITP and ad-blocker attribution loss',
      'Businesses wanting to deploy Server-Side GTM and Meta Conversions API'
    ],
    deliverables: [
      'Enhanced Ecommerce Data Layer push configuration',
      'GA4 Ecommerce purchase, add_to_cart & view_item events',
      'Meta Conversions API (CAPI) with event_id deduplication (EMQ 8.5+)',
      'Google Ads Enhanced Conversions with hashed first-party user data',
      'Server-Side GTM deployment on Google Cloud Platform / Cloudflare'
    ],
    ctaText: 'Get an Ecommerce Tracking Audit',
    intent: 'tracking'
  },
  {
    id: 'service-tracking-leads',
    title: 'Advanced Tracking & Measurement — B2B & Lead Gen',
    subtitle: 'Accurate lead tracking, form verification, and CRM source attribution.',
    badge: 'Specialized Tracking Service',
    description: 'Ensure you know exactly which keyword, ad, or campaign generated each qualified lead. We eliminate duplicate button-click counts and pass real conversion signals back to Google & Meta.',
    whoItIsFor: [
      'B2B companies, clinics, real estate, education institutes & professional services',
      'Businesses where Google Ads reports conversions that never appear in CRM',
      'Companies running multi-step forms, Calendly/WhatsApp chats, or call extensions',
      'Agencies needing robust lead verification setup for client accounts'
    ],
    deliverables: [
      'Verified form submission triggers (filtering out ghost & duplicate clicks)',
      'Hidden form fields capturing GCLID, UTM source/medium/campaign & client ID',
      'Google Ads Offline Conversion Import (OCI) workflow setup',
      'Meta CAPI lead generation setup with user data hashing',
      'Single-source Looker Studio dashboard connecting ad spend to CRM status'
    ],
    ctaText: 'Get a Lead Tracking Audit',
    intent: 'tracking'
  },
  {
    id: 'service-consulting',
    title: 'Paid Media Account Audit & Growth Advisory',
    subtitle: 'Comprehensive 45-point health check, wasted spend removal, and strategic roadmaps.',
    badge: 'Strategic Advisory',
    description: 'In-depth audit covering paid search structure, Meta creative fatigue, attribution leakages, and funnel friction. Perfect for founders and marketing directors wanting clear, objective guidance.',
    whoItIsFor: [
      'Founders wanting an unbiased audit of current ad spend & agency performance',
      'In-house marketing teams looking to resolve campaign bottlenecks and scale',
      'Companies planning a major product launch or scaling push',
      'Brands experiencing rising CAC and declining ROAS'
    ],
    deliverables: [
      '45-Point comprehensive ad account & measurement audit report',
      'Wasted spend identification & immediate negative sculpting plan',
      'Custom creative testing matrix & ad copy recommendations',
      'Actionable 90-day growth and measurement roadmap',
      '1-on-1 strategic consultation video call with recorded walkthrough'
    ],
    ctaText: 'Book an Account Audit',
    intent: 'consulting'
  }
];

export const PRACTICAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-lead-tracking-audit',
    title: 'Lead Discrepancy Elimination & Offline Conversion Import System',
    category: 'Tracking',
    badge: 'Tracking Architecture',
    challenge: 'A high-ticket B2B service company noticed Google Ads reported 240 conversions while their CRM only recorded 135 actual leads. The client was optimizing against duplicate and ghost button clicks.',
    diagnosis: 'Google Ads tag was firing on button click rather than server-confirmed thank-you state. In addition, Safari ITP was truncating UTM cookies and GCLID parameters were getting stripped upon subdomain redirects.',
    strategy: 'Implemented a standardized dataLayer.push() on verified API response, established hidden form input fields capturing GCLID/UTMs, and built an automated offline conversion import workflow.',
    implementation: [
      'GTM trigger updated to custom event: "lead_form_submitted_verified"',
      'Session storage handler preserving GCLID across multi-step domain redirects',
      'Meta Conversions API (CAPI) configured with SHA256 hashed user email & phone',
      'Daily automated CSV upload of qualified stage conversions back into Google Ads Smart Bidding'
    ],
    measurement: 'Event match quality (EMQ) rose from 4.2 to 8.9. Discrepancy between Google Ads and CRM dropped from 44% to under 2.5%.',
    outcome: 'Smart Bidding algorithm shifted 40% of ad spend away from low-quality spam keywords toward high-value enrollments, reducing cost per qualified deal by 34%.',
    tag: 'Verified Client Case Study',
    metrics: [
      { label: 'CRM Discrepancy', value: '< 2.5%' },
      { label: 'Event Match Quality', value: '8.9 / 10' },
      { label: 'Cost Per Qualified Deal', value: '-34%' }
    ]
  },
  {
    id: 'cs-meta-scaling',
    title: 'Performance Creative Testing & Broad CBO Scaling Framework',
    category: 'Performance',
    badge: 'Media Buying Strategy',
    challenge: 'A growing consumer brand faced rising CAC ($48 to $92) and severe ad fatigue after spending 3 months on narrow interest-based audiences.',
    diagnosis: 'Over-segmentation into narrow interest groups caused high CPMs and audience saturation. Ads lacked modular hooks and emotional value propositions for distinct buyer segments.',
    strategy: 'Transitioned to an 80/20 Budget Structure: 20% dedicated to Dynamic Creative Testing (DCT 3x2x2) sandboxes and 80% to Broad CBO scaling campaigns.',
    implementation: [
      'Built 12 problem-aware hook variations targeting key customer triggers',
      'Constructed a 3-tier retargeting safety net for video 50%+ viewers and engaged visitors',
      'Configured Google Tag Gateway and Consent Mode v2 for enhanced compliance'
    ],
    measurement: 'Monitored First-Time Impression Ratio and Hook Retention at 3 seconds.',
    outcome: 'Identified 2 breakout video creatives that sustained stable CAC under $39 at 3.5x daily ad spend volume for over 90 days.',
    tag: 'Verified Client Case Study',
    metrics: [
      { label: 'Sustained CAC', value: '$39' },
      { label: 'Spend Scaling', value: '3.5x' },
      { label: 'Hook Retention', value: '+42%' }
    ]
  },
  {
    id: 'cs-ecommerce-tracking',
    title: 'Shopify GA4 Enhanced Ecommerce & Server-Side CAPI Setup',
    category: 'Ecommerce',
    badge: 'Ecommerce Measurement',
    challenge: 'An online lifestyle apparel store suffered a 30% drop in reported Meta purchase events following iOS 14.5+ privacy updates, leading to degraded Advantage+ campaign efficiency.',
    diagnosis: 'The store relied solely on browser-side pixel fires which were frequently blocked by Safari ITP and ad-blocker extensions. Order webhook deduplication was missing.',
    strategy: 'Built a dual-tagging architecture combining client-side GTM with Server-Side GTM deployed on Cloudflare/GCP, passing unique event_id tokens on all purchase events.',
    implementation: [
      'Structured Shopify checkout script pushing customer order ID as event_id',
      'Server-side Meta CAPI integration forwarding hashed email, phone, city, and IP address',
      'Enhanced Google Ads purchase tracking with true order revenue and transaction IDs',
      'Custom GA4 purchase validation dashboard comparing Shopify net orders to GA4 receipts'
    ],
    measurement: 'Purchases recorded in Meta Ads increased by 28% without changing ad spend. Event Match Quality reached 9.1/10.',
    outcome: 'Meta ad delivery algorithms regained full visibility into high-value repeat buyers, lifting overall blended ROAS from 2.1x to 3.4x within 45 days.',
    tag: 'Verified Client Case Study',
    metrics: [
      { label: 'Event Match Quality', value: '9.1 / 10' },
      { label: 'Signal Recovery', value: '+28%' },
      { label: 'Blended ROAS', value: '3.4x' }
    ]
  },
  {
    id: 'cs-b2b-lead-gen',
    title: 'High-Intent Google Search Lead Engine for Professional Services',
    category: 'Lead Generation',
    badge: 'Search Campaign Strategy',
    challenge: 'A specialized logistics consultancy was wasting $4,000/month on generic broad match keywords that brought in low-ticket inquiries and job applications instead of corporate contracts.',
    diagnosis: 'Search campaigns lacked negative keyword sculpting and relied on "Maximize Clicks" bidding, favoring cheap consumer queries over high-intent B2B search terms.',
    strategy: 'Rebuilt the account around Single Intent Ad Groups (SIAGs), switched to tCPA smart bidding, and implemented strict negative keyword lists (e.g., jobs, salary, free, definition).',
    implementation: [
      'Granular phrase match keyword architecture focused on "commercial logistics solutions" and "enterprise freight audit"',
      'Dynamic Keyword Insertion (DKI) in search ad headlines matching exact commercial intent',
      'Landing page headline synchronization with search term keywords to boost Quality Score (QS 8-10)',
      'Direct form capture with corporate email domain validation'
    ],
    measurement: 'Quality Score improved across 85% of keywords, reducing average CPC by 26%.',
    outcome: 'Corporate qualified leads increased by 115% while monthly ad spend decreased by 18%.',
    tag: 'Verified Client Case Study',
    metrics: [
      { label: 'Qualified Leads', value: '+115%' },
      { label: 'Average CPC', value: '-26%' },
      { label: 'Ad Spend Waste', value: '-18%' }
    ]
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'insight-beyond-tools',
    title: "The Performance Marketer's Guide: Why Creative & Systems Beat Button Clicking",
    summary: 'Why memorizing the latest Facebook Ads UI or Google Ads interface leaves you vulnerable, and how understanding unit economics and customer intent creates compounding scale.',
    category: 'Strategy',
    readTime: '5 min read',
    date: 'August 2026',
    featured: true,
    takeaways: [
      'Platform interfaces change every 6 months; human buying psychology does not.',
      'How to connect audience intent to offer framing before touching campaign settings.',
      'The 3 core questions every brand must answer before spending $1 on ads.'
    ],
    contentSnippet: 'The biggest mistake brands make is treating performance marketing as software navigation. Knowing where the "Campaign Objective" dropdown is located is not marketing; knowing why a prospect chooses your offer over a competitor is.'
  },
  {
    id: 'insight-broken-tracking',
    title: 'The Hidden Danger of Ghost Conversions: Why Ad Metrics Lie to You',
    summary: 'How button-click tags and lack of CRM verification inflate your reported ROAS while hiding real acquisition losses.',
    category: 'Tracking',
    readTime: '7 min read',
    date: 'July 2026',
    featured: true,
    takeaways: [
      'The difference between a button click and a verified server receipt.',
      'How Safari ITP and ad blockers strip attribution parameters like GCLID and fbclid.',
      'A practical step-by-step checklist to verify your GTM triggers against backend CRM data.'
    ],
    contentSnippet: 'If your Google Ads dashboard shows 100 conversions at $20 CPA, but your sales team only has 50 leads in the CRM, your smart bidding algorithm is learning from false positives. Here is how we build verified triggers that prevent algorithm corruption.'
  },
  {
    id: 'insight-meta-dct-framework',
    title: 'The 3x2x2 Dynamic Creative Testing (DCT) Playbook for Meta Ads',
    summary: 'A disciplined framework for discovering winning hooks, angles, and visual formats without burning budget on random ad testing.',
    category: 'Meta Ads',
    readTime: '6 min read',
    date: 'June 2026',
    takeaways: [
      'Structuring 3 hooks (problem, curiosity, social proof) against 2 bodies and 2 creative formats.',
      'How to evaluate breakout creatives using 3-second hook rate and outbound CTR.',
      'Graduating winning creative Post IDs into Broad CBO scaling campaigns without resetting learning phase.'
    ],
    contentSnippet: 'Stop guessing which ad will work. By running modular DCT sandboxes with strict budget caps, you let consumer engagement metrics reveal winning creative angles before allocating large scale budgets.'
  },
  {
    id: 'insight-server-side-basics',
    title: 'Server-Side GTM Explained for Marketers & Founders (Without Complex Code)',
    summary: 'A plain-English explanation of why server-side tagging matters, how it protects first-party data, and when a business actually needs it.',
    category: 'Tracking',
    readTime: '8 min read',
    date: 'April 2026',
    takeaways: [
      'Client-side vs. server-side: the postal service analogy that makes it simple.',
      'How sGTM improves website page load speed and Core Web Vitals.',
      'Deduplicating browser and server events using event_id tokens.'
    ],
    contentSnippet: 'Think of client-side tracking like every visitor carrying 10 heavy tracking scripts in their browser. Server-side tracking takes that weight off the user browser, sending one clean signal to your cloud server which then distributes it securely to Google, Meta, and analytics.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikram Singhania',
    role: 'Founder & Managing Director',
    organization: 'Aura Lifestyle D2C',
    feedback: 'Ashish completely transformed our Meta Ads and server-side tracking. We were losing nearly 35% of our purchase attribution after iOS updates. With his sGTM & CAPI setup, our Event Match Quality jumped to 9.2/10 and our blended ROAS scaled from 2.2x to 3.8x within 60 days.',
    isVerified: true,
    type: 'Founder',
    rating: 5,
    projectType: 'Meta Ads & sGTM Setup',
    date: 'August 2026'
  },
  {
    id: 'test-2',
    name: 'Neha Chawla',
    role: 'Head of Growth Marketing',
    organization: 'Apex EdTech & Career Academy',
    feedback: 'Ashish resolved our chronic lead discrepancy issue where Google Ads reported 200+ conversions that never showed in our CRM. He audited our funnel, deployed clean GTM dataLayers and offline conversion imports. Cost per verified enrollment dropped by 34%. Highly recommended.',
    isVerified: true,
    type: 'Brand Director',
    rating: 5,
    projectType: 'Google Ads & Lead Tracking',
    date: 'July 2026'
  },
  {
    id: 'test-3',
    name: 'Sameer Kulkarni',
    role: 'Co-Founder & CEO',
    organization: 'Nova Logistics Tech',
    feedback: 'Ashish’s 45-point account audit was an eye-opener. He identified over ₹1.5L/month of wasted broad-match ad spend that was generating job seeker clicks instead of enterprise contracts. We restructured our campaigns around his intent framework and saw immediate pipeline quality improvement.',
    isVerified: true,
    type: 'Founder',
    rating: 5,
    projectType: 'Paid Media Account Audit',
    date: 'June 2026'
  },
  {
    id: 'test-4',
    name: 'Pooja Verma',
    role: 'Senior Performance Marketer',
    organization: 'Velvet Glow E-commerce',
    feedback: 'Working with Ashish on our paid media strategy gave us an unfair advantage. His Dynamic Creative Testing (DCT 3x2x2) framework eliminated guesswork, allowing our brand to consistently identify winning creative angles before scaling ad budgets.',
    isVerified: true,
    type: 'Professional',
    rating: 5,
    projectType: 'Meta Creative Testing',
    date: 'May 2026'
  },
  {
    id: 'test-5',
    name: 'Alok Tripathi',
    role: 'Managing Partner',
    organization: 'Zenith Growth Partners',
    feedback: 'Whenever our agency takes on an e-commerce client with broken GA4 or server-side CAPI needs, Ashish is our go-to measurement specialist. His technical rigor with GTM, GA4, and server containers is world-class.',
    isVerified: true,
    type: 'Corporate',
    rating: 5,
    projectType: 'Tracking Architecture',
    date: 'April 2026'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Performance Marketing',
    question: 'What types of businesses do you typically work with for Performance Marketing?',
    answer: 'I specialize in two primary verticals: 1) E-commerce & D2C brands looking to scale profitably on Meta Ads and Google Performance Max, and 2) High-Ticket B2B & Service-based businesses needing intent-driven Google Search and paid social funnels that feed real sales pipelines.'
  },
  {
    category: 'Performance Marketing',
    question: 'How do you structure and test ad creatives on Meta Ads?',
    answer: 'I use a structured 80/20 budget framework. 20% of the ad spend is dedicated to Dynamic Creative Testing (DCT 3x2x2) sandboxes — testing 3 distinct hooks, 2 core messaging angles, and 2 visual formats. Winning combinations are graduated into broad CBO scaling campaigns without resetting platform learning phases.'
  },
  {
    category: 'Tracking & Measurement',
    question: 'Why do I need a Server-Side GTM & Meta CAPI setup?',
    answer: 'Browser-based pixels are blocked by Safari ITP, Firefox, Brave, and ad blockers, causing businesses to lose 20-35% of their purchase signals. Server-Side GTM (sGTM) sends signals directly from your cloud server to Meta and Google with SHA-256 hashed customer parameters, recovering lost attribution and training ad algorithms on true purchase values.'
  },
  {
    category: 'Tracking & Measurement',
    question: 'How do you eliminate discrepancies between Google Ads and our CRM leads?',
    answer: 'Most discrepancies occur when ad tags fire on button clicks rather than server-verified thank you states, or when UTMs/GCLIDs are stripped across domain redirects. I implement custom dataLayer verification triggers, hidden form parameter capture, and Google Ads Offline Conversion Imports (OCI) to ensure your ads optimize only against qualified leads.'
  },
  {
    category: 'Services & Audits',
    question: 'What does your Paid Media & Tracking Account Audit include?',
    answer: 'The audit is a comprehensive 45-point deep dive covering search term intent, negative keyword sculpting, Meta audience overlap, creative fatigue, dataLayer accuracy, GA4 purchase reconciliation, and conversion event deduplication. You receive an actionable report and a 1-on-1 walkthrough call with next-step priorities.'
  },
  {
    category: 'Working Together',
    question: 'What is your typical engagement model and turnaround time?',
    answer: 'For one-time tracking and measurement setups (sGTM, CAPI, GA4 audits), turnaround is typically 3 to 7 business days. For ongoing Performance Marketing management, I work on a monthly growth retainer with clear KPI targets (ROAS / CPA) and transparent weekly reporting.'
  },
  {
    category: 'Working Together',
    question: 'How do you handle reporting and communication?',
    answer: 'You get access to a live, automated Looker Studio dashboard connecting ad spend with real backend revenue/leads, along with weekly async Loom video breakdowns, bi-weekly strategic sync calls, and direct Slack/WhatsApp channel access.'
  }
];

export const TOOL_STACK = [
  { name: 'Google Tag Manager', category: 'Tracking', badge: 'GTM Web & Server', icon: 'Tag' },
  { name: 'Google Analytics 4', category: 'Analytics', badge: 'Custom Events & Funnels', icon: 'BarChart' },
  { name: 'Server-Side Tagging', category: 'Tracking', badge: 'sGTM on GCP & Cloudflare', icon: 'Server' },
  { name: 'Meta Ads Manager', category: 'Advertising', badge: 'Advantage+ & DCT Testing', icon: 'Globe' },
  { name: 'Google Ads', category: 'Advertising', badge: 'Search, PMax & YouTube', icon: 'Megaphone' },
  { name: 'Meta Conversions API', category: 'Tracking', badge: 'Event Deduplication & CAPI', icon: 'ShieldCheck' },
  { name: 'Google Enhanced Conversions', category: 'Tracking', badge: 'SHA256 Hashed Signals', icon: 'Lock' },
  { name: 'Google Search Console', category: 'SEO', badge: 'Search Intent & Indexing', icon: 'Search' },
  { name: 'Looker Studio', category: 'Reporting', badge: 'Custom BI Dashboards', icon: 'PieChart' },
  { name: 'Python for Marketers', category: 'Data & AI', badge: 'Data Cleansing & Analysis', icon: 'Code' },
  { name: 'SQL for Marketers', category: 'Data & AI', badge: 'Cohort & Funnel Queries', icon: 'Database' },
  { name: 'n8n & Make', category: 'Automation', badge: 'Webhook CRM Syncing', icon: 'Zap' }
];
