/**
 * ============================================================================
 * SITE IMAGES CONFIGURATION (Ashish Mishra Portfolio)
 * ============================================================================
 * 
 * 📌 HOW TO UPDATE OR ADD YOUR IMAGES:
 * ----------------------------------------------------------------------------
 * 1. You can paste any direct web image URL (from Cloudinary, Imgur, Google Drive,
 *    ImgBB, AWS S3, LinkedIn, Unsplash, or your own hosting server).
 * 
 * 2. Alternatively, you can drop image files into the `/public/` folder 
 *    (e.g., `/public/ashish-photo.jpg`) and reference them here as `'/ashish-photo.jpg'`.
 * 
 * 3. Any image URL you set in this file is PERMANENT and will be 100% VISIBLE
 *    to all live visitors, clients, and recruiters when your website is published!
 * ============================================================================
 */

export const SITE_IMAGES = {
  // 1. Main Hero Portrait Photo (Shown on the homepage hero card)
  heroPortrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',

  // 2. About Page Profile Photo (Shown on the About Me narrative page)
  aboutProfile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',

  // 3. Workshop & Classroom / Training Photo (Shown on the About / Mentorship section)
  classroomWorkspace: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',

  // 4. Social Sharing & Meta Preview Banner (OpenGraph preview when link is shared)
  socialBanner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',

  // 5. Training & Certifications Logos / Badges
  ndmitLogoBadge: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
};

// Preset photos available for quick switching inside the in-app photo switcher
export const PRESET_PORTRAITS = [
  {
    id: 'preset-1',
    label: 'Performance Strategist',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'preset-2',
    label: 'Executive Modern',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'preset-3',
    label: 'Tech Growth Lead',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'preset-4',
    label: 'Studio Dark Profile',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
  }
];
