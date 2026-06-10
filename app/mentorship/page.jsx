export const metadata = {
  title: 'The 60-Day Profit Challenge | S.Y.S.T.E.M. KC',
  description: 'Add $20,000 in new revenue in 60 days â€” or we work for free until you do. The 60-Day Profit Challenge is live 1-on-1 business growth training for local service companies.',
};

export default function Page() {
  return (
    <main>
      <section className="nat-hero">
        <div className="wrap">
          <span className="label">We've updated our programs</span>
          <h1 className="nat-h1">The Sprint is our flagship offer now.</h1>
          <p className="nat-lede">The 60-Day Profit Challenge is live 1-on-1 training where we build your growth strategy and install the systems that run it â€” together, in 60 days. Guarantee: you'll add $20,000 in new revenue, or we work for free until you do.</p>
          <div className="actions">
            <a className="btn btn--primary" href="/the-challenge/">See The Sprint <span className="arrow">â†’</span></a>
            <a className="btn btn--ghost" href="/apply/">Apply Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
