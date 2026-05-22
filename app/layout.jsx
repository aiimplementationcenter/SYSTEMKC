import './globals.css';

export const metadata = {
  title: 'S.Y.S.T.E.M. KC - AI Automation Consulting',
  description: 'AI automation consulting for Kansas City small businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="nav" data-screen-label="Nav">
      <div className="wrap nav-inner">
        <a className="nav-brand" href="/" aria-label="S.Y.S.T.E.M. KC home">
          <img src="/assets/SYSTEM Logo.png" alt="S.Y.S.T.E.M. KC" />
        </a>
        <div className="nav-links">
          <a href="/services/">Services</a>
          <a href="/industries/">Industries</a>
          <a href="/use-cases/">Use Cases</a>
          <a href="/results/">Results</a>
          <a href="/about/">About</a>
          <a href="/blog/">Blog</a>
        </div>
        <a className="nav-cta" href="/contact/">Book a call &nbsp;→</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="foot" data-screen-label="Footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/assets/system-logo-light.png" alt="S.Y.S.T.E.M. KC" />
            <p className="blurb">AI automation consulting for Kansas City small businesses. Save Yourself Stress, Time, Energy, Money. Learn, Teach, Build AI.</p>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <a href="/services/system-audit-kansas-city/">The S.Y.S.T.E.M. Audit</a>
            <a href="/services/ai-training-kansas-city/">Teach Me (Training)</a>
            <a href="/services/done-for-you-automation-kansas-city/">Build It For Me</a>
            <a href="/services/monthly-automation-support-kansas-city/">Monthly Retainer</a>
          </div>
          <div className="foot-col">
            <h5>Industries</h5>
            <a href="/industries/hvac-plumbing-automation-kansas-city/">HVAC &amp; Plumbing</a>
            <a href="/industries/real-estate-automation-kansas-city/">Real Estate</a>
            <a href="/industries/restaurant-automation-kansas-city/">Restaurants</a>
            <a href="/industries/law-firm-automation-kansas-city/">Law Firms</a>
            <a href="/industries/medical-dental-automation-kansas-city/">Medical &amp; Dental</a>
            <a href="/industries/salon-spa-automation-kansas-city/">Salons &amp; Spas</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="/about/">About</a>
            <a href="/results/">Results</a>
            <a href="/blog/">Blog</a>
            <a href="/contact/">Contact</a>
            <a href="/free-guide/">Free Guide</a>
            <a href="/faq/">FAQ</a>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 S.Y.S.T.E.M. KC LLC · Kansas City, MO · (816) 962-2111</div>
          <div className="legal">
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms/">Terms &amp; SMS</a>
            <a href="/cookies/">Cookies</a>
            <a href="/accessibility/">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

