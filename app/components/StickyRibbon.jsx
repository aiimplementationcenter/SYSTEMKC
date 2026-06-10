'use client';
import { useState } from 'react';

export default function StickyRibbon() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="sprint-ribbon">
      <span className="sr-label">New</span>
      <span>
        The 60-Day Profit Sprint — add $20,000 in new revenue or I work for free.{' '}
        <a href="/the-sprint/">See how it works →</a>
      </span>
      <button
        className="sprint-dismiss"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >×</button>
    </div>
  );
}
