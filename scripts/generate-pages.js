#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

// Page definitions
const pages = [
  // Services
  { dir: 'services', title: 'Our Services', slug: 'services' },
  { dir: 'services/system-audit-kansas-city', title: 'The S.Y.S.T.E.M. Audit', slug: 'audit' },
  { dir: 'services/ai-training-kansas-city', title: 'Teach Me (AI Training)', slug: 'training' },
  { dir: 'services/done-for-you-automation-kansas-city', title: 'Build It For Me', slug: 'build' },
  { dir: 'services/monthly-automation-support-kansas-city', title: 'Monthly Retainer', slug: 'retainer' },

  // Industries
  { dir: 'industries', title: 'Industries We Serve', slug: 'industries' },
  { dir: 'industries/hvac-plumbing-automation-kansas-city', title: 'HVAC & Plumbing Automation', slug: 'hvac' },
  { dir: 'industries/real-estate-automation-kansas-city', title: 'Real Estate Automation', slug: 'realestate' },
  { dir: 'industries/restaurant-automation-kansas-city', title: 'Restaurant Automation', slug: 'restaurant' },
  { dir: 'industries/law-firm-automation-kansas-city', title: 'Law Firm Automation', slug: 'law' },
  { dir: 'industries/medical-dental-automation-kansas-city', title: 'Medical & Dental Automation', slug: 'medical' },
  { dir: 'industries/salon-spa-automation-kansas-city', title: 'Salon & Spa Automation', slug: 'salon' },

  // Results
  { dir: 'results', title: 'Results', slug: 'results' },

  // FAQ
  { dir: 'faq', title: 'FAQ', slug: 'faq' },

  // Use Cases
  { dir: 'use-cases', title: 'Use Cases', slug: 'usecases' },

  // Blog
  { dir: 'blog', title: 'Blog', slug: 'blog' },

  // Legal
  { dir: 'privacy-policy', title: 'Privacy Policy', slug: 'privacy' },
  { dir: 'terms', title: 'Terms & Conditions', slug: 'terms' },
  { dir: 'cookies', title: 'Cookies', slug: 'cookies' },
  { dir: 'accessibility', title: 'Accessibility', slug: 'accessibility' },

  // Lead Gen
  { dir: 'free-guide', title: 'Free Guide', slug: 'guide' },
  { dir: 'free-audit', title: 'Free Audit', slug: 'freeaudit' }
];

function createPageTemplate(title, slug) {
  return `export const metadata = {
  title: '${title} — S.Y.S.T.E.M. KC',
  description: 'S.Y.S.T.E.M. KC - Kansas City AI Automation Consulting',
};

export default function Page() {
  return (
    <main>
      <div className="wrap">
        <div className="crumbs">
          <a href="/">Home</a>
          <span className="sep">·</span>
          <span className="here">${title}</span>
        </div>
      </div>

      <header className="page-hero">
        <div className="wrap">
          <span className="label">Coming soon</span>
          <h1>${title}</h1>
          <p className="lede">This page is coming soon. In the meantime, <a href="/contact/" style={{color: 'var(--c-e)', textDecoration: 'underline'}}>book a call</a> to learn more.</p>
        </div>
      </header>

      <section className="cta-strip">
        <div className="wrap" style={{ position: 'relative' }}>
          <h2 style={{ color: '#F4F1EA', maxWidth: '14ch', fontFamily: 'var(--sans)', fontSize: 'clamp(40px,6vw,84px)', fontWeight: '900', letterSpacing: '-.04em', lineHeight: '.95' }}>
            Ready to get <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: '400', color: 'var(--c-s2)' }}>started?</em>
          </h2>
          <p style={{ marginTop: '24px', fontSize: 'clamp(17px,1.6vw,21px)', color: '#C5BEAE', maxWidth: '52ch', lineHeight: '1.5' }}>
            Let's talk about your business and see if we're a fit.
          </p>
          <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <a href="/contact/" className="btn btn--invert">Book a free 20-min call <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
`;
}

// Create directories and pages
pages.forEach(page => {
  const dir = path.join(appDir, page.dir);
  const filePath = path.join(dir, 'page.jsx');

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Create page if it doesn't already exist
  if (!fs.existsSync(filePath)) {
    const content = createPageTemplate(page.title, page.slug);
    fs.writeFileSync(filePath, content);
    console.log(`✓ Created ${filePath}`);
  }
});

console.log(`\n✓ Generated ${pages.length} pages`);
