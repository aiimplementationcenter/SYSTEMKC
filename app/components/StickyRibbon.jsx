'use client';
import { useState } from 'react';

export default function StickyRibbon() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="challenge-ribbon">
      <span className="sr-label">New</span>
      <span>
        The 60-Day Profit Challenge â€” add $20,000 in new revenue or I work for free.{' '}
        <a href="/the-challenge/">See how it works â†’</a>
      </span>
      <button
        className="sprint-dismiss"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >Ã—</button>
    </div>
  );
}
