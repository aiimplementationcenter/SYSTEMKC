import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact | Book a Free 20-Min Call | S.Y.S.T.E.M. KC',
  description: 'Book a free 20-minute call with S.Y.S.T.E.M. KC. We look at your business, map your biggest growth opportunity, and tell you exactly what to fix first. No pitch. No obligation.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Contact</span></div></div>

<header className="page-hero">
  <div className="wrap">
    <span className="label">Get in touch</span>
    <h1>Book a free <em>20-minute</em> growth strategy call.</h1>
    <p className="lede">No sales pitch. No "let me have my partner follow up." Just 20 minutes where we look at your business, identify the top 2–3 places you're leaving money on the table, and tell you exactly what to fix first. You decide from there.</p>
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
            <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5'}}><strong style={{color: 'var(--ink)'}}>Feel free to text</strong> — texting often gets a faster reply than email.</p>
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
            <span className="label">Who we work with</span>
            <p style={{marginTop: '8px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6'}}>Any local service business — trades, salons, medical, legal, real estate, food service, and more. In-person engagements available for the Midwest. Remote clients everywhere else.</p>
          </div>
        </div>

        <div style={{marginTop: '20px', padding: '20px 24px', background: 'var(--paper-2)', border: '1px solid var(--rule)', borderRadius: '10px'}}>
          <p style={{fontSize: '14px', lineHeight: '1.7', color: 'var(--muted)'}}>
            <strong style={{color: 'var(--text)'}}>Can't afford it right now?</strong> Apply for the <a href="/giveaway/" style={{color: 'var(--c-e)', fontWeight: '600'}}>SYSTEM KC Scholarship</a> — the full Done-For-You program awarded each cycle to the business owner who demonstrates the greatest need.
          </p>
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
        <h3>Your business, your words</h3>
        <p>Quick rundown of what you do, how big the operation is, and the thing that's been costing you the most lately — time, money, or both. We listen.</p>
      </div>
      <div className="card">
        <span className="tag">Minute 5–15</span>
        <h3>Where the growth gaps are</h3>
        <p>We ask targeted questions about how you get customers, how much you earn per one, and where leads and revenue are currently escaping. By minute 12 you'll have a clearer picture than you started with.</p>
      </div>
      <div className="card">
        <span className="tag">Minute 15–20</span>
        <h3>The highest-leverage move</h3>
        <p>We tell you what the single highest-ROI fix looks like for your business. If we're the right fit to help, we'll say so. If you'd be better served somewhere else, we'll tell you that too.</p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
