'use client';
import React from 'react';

type MarqueeTone = 'light' | 'gold' | 'sheen';
type MarqueeSize = 'sm' | 'md' | 'lg' | 'xl';

interface MarqueeTitleProps {
  children?: React.ReactNode;
  eyebrow?: string;
  size?: MarqueeSize;
  tone?: MarqueeTone;
  align?: React.CSSProperties['textAlign'];
  style?: React.CSSProperties;
}

const fsSizes = {
  sm: 'var(--fs-show-sm)', md: 'var(--fs-show-md)',
  lg: 'var(--fs-show-lg)', xl: 'var(--fs-show-xl)',
};

export function MarqueeTitle({ children, eyebrow, size = 'lg', tone = 'light', align = 'center', style = {} }: MarqueeTitleProps) {
  const fs = fsSizes[size];

  const toneStyle: React.CSSProperties = tone === 'gold'
    ? { background: 'var(--grad-gold)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }
    : tone === 'sheen'
    ? {
        background: 'linear-gradient(90deg, var(--purple-100) 0%, var(--gold-400) 25%, var(--purple-100) 50%, var(--gold-400) 75%, var(--purple-100) 100%)',
        backgroundSize: '200% auto', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        animation: 'ug-marquee 4s linear infinite',
      }
    : { color: 'var(--text-strong)' };

  return (
    <div style={{ textAlign: align, ...style }}>
      {eyebrow ? (
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-label)', fontWeight: 700,
          letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
          color: 'var(--gold-400)', marginBottom: 12,
        }}>{eyebrow}</div>
      ) : null}
      <h1 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: fs, lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-tight)',
        textTransform: 'uppercase', ...toneStyle,
      }}>{children}</h1>
    </div>
  );
}
