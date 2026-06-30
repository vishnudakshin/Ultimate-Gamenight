'use client';
import React from 'react';

type ScoreSize = 'sm' | 'md' | 'lg';

interface ScoreChipProps {
  value?: number;
  label?: string;
  leader?: boolean;
  delta?: number;
  size?: ScoreSize;
  style?: React.CSSProperties;
}

const sizes = {
  sm: { num: 18, pad: '6px 12px', lab: 9 },
  md: { num: 26, pad: '8px 16px', lab: 10 },
  lg: { num: 40, pad: '12px 22px', lab: 12 },
};

export function ScoreChip({ value = 0, label, leader = false, delta, size = 'md', style = {} }: ScoreChipProps) {
  const s = sizes[size];
  return (
    <span
      style={{
        display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2,
        position: 'relative', padding: s.pad, borderRadius: 'var(--radius-md)',
        background: leader ? 'rgba(245,197,24,0.12)' : 'var(--night-600)',
        border: leader ? '1px solid var(--border-gold)' : '1px solid var(--border-soft)',
        boxShadow: leader ? 'var(--glow-gold-sm)' : 'none',
        ...style,
      }}
    >
      {label ? (
        <span style={{
          fontFamily: 'var(--font-ui)', fontSize: s.lab, fontWeight: 700,
          letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
          color: leader ? 'var(--gold-400)' : 'var(--text-muted)',
        }}>{label}</span>
      ) : null}
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: s.num, lineHeight: 1,
        color: leader ? 'var(--gold-400)' : 'var(--text-strong)',
      }}>{Number(value).toLocaleString()}</span>
      {delta != null ? (
        <span style={{
          position: 'absolute', top: -10, right: -8, fontFamily: 'var(--font-mono)',
          fontWeight: 700, fontSize: 13, color: 'var(--correct-400)',
          animation: 'ug-pop-in var(--dur-slow) var(--ease-bounce)',
        }}>+{delta}</span>
      ) : null}
    </span>
  );
}
