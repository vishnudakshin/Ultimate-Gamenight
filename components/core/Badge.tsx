'use client';
import React from 'react';

type BadgeTone = 'purple' | 'gold' | 'correct' | 'wrong' | 'neutral' | 'live';

interface BadgeProps {
  children?: React.ReactNode;
  tone?: BadgeTone;
  icon?: string;
  style?: React.CSSProperties;
}

const tones: Record<BadgeTone, React.CSSProperties> = {
  purple:  { background: 'rgba(124,58,237,0.18)', color: 'var(--purple-300)', border: '1px solid var(--border-soft)' },
  gold:    { background: 'rgba(245,197,24,0.16)', color: 'var(--gold-400)', border: '1px solid var(--border-gold)' },
  correct: { background: 'var(--correct-bg)', color: 'var(--correct-400)', border: '1px solid rgba(34,197,94,0.4)' },
  wrong:   { background: 'var(--wrong-bg)', color: 'var(--wrong-400)', border: '1px solid rgba(239,68,68,0.4)' },
  neutral: { background: 'var(--night-600)', color: 'var(--text-muted)', border: '1px solid var(--border-strong)' },
  live:    { background: 'rgba(239,68,68,0.18)', color: 'var(--wrong-400)', border: '1px solid rgba(239,68,68,0.45)' },
};

export function Badge({ children, tone = 'purple', icon, style = {} }: BadgeProps) {
  const t = tones[tone];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-bold)',
        letterSpacing: '0.04em', lineHeight: 1, padding: '5px 10px',
        borderRadius: 'var(--radius-pill)', textTransform: 'uppercase', ...t, ...style,
      }}
    >
      {tone === 'live' ? (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor',
          animation: 'ug-pulse-gold 1.4s var(--ease-in-out) infinite' }} />
      ) : null}
      {icon ? <i className={`ti ${icon}`} style={{ fontSize: 13 }} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
