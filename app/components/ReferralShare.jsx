'use client';
import { useState } from 'react';

export default function ReferralShare({ referralCode, name }) {
  const [copied, setCopied] = useState(false);
  const firstName = name?.split(' ')[0] || 'You';
  const referralUrl = `${typeof window !== 'undefined' ? window.location.origin : 'https://systemkc.com'}/giveaway/?ref=${referralCode}`;

  async function copy() {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="referral-success">
      <div className="rs-icon">🎉</div>
      <h3>Application received, {firstName}.</h3>
      <p>We'll review your application and be in touch. In the meantime, share your referral link — every business owner who applies through your link earns you both a bonus consideration in the selection process.</p>
      <div className="rs-link-box">
        <input type="text" readOnly value={referralUrl} className="rs-link-input" onFocus={e => e.target.select()} />
        <button className="btn btn--primary" onClick={copy} style={{flexShrink: 0}}>
          {copied ? '✓ Copied' : 'Copy link'}
        </button>
      </div>
      <div className="rs-share-row">
        <a className="btn btn--ghost" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
        <a className="btn btn--ghost" href={`sms:?body=I just applied for a free 6-month business growth scholarship from SYSTEM KC. Apply here and we both get a boost in the selection: ${referralUrl}`}>Share via Text</a>
      </div>
      <p style={{marginTop: '20px', fontSize: '14px', color: 'var(--muted)'}}>Your referral code: <strong style={{fontFamily: 'var(--mono)', color: 'var(--ink)'}}>{referralCode}</strong></p>
    </div>
  );
}
