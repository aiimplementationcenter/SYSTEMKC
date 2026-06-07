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
      <p>We'll personally review your application and be in touch. Now — share your referral link with other business owners who need this.</p>

      <div style={{margin: '24px 0', padding: '20px 24px', background: 'var(--ink)', borderRadius: '12px', textAlign: 'center'}}>
        <p style={{fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(244,241,234,.5)', marginBottom: '8px'}}>The double-win rule</p>
        <p style={{fontSize: '17px', fontWeight: '700', color: '#F4F1EA', lineHeight: '1.5'}}>If someone you refer is chosen as the winner, <span style={{color: 'var(--c-m)'}}>you also receive the full $20,000 scholarship</span> — at no cost to either of you.</p>
      </div>

      <div className="rs-link-box">
        <input type="text" readOnly value={referralUrl} className="rs-link-input" onFocus={e => e.target.select()} />
        <button className="btn btn--primary" onClick={copy} style={{flexShrink: 0}}>
          {copied ? '✓ Copied' : 'Copy link'}
        </button>
      </div>

      <div className="rs-share-row">
        <a className="btn btn--ghost" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
        <a className="btn btn--ghost" href={`sms:?body=I just applied for a free $20,000 business growth scholarship from SYSTEM KC. Apply here — if you win, I win too: ${referralUrl}`}>Share via Text</a>
      </div>

      <p style={{marginTop: '20px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6'}}>Your referral code: <strong style={{fontFamily: 'var(--mono)', color: 'var(--ink)'}}>{referralCode}</strong><br />Anyone who applies through your link is automatically linked to you in our system.</p>
    </div>
  );
}
