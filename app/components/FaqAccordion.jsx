'use client';

import { useEffect, useRef } from 'react';

/**
 * FaqAccordion
 * Wraps the .faq-list structure and wires up click-to-toggle 'open'
 * class on each .faq-item. Expects children to contain .faq-item > .faq-q elements.
 */
export default function FaqAccordion({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    function handleClick(e) {
      const btn = e.target.closest('.faq-q');
      if (!btn) return;
      const item = btn.closest('.faq-item');
      if (!item) return;
      item.classList.toggle('open');
    }

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="faq-list" ref={ref}>
      {children}
    </div>
  );
}
