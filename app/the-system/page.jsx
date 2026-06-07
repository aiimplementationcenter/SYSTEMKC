export const metadata = {
  title: 'The Growth Playbook | How S.Y.S.T.E.M. KC Works',
  description: 'How we help local service businesses get more customers, earn more from each one, and build the systems that make it run without you. Strategy first. Tools second.',
};

export default function Page() {
  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">How It Works</span></div></div>

      {/* ── HERO ── */}
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">The playbook</span>
          <h1 className="nat-h1">You don't have a tools problem. You have a growth strategy problem.</h1>
          <p className="nat-lede">Most service business owners have bought software, tried ads, and hired help — and still can't figure out why growth feels like pushing a boulder uphill. The tools aren't the problem. The missing piece is a clear playbook for getting more customers, earning more from each one, and building the systems that make it run without you.</p>
          <p className="nat-sub">That's what we teach. The tools and automations are just how we make it stick.</p>
        </div>
      </section>

      {/* ── THE THREE PILLARS ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">The three pillars</span>
          <h2 style={{marginTop: '14px'}}>What we actually teach. In order.</h2>

          <div className="process-steps" style={{marginTop: '48px'}}>

            <div className="proc-step">
              <div className="proc-month">Pillar 1</div>
              <div>
                <h3>How to Get More Customers</h3>
                <p style={{marginTop: '12px', fontSize: '17px', lineHeight: '1.8'}}>Before we build anything, we map exactly where your customers come from today — and where they should be coming from but aren't. Most service businesses have at least 2–3 untapped growth channels they've never properly set up.</p>
                <p style={{marginTop: '14px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>This is where we focus first:</p>
                <ul style={{marginTop: '16px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
                  <li><strong>Local visibility & Google presence.</strong> If someone searches for what you do in your city and you don't show up, that's lost revenue every single day. We show you how to fix your Google Business Profile, build local authority, and show up where your customers are looking.</li>
                  <li><strong>Reviews as a marketing engine.</strong> 93% of local buyers read reviews before choosing a service business. We build the system that consistently generates 5-star reviews at the right moment — without you asking manually after every job.</li>
                  <li><strong>Referral programs that actually work.</strong> Happy customers refer — but only if you give them a reason and a path. We design and install referral systems that turn every satisfied client into a source of new business.</li>
                  <li><strong>Marketing and advertising that pays off.</strong> We show you what to say, where to say it, and how to measure whether it's working. No more guessing if your Facebook ad budget is doing anything.</li>
                  <li><strong>Reactivating customers you've already won.</strong> The people who have hired you before are your highest-converting leads. Most businesses never contact them again. We fix that.</li>
                </ul>
                <p style={{marginTop: '16px', color: 'var(--muted)', fontSize: '15px', fontStyle: 'italic'}}>Output: A customer acquisition map showing exactly where new customers will come from and what each channel costs to activate.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month">Pillar 2</div>
              <div>
                <h3>How to Make More From Every Customer You Have</h3>
                <p style={{marginTop: '12px', fontSize: '17px', lineHeight: '1.8'}}>Most service businesses are leaving 30–50% of potential revenue on the table from customers they've already won. Not because they're doing bad work — but because nobody ever showed them how to capture it.</p>
                <p style={{marginTop: '14px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>We work through every lever:</p>
                <ul style={{marginTop: '16px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
                  <li><strong>Pricing strategy.</strong> Most service businesses undercharge. Some overcharge for the wrong things. We review your pricing model against what the market will bear and what your margins actually require.</li>
                  <li><strong>Upsells and add-ons.</strong> What else does your customer need while they're already in front of you? We identify the natural upsells you're currently missing and show you how to offer them without feeling pushy.</li>
                  <li><strong>Repeat visits and retention.</strong> For appointment-based businesses — salons, spas, barbers, massage therapists, medical — keeping a client on a rebooking cycle is worth 5× what a one-time visit is. We build the retention system that makes this happen automatically.</li>
                  <li><strong>Customer lifetime value.</strong> We help you understand what a customer is actually worth over 2–3 years — which changes how much you can afford to spend to acquire one, and how aggressively you should fight to keep them.</li>
                </ul>
                <p style={{marginTop: '16px', color: 'var(--muted)', fontSize: '15px', fontStyle: 'italic'}}>Output: A revenue-per-customer plan with identified upsell paths, retention sequences, and a revised pricing model if needed.</p>
              </div>
            </div>

            <div className="proc-step">
              <div className="proc-month">Pillar 3</div>
              <div>
                <h3>How to Run It Without You</h3>
                <p style={{marginTop: '12px', fontSize: '17px', lineHeight: '1.8'}}>Once you know what you're growing and why, we install the tools and automations that execute it — so you don't have to do it manually every day. This is the last step, not the first. Automation without strategy is just expensive busywork.</p>
                <p style={{marginTop: '14px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>What we install:</p>
                <ul style={{marginTop: '16px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
                  <li><strong>Missed-call text-back.</strong> Every missed call gets an immediate text. The lead stays warm. You stop losing jobs while you're on a job.</li>
                  <li><strong>Lead follow-up sequences.</strong> Quotes and inquiries get followed up automatically — for days or weeks — until you get a response. No more cold leads that just needed a second nudge.</li>
                  <li><strong>Review request automation.</strong> Triggered at the right moment after every completed job. Consistent 5-star reviews without anyone having to remember to ask.</li>
                  <li><strong>Rebooking and retention campaigns.</strong> Automatic re-engagement sequences that bring past customers back before they book with someone else.</li>
                  <li><strong>Referral system automation.</strong> Your referral program runs itself — tracking, rewarding, and prompting without manual overhead.</li>
                  <li><strong>SOPs and documented workflows.</strong> The business doesn't run on you anymore. It runs on documented processes your team can follow without you narrating every step.</li>
                </ul>
                <p style={{marginTop: '16px', color: 'var(--muted)', fontSize: '15px', fontStyle: 'italic'}}>Output: Running automations and documented workflows — built on tools that fit your business, configured so you own and control everything.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW TOOLS FIT ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">How tools fit in</span>
          <h2 style={{marginTop: '14px'}}>We start with what you already have.</h2>
          <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Before recommending anything new, we map what you're already using — your CRM, your scheduling software, your phone system, whatever's already in place. Most of the time we can build a significant amount of the strategy on top of tools you already pay for. Where gaps exist, we help you find and set up the right addition for your situation.</p>
          <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>The goal is the right tool for your business — not the most tools, not the fanciest stack. Everything we configure and build stays with you regardless of which tools we end up using.</p>
        </div>
      </section>

      {/* ── WHO THIS WORKS FOR ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">Who sees the biggest results</span>
          <h2 style={{marginTop: '14px'}}>If you offer a local service, this works for you.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '62ch'}}>The growth gaps are the same across every local service business. So are the fixes. These are the business types where we see the largest, fastest jumps.</p>
          <div className="three-col" style={{marginTop: '40px'}}>
            {[
              ['HVAC & Plumbing', 'More visible on Google, faster response to leads, a referral program that fills slow seasons, and review automation that builds trust before you answer the phone.'],
              ['Roofing & Contractors', 'A marketing system that turns every finished job into 2–3 referrals, follow-up sequences that close the quotes you\'re currently losing, and a local visibility strategy that makes you the obvious choice.'],
              ['Real Estate', 'A lead response system that wins on speed, a past-client reactivation campaign that generates listings from your existing database, and a referral program that turns your buyers into your best source of new business.'],
              ['Salons, Nail Salons & Spas', 'Rebooking strategy, a review engine that builds your Google rating automatically, and a referral program that turns regulars into your marketing team.'],
              ['Barber Shops', 'Loyalty and retention strategy, automated appointment reminders that cut no-shows, and the local marketing system that fills chairs on slow Tuesdays.'],
              ['Massage Therapists & Hair Stylists', 'A repeat-visit system that brings clients back on a schedule, referral automation, and the local presence strategy that gets you found by people searching for what you do.'],
              ['Restaurants & Food Service', 'Review generation, reservation reminders, loyalty re-engagement, and the marketing strategy that brings customers back instead of hoping they remember you.'],
              ['Medical & Dental Practices', 'No-show reduction, patient reactivation, and the communication workflow that keeps your schedule full without your front desk spending an hour a day on the phone.'],
              ['Law Firms & Professional Services', 'A client intake strategy that closes more consultations, follow-up sequences for leads who went cold, and the referral system that turns satisfied clients into a steady stream of new ones.'],
            ].map(([title, desc]) => (
              <div className="three-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{marginTop: '28px', padding: '16px 20px', background: 'var(--paper-2)', borderRadius: '8px', color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7'}}>
            Also: landscapers, pest control, gyms, veterinarians, auto repair, cleaning services, insurance agents, and more. <strong style={{color: 'var(--text)'}}>If you sell a local service, the growth playbook works.</strong> <a href="/contact/" style={{color: 'var(--c-e)', fontWeight: '600'}}>Ask about your industry →</a>
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section section--alt">
        <div className="wrap-narrow">
          <span className="label">What to expect</span>
          <h2 style={{marginTop: '14px'}}>A typical Done-For-You engagement.</h2>
          <div className="process-steps" style={{marginTop: '36px'}}>
            <div className="proc-step">
              <div className="proc-month">Week 1–2</div>
              <div><p>Full business review — we map your current customer acquisition channels, revenue per customer, pricing model, and the biggest gaps in your growth strategy. You get a written summary of what we found and what to fix first.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Week 3–4</div>
              <div><p>Priority growth moves — we address the highest-ROI item first. Usually that's a combination of local visibility, a referral system, and fixing the lead follow-up that's currently leaking revenue.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Month 2</div>
              <div><p>Full system build — the automations and tools that execute your growth strategy get built, tested, and installed. You approve every step. Nothing goes live until it works and you've seen it.</p></div>
            </div>
            <div className="proc-step">
              <div className="proc-month">Month 3+</div>
              <div><p>Handoff and support — the system runs. We monitor, adjust, and keep building as your business grows. The growth playbook and every tool we install belong to you from day one.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Ready to see the playbook for your business?</h2>
          <p className="sub">Apply to work together. First conversation is free — we look at your business and tell you exactly where the highest-leverage growth move is before you spend anything.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply Now <span className="arrow">→</span></a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">See Done-For-You →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
