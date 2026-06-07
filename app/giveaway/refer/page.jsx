export const metadata = {
  title: 'Refer a Business Owner | SYSTEM KC Scholarship',
  description: 'Share the SYSTEM KC Business Scholarship with another small business owner who needs it.',
};

export default function Page({ searchParams }) {
  const code = searchParams?.code || '';
  const referralUrl = `https://systemkc.com/giveaway/?ref=${code}`;

  return (
    <main>

      <div className="wrap"><div className="crumbs"><a href="/">Home</a><span className="sep">·</span><a href="/giveaway/">Scholarship</a><span className="sep">·</span><span className="here">Refer</span></div></div>

      <section className="nat-hero" style={{paddingBottom: '60px'}}>
        <div className="wrap">
          <span className="label">Referral program</span>
          <h1 className="nat-h1">Know a business owner who needs this?</h1>
          <p className="nat-lede">Every business owner you refer who applies gives you an additional selection advantage. The more business owners you bring into the scholarship pool, the stronger your own application looks — because it demonstrates you're the kind of operator who builds community, not just takes from it.</p>
        </div>
      </section>

      {code && (
        <section className="section section--alt">
          <div className="wrap-narrow">
            <span className="label">Your referral link</span>
            <h2 style={{marginTop: '14px'}}>Share this link.</h2>
            <div className="rs-link-box" style={{marginTop: '28px'}}>
              <input className="rs-link-input" readOnly value={referralUrl} />
            </div>
            <p style={{marginTop: '16px', color: 'var(--muted)', fontSize: '15px'}}>Anyone who applies using your link is counted as your referral. There is no limit to how many people you can refer.</p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap-narrow">
          <span className="label">Who to refer</span>
          <h2 style={{marginTop: '14px'}}>Any small business owner who is genuinely struggling.</h2>
          <p style={{marginTop: '20px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>The scholarship goes to the business owner who demonstrates the greatest need — not the one with the slickest application. Think about who in your network is grinding, missing calls, drowning in admin, or watching their margins shrink while they work harder.</p>
          <p style={{marginTop: '16px', fontSize: '17px', lineHeight: '1.8', color: 'var(--muted)'}}>Contractors, trades, restaurants, real estate, medical, salons — any service-based small business qualifies. 50 employees or fewer, based in the US.</p>
          <div className="actions" style={{marginTop: '32px'}}>
            <a className="btn btn--primary" href="/giveaway/">Apply for the scholarship yourself →</a>
            <a className="btn btn--ghost" href="/giveaway/rules/">Read the official rules →</a>
          </div>
        </div>
      </section>

    </main>
  );
}
