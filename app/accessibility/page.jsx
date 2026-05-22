export const metadata = {
  title: 'Accessibility Statement | S.Y.S.T.E.M. KC',
  description: 'S.Y.S.T.E.M. KC is committed to WCAG 2.1 AA-level web accessibility. How to report an issue.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Accessibility</span></div></div>
<header className="page-hero"><div className="wrap"><span className="label">Accessibility</span><h1>Accessibility Statement.</h1><p className="lede" style={{fontSize: '15px', color: 'var(--dim)', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '.08em', fontWeight: '700'}}>Last updated: May 1, 2026</p></div></header>
<section className="section"><div className="wrap-narrow"><div className="prose">
<p>S.Y.S.T.E.M. KC is committed to making our website usable for everyone, regardless of ability. We aim to meet or exceed WCAG 2.1 AA accessibility standards.</p>
<h2>What we have done</h2>
<ul>
  <li>Designed our site with sufficient color contrast for text and interactive elements</li>
  <li>Built our pages with semantic HTML so they work cleanly with screen readers</li>
  <li>Ensured all images include descriptive alt text</li>
  <li>Made all interactive elements keyboard-navigable</li>
  <li>Sized type and tap targets to be readable and tappable on mobile</li>
</ul>
<h2>Ongoing work</h2>
<p>Web accessibility is an ongoing effort. If you encounter content on our site that is not accessible to you, please let us know — we will fix it.</p>
<h2>Feedback</h2>
<p>To report an accessibility issue or request information in an alternative format, email <a href="mailto:jason@systemkc.com">jason@systemkc.com</a> or call <a href="tel:8169622111">(816) 962-2111</a>. We respond within two business days.</p>
</div></div></section>
    </main>
  );
}