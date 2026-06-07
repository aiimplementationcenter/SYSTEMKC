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
      <header style={{background: 'var(--paper)', padding: '72px 0 80px', borderBottom: '4px solid var(--c-m)'}}>
        <div className="wrap">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0'}}>

            <span style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--c-m)', fontWeight: '700'}}>Grand Prize Scholarship · No Purchase Necessary · Free to Apply</span>

            <div style={{marginTop: '40px', position: 'relative', display: 'inline-block'}}>
              <div style={{fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '4px'}}>Total award value</div>
              <div style={{fontFamily: 'var(--serif)', fontSize: 'clamp(88px, 15vw, 144px)', fontWeight: '900', lineHeight: '1', color: 'var(--c-m)', letterSpacing: '-.04em', textShadow: '0 4px 24px rgba(212,50,46,.15)'}}>$20,000</div>
              <div style={{position: 'absolute', top: '-8px', right: '-24px', fontSize: '28px', transform: 'rotate(15deg)'}}>🏆</div>
              <div style={{position: 'absolute', bottom: '8px', left: '-32px', fontSize: '24px', transform: 'rotate(-10deg)'}}>⭐</div>
            </div>

            <h1 style={{marginTop: '28px', fontSize: 'clamp(28px, 4vw, 52px)', fontFamily: 'var(--serif)', fontWeight: '800', lineHeight: '1.15', color: 'var(--ink)', maxWidth: '20ch'}}>One business owner gets everything — completely free.</h1>
            <p style={{marginTop: '20px', fontSize: '19px', lineHeight: '1.7', color: 'var(--muted)', maxWidth: '54ch'}}>Six full months of Done-For-You business growth — money model audit, custom growth engine, full automation install. Worth <strong style={{color: 'var(--ink)'}}>$20,000</strong>. Awarded at <strong style={{color: 'var(--ink)'}}>no cost</strong> to the owner who demonstrates the greatest need.</p>

            <div style={{marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '14px', color: 'var(--muted)'}}>
              <span>✓ No purchase required</span>
              <span>·</span>
              <span>✓ Open to any local service business</span>
              <span>·</span>
              <span>✓ You own everything we build</span>
            </div>

            <div style={{marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
              <a className="btn btn--primary" href="#apply" style={{fontSize: '18px', padding: '18px 36px', background: 'var(--c-m)', borderColor: 'var(--c-m)'}}>Apply — It's Free →</a>
              <a className="btn btn--ghost" href="/giveaway/rules/">Official Rules</a>
            </div>
          </div>
        </div>
      </header>

      {/* ── DOUBLE WIN REFERRAL BANNER ── */}
      <section style={{background: 'var(--c-e)', padding: '28px 0'}}>
        <div className="wrap" style={{textAlign: 'center'}}>
          <p style={{fontSize: 'clamp(16px, 2.2vw, 22px)', fontWeight: '700', color: '#fff', lineHeight: '1.4', maxWidth: '64ch', margin: '0 auto'}}>
            🎉 <strong>The Referral Rule:</strong> Refer another owner who gets chosen — and <em>you also win the full $20,000 scholarship.</em> Two businesses win.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section">
        <div className="wrap">
          <div style={{textAlign: 'center', maxWidth: '54ch', margin: '0 auto 48px'}}>
            <span className="label">The full prize</span>
            <h2 style={{marginTop: '14px'}}>This isn't a starter package. It's the whole thing.</h2>
            <p className="lede" style={{marginTop: '16px'}}>Everything we normally charge $20,000 for — fully funded for one business owner per cycle.</p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
            <div style={{background: '#fff', border: '2px solid var(--rule)', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '5px', background: 'var(--c-m)'}}></div>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>📈</div>
              <h3 style={{fontSize: '18px', marginBottom: '16px'}}>Growth Strategy</h3>
              <ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.5'}}>
                <li>✓ Full money model audit</li>
                <li>✓ Pricing and offer redesign</li>
                <li>✓ Customer acquisition map</li>
                <li>✓ Referral program design + install</li>
                <li>✓ Review generation system</li>
                <li>✓ Dead-lead reactivation campaign</li>
                <li>✓ Custom 6-month growth blueprint</li>
              </ul>
            </div>

            <div style={{background: '#fff', border: '2px solid var(--rule)', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '5px', background: 'var(--c-s1)'}}></div>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>⚙️</div>
              <h3 style={{fontSize: '18px', marginBottom: '16px'}}>Full Automation Install</h3>
              <ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.5'}}>
                <li>✓ Missed-call text-back</li>
                <li>✓ Lead follow-up sequences</li>
                <li>✓ Appointment reminders</li>
                <li>✓ Quote follow-up automation</li>
                <li>✓ Review request workflow</li>
                <li>✓ Rebooking + retention campaigns</li>
                <li>✓ Owner daily business summary</li>
              </ul>
            </div>

            <div style={{background: '#fff', border: '2px solid var(--rule)', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: '0', left: '0', right: '0', height: '5px', background: 'var(--c-e)'}}></div>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>🤝</div>
              <h3 style={{fontSize: '18px', marginBottom: '16px'}}>6 Months of Support</h3>
              <ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.5'}}>
                <li>✓ Monthly strategy calls</li>
                <li>✓ SOPs in plain English</li>
                <li>✓ Full team training</li>
                <li>✓ Complete account transfer</li>
                <li style={{color: 'var(--ink)', fontWeight: '700'}}>✓ You own everything</li>
              </ul>
            </div>
          </div>

          <div style={{marginTop: '36px', background: 'var(--c-m)', borderRadius: '16px', padding: '32px 40px', textAlign: 'center'}}>
            <p style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: '8px'}}>All of the above, at no cost to the winner</p>
            <div style={{fontFamily: 'var(--serif)', fontSize: 'clamp(52px, 8vw, 88px)', fontWeight: '900', color: '#fff', lineHeight: '1', letterSpacing: '-.03em'}}>$20,000</div>
            <p style={{marginTop: '12px', fontSize: '16px', color: 'rgba(255,255,255,.8)'}}>Awarded free. You own everything from day one.</p>
          </div>
        </div>
      </section>

      {/* ── DOUBLE WIN DETAIL ── */}
      <section style={{background: 'var(--paper-2)', padding: '72px 0'}}>
        <div className="wrap">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
            <div>
              <span style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--c-e)', fontWeight: '700'}}>The referral rule</span>
              <h2 style={{marginTop: '16px', fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: '1.2', color: 'var(--ink)'}}>Refer someone. If they win — you both win.</h2>
              <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>After you apply, you'll receive a unique referral link. Share it with other local service business owners who could genuinely use this.</p>
              <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>If someone you referred is selected as the winner, <strong style={{color: 'var(--ink)'}}>you also receive the full $20,000 scholarship</strong> — two businesses win simultaneously, at no cost to either of you.</p>
              <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>You can also write in a referral name directly on the application — if the person you referred wins and lists your name, the double-win applies.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={{background: '#fff', border: '2px solid var(--c-e)', borderRadius: '14px', padding: '28px 32px', textAlign: 'center'}}>
                <div style={{fontSize: '36px', marginBottom: '10px'}}>🏆</div>
                <h3 style={{color: 'var(--ink)', fontSize: '20px', marginBottom: '6px'}}>The person you referred wins</h3>
                <p style={{color: 'var(--muted)', fontSize: '14px'}}>They receive the full $20,000 scholarship</p>
              </div>
              <div style={{textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '28px', fontWeight: '700', color: 'var(--c-e)'}}>+</div>
              <div style={{background: '#fff', border: '2px solid var(--c-m)', borderRadius: '14px', padding: '28px 32px', textAlign: 'center'}}>
                <div style={{fontSize: '36px', marginBottom: '10px'}}>🎉</div>
                <h3 style={{color: 'var(--ink)', fontSize: '20px', marginBottom: '6px'}}>You win too</h3>
                <p style={{color: 'var(--muted)', fontSize: '14px'}}>You also receive the full $20,000 scholarship</p>
              </div>
              <p style={{textAlign: 'center', color: 'var(--muted)', fontSize: '13px'}}>Both businesses receive the full program at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section">
        <div className="wrap">
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <span className="label">How selection works</span>
            <h2 style={{marginTop: '14px'}}>Judged on need. Not drawn at random.</h2>
            <p className="lede" style={{marginTop: '16px', maxWidth: '50ch', margin: '16px auto 0'}}>We're looking for the business where this $20,000 program makes a real, lasting difference — not the best pitch.</p>
          </div>
          <div className="three-col">
            <div className="three-card" style={{textAlign: 'center'}}>
              <div style={{width: '56px', height: '56px', borderRadius: '50%', background: 'var(--c-m)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'}}>1</div>
              <h3>Apply — tell us your story</h3>
              <p>Complete the free application. Be honest and specific. The need questions carry the most weight. No polished pitches needed.</p>
            </div>
            <div className="three-card" style={{textAlign: 'center'}}>
              <div style={{width: '56px', height: '56px', borderRadius: '50%', background: 'var(--c-s1)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'}}>2</div>
              <h3>We review every application</h3>
              <p>Every application is personally reviewed. We select the owner whose situation demonstrates the clearest, most genuine need.</p>
            </div>
            <div className="three-card" style={{textAlign: 'center'}}>
              <div style={{width: '56px', height: '56px', borderRadius: '50%', background: 'var(--c-e)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'}}>3</div>
              <h3>Winner notified — work begins</h3>
              <p>The selected recipient is contacted directly and we begin immediately. All applicants are notified of the outcome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section style={{background: 'var(--paper)', padding: '72px 0'}} id="apply">
        <div className="wrap">
          <div style={{textAlign: 'center', maxWidth: '52ch', margin: '0 auto 48px'}}>
            <span className="label">Apply now — it's free</span>
            <h2 style={{marginTop: '14px', fontSize: 'clamp(26px, 3.5vw, 42px)'}}>This $20,000 could be yours.</h2>
            <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.7', color: 'var(--muted)'}}>No purchase required. No catch. Just tell us about your business and why you need this. Honest applications win — not polished ones.</p>
          </div>

          <div className="giveaway-layout">
            <div>
              {referredBy && (
                <div style={{marginBottom: '24px', padding: '16px 20px', background: 'var(--c-e)', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: '600'}}>
                  🎉 You were referred — if you're chosen as the winner, the person who referred you also receives the full $20,000 scholarship.
                </div>
              )}

              <GiveawayForm referredBy={referredBy} />
            </div>

            <div className="giveaway-aside">
              <div style={{background: 'var(--c-m)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginBottom: '0'}}>
                <div style={{fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginBottom: '8px'}}>Grand prize value</div>
                <div style={{fontFamily: 'var(--serif)', fontSize: '64px', fontWeight: '900', color: '#fff', lineHeight: '1', letterSpacing: '-.03em'}}>$20,000</div>
                <p style={{marginTop: '12px', fontSize: '14px', color: 'rgba(255,255,255,.8)', lineHeight: '1.6'}}>6 months of Done-For-You business growth — awarded at no cost to the winner.</p>
                <p style={{marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,.65)'}}>✓ Free to apply &nbsp;·&nbsp; ✓ You own everything</p>
              </div>

              <div className="aside-card" style={{marginTop: '20px'}}>
                <div className="ac-label">What carries the most weight</div>
                <ul style={{marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: 'var(--muted)', lineHeight: '1.55', paddingLeft: '0', listStyle: 'none'}}>
                  <li>→ Honesty and clarity of your need</li>
                  <li>→ Severity of operational + growth gaps</li>
                  <li>→ How much this would genuinely change the business</li>
                  <li>→ Readiness and commitment to implement</li>
                </ul>
              </div>

              <div className="aside-card" style={{border: '2px solid var(--c-e)', borderRadius: '10px'}}>
                <div className="ac-label" style={{color: 'var(--c-e)'}}>🎉 The double-win referral</div>
                <p className="ac-note" style={{marginTop: '10px'}}>After applying, you'll get a referral link. If someone you refer wins, <strong>you also receive the full $20,000 program</strong> — free, no strings. You can also write in a referral on the form below.</p>
              </div>

              <div className="aside-card">
                <div className="ac-label">Questions?</div>
                <p className="ac-note">Call or text Jason at <a href="tel:8169622111" style={{color: 'var(--c-e)', fontWeight: '700'}}>(816) 962-2111</a> or email <a href="mailto:jason@systemkc.com" style={{color: 'var(--c-e)'}}>jason@systemkc.com</a>. See the <a href="/giveaway/rules/" style={{color: 'var(--c-e)'}}>Official Rules</a> for full details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap inner">
          <h2>Not applying for the scholarship?</h2>
          <p className="sub">Apply to work with us directly. First conversation is always free — we look at your business and tell you where the highest-leverage move is before you spend anything.</p>
          <div className="actions">
            <a className="btn btn--invert" href="/apply/">Apply to work together →</a>
            <a className="btn btn--ghost-invert" href="/done-for-you/">About the full program →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
