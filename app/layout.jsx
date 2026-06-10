import './globals.css';
import StickyRibbon from './components/StickyRibbon';

export const metadata = {
  title: 'S.Y.S.T.E.M. KC â€” Add $20,000 in New Revenue in 60 Days. Guaranteed.',
  description: 'We teach local service business owners how to get more customers, earn more from each one, and build a business that runs without them. The 60-Day Profit Challenge: add $20,000 in new revenue or we work for free.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <StickyRibbon />
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
          <a href="/the-challenge/">The Challenge</a>
          <a href="/the-system/">How It Works</a>
          <a href="/done-for-you/">Done For You</a>
          <a href="/results/">Results</a>
          <a href="/about/">About</a>
          <a href="/kansas-city/" className="nav-local">Kansas City</a>
        </div>
        <a className="nav-cta" href="/apply/">Apply Now &nbsp;â†’</a>
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
            <img src="/assets/SYSTEM Logo.png" alt="S.Y.S.T.E.M. KC" />
            <p className="blurb">We rebuild how your service business makes money â€” then install the systems and workflows that run it on autopilot.</p>
            <p className="blurb" style={{marginTop: '10px', fontSize: '13px'}}>S.Y.S.T.E.M. = Save Yourself Stress, Time, Energy, Money</p>
          </div>
          <div className="foot-col">
            <h5>Work Together</h5>
            <a href="/the-challenge/">The 60-Day Challenge</a>
            <a href="/done-for-you/">Done For You</a>
            <a href="/apply/">Apply</a>
            <a href="/contact/">Book a Call</a>
          </div>
          <div className="foot-col">
            <h5>Learn More</h5>
            <a href="/the-system/">How It Works</a>
            <a href="/results/">Results</a>
            <a href="/about/">About</a>
            <a href="/faq/">FAQ</a>
            <a href="/blog/">Blog</a>
          </div>
          <div className="foot-col">
            <h5>Kansas City</h5>
            <a href="/kansas-city/">KC Local Services</a>
            <a href="/industries/hvac-plumbing-automation-kansas-city/">HVAC &amp; Plumbing</a>
            <a href="/industries/real-estate-automation-kansas-city/">Real Estate</a>
            <a href="/industries/restaurant-automation-kansas-city/">Restaurants</a>
            <a href="/industries/law-firm-automation-kansas-city/">Law Firms</a>
            <a href="/industries/medical-dental-automation-kansas-city/">Medical &amp; Dental</a>
            <a href="/industries/salon-spa-automation-kansas-city/">Salons &amp; Spas</a>
          </div>
        </div>
        <div className="foot-bot">
          <div>Â© 2026 S.Y.S.T.E.M. KC LLC Â· Kansas City, MO Â· <a href="tel:8169622111" style={{color: 'inherit'}}>(816) 962-2111</a></div>
          <div className="legal">
            <a href="/privacy-policy/">Privacy</a>
            <a href="/terms/">Terms &amp; SMS</a>
            <a href="/cookies/">Cookies</a>
            <a href="/accessibility/">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
