import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact | Book a Free 20-Min Call | S.Y.S.T.E.M. KC',
  description: 'Book a free 20-minute automation discovery call with S.Y.S.T.E.M. KC. We map the top 2–3 leaks in your Kansas City business and you decide if you want help fixing them.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Contact</span></div></div>

<header className="page-hero">
  <div className="wrap">
    <span className="label">Get in touch</span>
    <h1>Book a free <em>20-minute</em> automation discovery call.</h1>
    <p className="lede">No sales pitch. No "let me have my partner follow up." Just 20 minutes on the phone where we identify the top 2–3 things bleeding hours out of your week — and you decide if you want help fixing them.</p>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div style={{display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '64px', alignItems: 'start'}}>
      <div>
        <span className="label">Quick form</span>
        <h2 style={{marginTop: '14px', fontSize: '36px'}}>Tell us about your business.</h2>
        <p style={{marginTop: '14px', color: 'var(--muted)'}}>We reply within one business day. Form is short on purpose.</p>

        <ContactForm />
      </div>

      <aside style={{position: 'sticky', top: '96px'}}>
        <div style={{background: 'var(--card)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div>
            <span className="label">Call or text</span>
            <a href="tel:8169622111" style={{display: 'block', marginTop: '8px', fontFamily: 'var(--sans)', fontSize: '28px', fontWeight: '900', letterSpacing: '-.02em', color: 'var(--ink)'}}>(816) 962-2111</a>
            <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5'}}><strong style={{color: 'var(--ink)'}}>Feel free to text</strong> — I know you're busy too. Texting often gets a faster reply than email.</p>
          </div>
          <hr className="rule" />
          <div>
            <span className="label">Email</span>
            <a href="mailto:jason@systemkc.com" style={{display: 'block', marginTop: '8px', fontSize: '18px', fontWeight: '600', color: 'var(--c-e)'}}>jason@systemkc.com</a>
          </div>
          <hr className="rule" />
          <div>
            <span className="label">Office hours</span>
            <div style={{marginTop: '8px', fontSize: '16px', color: 'var(--text)'}}>Mon–Fri · 8a–6p CT</div>
          </div>
          <hr className="rule" />
          <div>
            <span className="label">Service area</span>
            <p style={{marginTop: '8px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.55'}}>Kansas City metro plus Topeka, St. Joseph, Warrensburg, Lawrence, Atchison, Sedalia. <a href="/locations/" style={{color: 'var(--c-e)', textDecoration: 'underline'}}>Full area list →</a></p>
          </div>
        </div>

        <div style={{marginTop: '20px', aspectRatio: '5/4', background: 'var(--paper-2)', border: '1px solid var(--rule)', borderRadius: '10px', overflow: 'hidden'}}>
          <iframe src="https://www.google.com/maps?q=Kansas+City+metro&z=9&output=embed" style={{width: '100%', height: '100%', border: '0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="S.Y.S.T.E.M. KC service area — Kansas City metro"></iframe>
        </div>
      </aside>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap">
    <div className="section-head"><div><span className="label">What to expect</span><h2 style={{marginTop: '14px'}}>On the call.</h2></div></div>
    <div className="card-grid">
      <div className="card">
        <span className="tag">Minute 0–5</span>
        <h3>What you do</h3>
        <p>Quick rundown of your business: size, industry, the thing that's been driving you nuts lately. We listen.</p>
      </div>
      <div className="card">
        <span className="tag">Minute 5–15</span>
        <h3>Where the leaks are</h3>
        <p>We ask 5–8 specific questions about quoting, follow-up, reviews, scheduling, and billing. By minute 12 you'll know exactly where time is leaking.</p>
      </div>
      <div className="card">
        <span className="tag">Minute 15–20</span>
        <h3>Next steps (or not)</h3>
        <p>If we're a fit, we'll explain options. If we're not, we'll tell you that too — and often point you somewhere better. Either way you leave knowing more than when you started.</p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}