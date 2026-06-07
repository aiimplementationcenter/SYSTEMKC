import GiveawayForm from '../components/GiveawayForm';

export const metadata = {
  title: 'The SYSTEM KC Business Scholarship | Apply Free | S.Y.S.T.E.M. KC',
  description: 'Apply for the SYSTEM KC Business Scholarship — the full 6-Month Growth Explosion program, awarded to the small business owner who demonstrates the greatest need. No purchase necessary.',
};

export default function Page({ searchParams }) {
  const referredBy = searchParams?.ref || null;

  return (
    <main>
      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><span className="here">Scholarship</span></div></div>

      {/* ── HERO ── */}
      <header className="page-hero" style={{background: 'var(--ink)', color: '#F4F1EA', borderBottom: 'none'}}>
        <div className="wrap">
          <span className="label" style={{color: 'rgba(244,241,234,.6)'}}>Need-based · Free to apply · No purchase necessary</span>
          <h1 style={{color: '#F4F1EA', marginTop: '18px'}}>The SYSTEM KC Business Scholarship.</h1>
          <p className="lede" style={{color: 'rgba(244,241,234,.8)', marginTop: '18px'}}>The full <strong style={{color: '#F4F1EA'}}>6-Month Growth Explosion</strong> — money model audit, profitability redesign, custom growth engine, and full automation install — awarded to the small business owner who demonstrates the greatest need.</p>
          <p style={{marginTop: '16px', fontSize: '16px', color: 'rgba(244,241,234,.6)'}}>Stacked program value: <strong style={{color: '#F4F1EA'}}>[PRIZE VALUE]</strong>. Winner selected by S.Y.S.T.E.M. KC based on demonstrated business need — not by random drawing.</p>
          <div style={{marginTop: '28px'}}>
            <a className="btn btn--invert" href="#apply">Apply for the Scholarship →</a>
          </div>
        </div>
      </header>

      {/* ── WHAT IT IS ── */}
      <section className="section">
        <div className="wrap">
          <span className="label">What this is</span>
          <h2 style={{marginTop: '14px', maxWidth: '24ch'}}>A scholarship for the business that needs it most — not a lottery.</h2>
          <p className="lede" style={{marginTop: '18px', maxWidth: '60ch'}}>Most giveaways pick a winner at random. This one doesn't. We read every application and award the program to the business owner whose situation makes the clearest case for why it would make a real difference.</p>

          <div className="three-col" style={{marginTop: '48px'}}>
            <div className="three-card">
              <div className="three-num">What we look for</div>
              <h3>Demonstrated need</h3>
              <p>A real business in a real situation — not a polished pitch. We're looking for owners who are doing good work but fighting a back office that's holding them back.</p>
            </div>
            <div className="three-card">
              <div className="three-num">How we select</div>
              <h3>Judged, not drawn</h3>
              <p>S.Y.S.T.E.M. KC reviews all applications and selects based on the criteria in the <a href="/giveaway/rules/" style={{color: 'var(--c-e)'}}>Official Rules</a>. The owner's judgment is final. One recipient per cycle.</p>
            </div>
            <div className="three-card">
              <div className="three-num">The referral bonus</div>
              <h3>Refer = boost both</h3>
              <p>After you apply, you'll get a referral link. Every business owner who applies through your link earns you both additional consideration in the selection process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT THEY WIN ── */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="label">The scholarship award</span>
          <h2 style={{marginTop: '14px'}}>The full 6-Month Growth Explosion — at no cost to the recipient.</h2>

          <div className="dfy-grid" style={{marginTop: '40px'}}>
            <div className="dfy-primary">
              <div className="dfy-label">Primary — the money</div>
              <ul className="dfy-list">
                <li>Money-model audit — surface profit hiding in the current pipeline</li>
                <li>Profitability redesign — pricing, offer structure, upsells, downsells</li>
                <li>Dead-lead reactivation</li>
                <li>Custom growth blueprint built for the recipient's business</li>
                <li>6 months of strategy calls + optimization</li>
              </ul>
            </div>
            <div className="dfy-secondary">
              <div className="dfy-label">Secondary — the systems engine</div>
              <ul className="dfy-list">
                <li>CRM + pipeline automation</li>
                <li>Missed-call recovery and speed-to-lead</li>
                <li>AI follow-up, nurture &amp; booking</li>
                <li>Appointment reminders and no-show reduction</li>
                <li>Review request workflow</li>
                <li>Owner daily visibility summary</li>
              </ul>
            </div>
            <div className="dfy-delivery">
              <div className="dfy-label">Delivery</div>
              <ul className="dfy-list">
                <li>SOPs documented in plain English</li>
                <li>Team training on every system</li>
                <li>Full account transfer — recipient owns everything</li>
              </ul>
              <p style={{marginTop: '20px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)', letterSpacing: '.05em'}}>ADVERTISED VALUE: [PRIZE VALUE]</p>
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
              <p style={{marginTop: '12px', color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6'}}>Be honest and specific. We're not looking for a polished pitch — we're looking for a real situation where this program would make a real difference. The need questions carry the most weight in selection.</p>

              {referredBy && (
                <p style={{marginTop: '16px', padding: '12px 16px', background: 'var(--c-e)', color: '#fff', borderRadius: '8px', fontSize: '15px'}}>
                  You were referred — you and your referrer will both receive additional consideration in the selection process.
                </p>
              )}

              <GiveawayForm referredBy={referredBy} />
            </div>

            <div className="giveaway-aside">
              <div className="aside-card">
                <div className="ac-label">Selection criteria</div>
                <ul style={{marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.55', paddingLeft: '0', listStyle: 'none'}}>
                  <li>→ Clarity and honesty of the need statement</li>
                  <li>→ Severity of operational gaps identified</li>
                  <li>→ How meaningfully the program could change the business</li>
                  <li>→ Owner's commitment and readiness to implement</li>
                </ul>
              </div>

              <div className="aside-card">
                <div className="ac-label">The referral boost</div>
                <p className="ac-note">After applying, you'll get a unique referral link. Every business owner who applies through your link earns both of you additional consideration. Spread the word to other owners who genuinely need this.</p>
              </div>

              <div className="aside-card">
                <div className="ac-label">Cycle &amp; notification</div>
                <p className="ac-note">One recipient selected per [GIVEAWAY CADENCE]. All applicants are notified of the selection. See the <a href="/giveaway/rules/" style={{color: 'var(--c-e)'}}>Official Rules</a> for full details.</p>
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
          <p className="sub">The scholarship is one door. The application is the other. Both start with a conversation.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply to work together →</a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">About the program →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
