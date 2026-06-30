'use client';
import React from 'react';

interface ProgressBarProps {
  value?: number;
  max?: number;
  tone?: 'purple' | 'gold';
  segments?: number;
  label?: string;
  style?: React.CSSProperties;
}

function Lbl({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', marginBottom: 6,
      fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-caption)', fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)',
    }}>
      <span>{label}</span>
      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--purple-300)' }}>{value}/{max}</span>
    </div>
  );
}

export function ProgressBar({ value = 0, max = 100, tone = 'purple', segments, label, style = {} }: ProgressBarProps) {
  const fill = tone === 'gold' ? 'var(--grad-gold)' : 'var(--grad-purple)';

  if (segments) {
    const done = Math.round((value / max) * segments);
    return (
      <div style={style}>
        {label ? <Lbl label={label} value={value} max={max} /> : null}
        <div style={{ display: 'flex', gap: 5 }}>
          {Array.from({ length: segments }).map((_, i) => (
            <span key={i} style={{
              flex: 1, height: 6, borderRadius: 'var(--radius-pill)',
              background: i < done ? fill : 'var(--night-600)',
              boxShadow: i < done && tone === 'gold' ? 'var(--glow-gold-sm)' : 'none',
              transition: 'background var(--dur-base) var(--ease-out)',
            }} />
          ))}
        </div>
      </div>
    );
  }

  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={style}>
      {label ? <Lbl label={label} value={value} max={max} /> : null}
      <div style={{ height: 8, borderRadius: 'var(--radius-pill)', background: 'var(--night-600)', overflow: 'hidden' }}>
        <div style={{
          width: `${pct}%`, height: '100%', borderRadius: 'var(--radius-pill)', background: fill,
          transition: 'width var(--dur-slow) var(--ease-out)',
        }} />
      </div>
    </div>
  );
}
