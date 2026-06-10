export const metadata = {
  title: 'About | S.Y.S.T.E.M. KC | Business Growth Strategy for Local Service Businesses',
  description: 'S.Y.S.T.E.M. KC teaches local service business owners how to get more customers, earn more from each one, and build a business that runs without them. Built by a 20-year operator.',
};

export default function Page() {
  return (
    <main>
<div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">About</span></div></div>

<header className="page-hero">
  <div className="wrap">
    <span className="label">The person behind it</span>
    <h1>20 years running businesses. Built the growth playbook we wished existed.</h1>
    <p className="lede">S.Y.S.T.E.M. KC teaches local service business owners how to get more customers, earn more from each one, and build a business that doesn't fall apart when they step back. The 60-Day Profit Challenge is live 1-on-1 training where we build your growth strategy and install the systems that run it — together, in 60 days.</p>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start'}}>
      <div style={{aspectRatio: '4/5', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--rule)', background: 'var(--card)', position: 'relative'}}>
        <img src="/assets/founder-portrait.png" alt="Jason Dillon, founder of S.Y.S.T.E.M. KC" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <div className="prose">
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '22px', lineHeight: '1.45', color: 'var(--ink)', marginBottom: '32px'}}>"I built this because I kept watching capable business owners grind themselves into the ground — not because they lacked work ethic, but because nobody had ever shown them the actual playbook for growing a local service business."</p>
        <h2>The short version</h2>
        <p>I'm <strong>Jason Dillon</strong> — founder of S.Y.S.T.E.M. KC and a 20-year operator who still owns and runs a multi-location service company. I'm not a consultant who figured this out in a classroom. I've run the payroll, answered the missed calls, lost the quote because I followed up too slow, and watched good customers disappear because I had no re-engagement system. I know exactly what's costing you money — because it cost me money first.</p>
        <p>I built S.Y.S.T.E.M. KC because the consulting practice I needed didn't exist. Everything I found was either software salespeople dressed as consultants, or online courses built by people who'd never actually run a service business. I wanted someone who would walk into my operation, look at my actual numbers, and tell me what to fix first — in plain English, without a twelve-month contract.</p>
        <h2>What we actually teach</h2>
        <p>The name is the mission: <strong>Save Yourself Stress, Time, Energy, and Money.</strong> We do that by working through six pillars:</p>
        <ul>
          <li><strong>How to build a better offer and money model</strong> — pricing, offer clarity, and where revenue is currently leaking.</li>
          <li><strong>How to get more customers</strong> — marketing, referrals, reviews, reactivation, and the channels where your buyers actually exist.</li>
          <li><strong>How to convert more leads</strong> — sales process, speed-to-lead, and the follow-up sequence that closes leads that used to die.</li>
          <li><strong>How to make more from each customer</strong> — pricing, upsells, retention, and customer lifetime value math.</li>
          <li><strong>How to build referral and review systems that run automatically</strong> — installed after every completed job, without anyone having to remember to ask.</li>
          <li><strong>How to run it without you</strong> — automations, SOPs, and documented workflows that let your team run the business without you narrating every step.</li>
        </ul>
        <p>Most consultants start with the last item. We start with the first.</p>
        <h2>How we work</h2>
        <p>Three principles, every engagement:</p>
        <ul>
          <li><strong>Plain English over jargon.</strong> If we can't explain it without acronyms, we don't sell it.</li>
          <li><strong>Yours either way.</strong> Every playbook, SOP, workflow, and automation we build belongs to you from day one. Leave any time — it all comes with you.</li>
          <li><strong>Month-to-month.</strong> No annual lock-ins. No proprietary black boxes. No contracts you can't exit.</li>
          <li><strong>Live, 1-on-1.</strong> This isn't a course with homework. The Sprint is live sessions with you and your team — built around your business, not a generic curriculum.</li>
        </ul>
        <h2>The tools we use</h2>
        <p>We start with what you already have. Before recommending anything new, we map your existing stack and find how much we can build on top of it. Where you need something new, we help you choose and configure it for your specific operation. The goal is always the right tool for your business — not the most impressive one.</p>
      </div>
    </div>
  </div>
</section>

<section className="section section--alt">
  <div className="wrap-narrow">
    <span className="label">Why the money model comes first</span>
    <h2 style={{marginTop: '14px'}}>Marketing is a force multiplier — but only if what it's multiplying is solid.</h2>
    <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>The biggest mistake local service businesses make is spending money on marketing before fixing what's underneath. If your offer is unclear, your follow-up is slow, your pricing is off, and your referral system doesn't exist — putting more leads into that funnel just produces more wasted opportunity at a higher cost.</p>
    <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Fix the model first. Then marketing stops being an expense and starts being a multiplier. A business with a strong offer, a referral engine, and an optimized pricing model can get 3–5× the result from the same ad budget as one that hasn't done that work.</p>
    <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>That's the sequence we teach. That's why we start where we do.</p>
  </div>
</section>

<section className="section">
  <div className="wrap-narrow">
    <span className="label">By the numbers</span>
    <h2 style={{marginTop: '14px'}}>What we stand behind.</h2>
    <div className="trust-grid" style={{marginTop: '36px'}}>
      {[
        ['Growth strategy first', 'We map how to get more customers and earn more from each one before we touch a single tool.'],
        ['20 years operating', 'Jason still owns and operates a multi-location service business. This isn\'t theory — it\'s a tested playbook.'],
        ['Month-to-month', 'No long-term contracts. No lock-in. You own everything we build from day one.'],
        ['Plain English', 'No jargon. No hype. One operator talking to another about what actually moves profit.'],
      ].map(([title, desc]) => (
        <div className="trust-cell" key={title}>
          <div className="tc-check">✓</div>
          <div><strong>{title}</strong><p>{desc}</p></div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap inner">
    <h2>Ready to see the playbook for your business?</h2>
    <p className="sub">First conversation is free. We look at your business and tell you exactly where the highest-leverage growth move is — before you spend anything.</p>
    <div className="actions">
      <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
      <a className="btn btn--ghost-invert" href="/the-challenge/">See the Sprint →</a>
    </div>
  </div>
</section>
    </main>
  );
}
