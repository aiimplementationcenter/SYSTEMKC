import GiveawayForm from '../components/GiveawayForm';

export const metadata = {
  title: 'The SYSTEM KC Business Scholarship — $20,000 Grand Prize | S.Y.S.T.E.M. KC',
  description: 'Apply for the SYSTEM KC Business Scholarship — $20,000 in Done-For-You business growth services, awarded free to the small business owner who demonstrates the greatest need.',
};

export default function Page({ searchParams }) {
  const referredBy = searchParams?.ref || null;

  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Scholarship</span></div></div>

      {/* ── GRAND PRIZE HERO ── */}
      <header style={{background: 'var(--ink)', color: '#F4F1EA', padding: '80px 0 72px', borderBottom: '4px solid var(--c-m)'}}>
        <div className="wrap">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0'}}>
            <span style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-m)', fontWeight: '700'}}>Grand Prize Scholarship · No Purchase Necessary · Free to Apply</span>
            <div style={{marginTop: '32px', padding: '24px 48px', border: '2px solid rgba(212,50,46,.5)', borderRadius: '12px', display: 'inline-block'}}>
              <div style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(244,241,234,.5)', marginBottom: '8px'}}>Total award value</div>
              <div style={{fontFamily: 'var(--serif)', fontSize: 'clamp(72px, 12vw, 120px)', fontWeight: '900', lineHeight: '1', color: '#F4F1EA', letterSpacing: '-.04em'}}>$20,000</div>
            </div>
            <h1 style={{marginTop: '36px', fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: 'var(--serif)', fontWeight: '700', lineHeight: '1.2', color: '#F4F1EA', maxWidth: '18ch'}}>The SYSTEM KC Business Scholarship.</h1>
            <p style={{marginTop: '20px', fontSize: '19px', lineHeight: '1.7', color: 'rgba(244,241,234,.75)', maxWidth: '56ch'}}>Six full months of Done-For-You business growth — money model audit, custom growth engine, and complete automation install — awarded at no cost to the small business owner who demonstrates the greatest need.</p>
            <p style={{marginTop: '16px', fontSize: '15px', color: 'rgba(244,241,234,.5)'}}>Winner selected by S.Y.S.T.E.M. KC based on demonstrated need — not by random drawing.</p>
            <div style={{marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
              <a className="btn btn--primary" href="#apply" style={{fontSize: '18px', padding: '18px 32px'}}>Apply for the Scholarship →</a>
              <a className="btn btn--ghost" href="/giveaway/rules/" style={{borderColor: 'rgba(244,241,234,.3)', color: '#F4F1EA'}}>Official Rules</a>
            </div>
          </div>
        </div>
      </header>

      {/* ── DOUBLE WIN REFERRAL BANNER ── */}
      <section style={{background: 'var(--c-m)', padding: '32px 0'}}>
        <div className="wrap" style={{textAlign: 'center'}}>
          <p style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: '10px'}}>The referral rule</p>
          <p style={{fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: '700', color: '#fff', lineHeight: '1.4', maxWidth: '60ch', margin: '0 auto'}}>Refer another business owner. If they're chosen as the winner, <em>you also receive the full $20,000 scholarship</em> — two businesses win.</p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">The award</span>
          <h2 style={{marginTop: '14px'}}>$20,000 in Done-For-You business growth services — at no cost to the recipient.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '58ch'}}>This is the full program. Not a starter package. Not a consultation. Six months of work that we normally charge $20,000 for — fully funded for one business owner per cycle.</p>

          <div className="dfy-grid" style={{marginTop: '48px'}}>
            <div className="dfy-primary">
              <div className="dfy-label">Growth Strategy</div>
              <h3 style={{marginTop: '12px', marginBottom: '16px'}}>Money Model + Customer Acquisition</h3>
              <ul className="dfy-list">
                <li>Full money model audit — surface profit hiding in the current pipeline</li>
                <li>Pricing and offer redesign — charge what the market will bear</li>
                <li>Customer acquisition map — where new customers will come from and how</li>
                <li>Referral program design and install</li>
                <li>Review generation strategy and automation</li>
                <li>Dead-lead reactivation campaign</li>
                <li>Custom 6-month growth blueprint</li>
              </ul>
            </div>
            <div className="dfy-secondary">
              <div className="dfy-label">Systems Build</div>
              <h3 style={{marginTop: '12px', marginBottom: '16px'}}>Full Automation Install</h3>
              <ul className="dfy-list">
                <li>Missed-call text-back — never lose a lead to voicemail again</li>
                <li>Lead follow-up sequences — weeks of automated nurture</li>
                <li>Appointment reminders and no-show reduction</li>
                <li>Quote follow-up automation</li>
                <li>Review request workflow</li>
                <li>Rebooking and retention campaigns</li>
                <li>Owner daily business summary</li>
              </ul>
            </div>
            <div className="dfy-delivery">
              <div className="dfy-label">Delivery + Support</div>
              <h3 style={{marginTop: '12px', marginBottom: '16px'}}>6 Months of Ongoing Work</h3>
              <ul className="dfy-list">
                <li>Monthly strategy calls for 6 months</li>
                <li>SOPs documented in plain English</li>
                <li>Full team training on every system</li>
                <li>Complete account transfer — you own everything</li>
              </ul>
              <div style={{marginTop: '28px', padding: '20px', background: 'var(--ink)', borderRadius: '8px', textAlign: 'center'}}>
                <div style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(244,241,234,.5)', marginBottom: '8px'}}>Total retail value</div>
                <div style={{fontFamily: 'var(--serif)', fontSize: '48px', fontWeight: '900', color: '#F4F1EA', letterSpacing: '-.03em', lineHeight: '1'}}>$20,000</div>
                <div style={{marginTop: '8px', fontSize: '13px', color: 'rgba(244,241,234,.5)'}}>Awarded at no cost to the recipient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">How selection works</span>
          <h2 style={{marginTop: '14px'}}>Judged on need. Not drawn at random.</h2>
          <div className="three-col" style={{marginTop: '44px'}}>
            <div className="three-card">
              <div className="three-num">01</div>
              <h3>Apply — tell us your story</h3>
              <p>Complete the application below. The need questions carry the most weight. Be honest and specific — we're looking for real situations, not polished pitches.</p>
            </div>
            <div className="three-card">
              <div className="three-num">02</div>
              <h3>We review every application</h3>
              <p>Every application is personally reviewed. We select the business owner whose situation makes the clearest case for why this program would make a genuine, lasting difference.</p>
            </div>
            <div className="three-card">
              <div className="three-num">03</div>
              <h3>Winner notified — work begins</h3>
              <p>The selected recipient is contacted directly. We begin the engagement immediately. All applicants are notified of the selection outcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFERRAL DOUBLE WIN ── */}
      <section style={{background: 'var(--ink)', padding: '72px 0'}}>
        <div className="wrap">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
            <div>
              <span style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--c-m)', fontWeight: '700'}}>The referral rule</span>
              <h2 style={{marginTop: '16px', color: '#F4F1EA', fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: '1.2'}}>Refer someone who wins — and you win too.</h2>
              <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'rgba(244,241,234,.7)'}}>After you submit your application, you'll receive a unique referral link. Share it with other local service business owners who genuinely need this.</p>
              <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'rgba(244,241,234,.7)'}}>If someone you referred is selected as the scholarship winner, <strong style={{color: '#F4F1EA'}}>you also receive the full $20,000 scholarship.</strong> Two businesses win. No additional cost to either of you.</p>
              <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'rgba(244,241,234,.7)'}}>You can also write in a referral on the form below — if the person you referred wins and lists your name, the double-win applies.</p>
            </div>
            <div style={{background: 'rgba(244,241,234,.06)', border: '1px solid rgba(244,241,234,.12)', borderRadius: '16px', padding: '40px', textAlign: 'center'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🏆</div>
              <h3 style={{color: '#F4F1EA', fontSize: '22px', marginBottom: '12px'}}>They win the scholarship.</h3>
              <div style={{fontFamily: 'var(--mono)', fontSize: '28px', fontWeight: '700', color: 'var(--c-m)', margin: '16px 0'}}>+</div>
              <h3 style={{color: '#F4F1EA', fontSize: '22px', marginBottom: '12px'}}>You win the scholarship.</h3>
              <p style={{color: 'rgba(244,241,234,.5)', fontSize: '14px', marginTop: '20px'}}>Both businesses receive the full $20,000 program at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="section" id="apply">
        <div className="wrap">
          <div className="giveaway-layout">
            <div>
              <span className="label">Apply for the scholarship</span>
              <h2 style={{marginTop: '14px'}}>Tell us about your business and why you need this.</h2>
              <p style={{marginTop: '12px', color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6'}}>Be honest and specific. We're not looking for a polished pitch — we're looking for a real situation where this $20,000 program would make a real, lasting difference. The need questions carry the most weight in selection.</p>

              {referredBy && (
                <p style={{marginTop: '16px', padding: '12px 16px', background: 'var(--c-e)', color: '#fff', borderRadius: '8px', fontSize: '15px'}}>
                  ✓ You were referred — your referrer will receive the full scholarship too if you're selected as the winner.
                </p>
              )}

              <GiveawayForm referredBy={referredBy} />
            </div>

            <div className="giveaway-aside">
              <div className="aside-card" style={{background: 'var(--ink)', border: '2px solid var(--c-m)'}}>
                <div style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--c-m)', marginBottom: '8px'}}>Grand prize value</div>
                <div style={{fontFamily: 'var(--serif)', fontSize: '52px', fontWeight: '900', color: '#F4F1EA', lineHeight: '1', letterSpacing: '-.03em'}}>$20,000</div>
                <p style={{marginTop: '12px', fontSize: '14px', color: 'rgba(244,241,234,.6)', lineHeight: '1.6'}}>6 months of Done-For-You business growth — money model, full automation install, and ongoing strategy support.</p>
              </div>

              <div className="aside-card">
                <div className="ac-label">Selection criteria</div>
                <ul style={{marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.55', paddingLeft: '0', listStyle: 'none'}}>
                  <li>→ Clarity and honesty of the need statement</li>
                  <li>→ Severity of operational and growth gaps</li>
                  <li>→ How meaningfully the program would change the business</li>
                  <li>→ Owner's readiness and commitment to implement</li>
                </ul>
              </div>

              <div className="aside-card" style={{borderLeft: '3px solid var(--c-m)'}}>
                <div className="ac-label">The double-win referral</div>
                <p className="ac-note">After applying you'll get a referral link. If someone you refer wins the scholarship, <strong>you also receive the full $20,000 program</strong> — at no cost to either of you. You can also write in a referral on the form.</p>
              </div>

              <div className="aside-card">
                <div className="ac-label">Cycle &amp; notification</div>
                <p className="ac-note">One recipient selected per cycle. All applicants are notified. See the <a href="/giveaway/rules/" style={{color: 'var(--c-e)'}}>Official Rules</a> for full details.</p>
              </div>

              <div className="aside-card">
                <div className="ac-label">Questions</div>
                <p className="ac-note">Call or text Jason at <a href="tel:8169622111" style={{color: 'var(--c-e)', fontWeight: '700'}}>(816) 962-2111</a> or email <a href="mailto:jason@systemkc.com" style={{color: 'var(--c-e)'}}>jason@systemkc.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Not applying for the scholarship? You can still work with us directly.</h2>
          <p className="sub">The scholarship is one door. The application is the other. Both start with a free conversation.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply to work together →</a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">About the full program →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
