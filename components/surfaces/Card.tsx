'use client';
import React from 'react';

type CardGlow = 'purple' | 'gold' | 'none';
type CardPad = 'sm' | 'md' | 'lg';
type CardRadius = 'md' | 'lg' | 'xl';

interface CardProps {
  children?: React.ReactNode;
  glow?: CardGlow;
  pad?: CardPad;
  radius?: CardRadius;
  spotlight?: boolean;
  hover?: boolean;
  style?: React.CSSProperties;
}

const pads = { sm: 'var(--sp-3)', md: 'var(--sp-4)', lg: 'var(--sp-6)' };
const radii = { md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)' };
const glowMap = {
  purple: 'var(--spotlight-purple)',
  gold: 'var(--spotlight-gold)',
  none: 'none',
};

export function Card({ children, glow = 'purple', pad = 'md', radius = 'lg', spotlight = false, hover = false, style = {} }: CardProps) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--surface-card)',
        border: spotlight ? '1px solid var(--border-gold)' : '1px solid var(--border-hairline)',
        borderRadius: radii[radius],
        padding: pads[pad],
        boxShadow: spotlight
          ? 'var(--shadow-md), var(--glow-gold-md), var(--sheen)'
          : (hover && hov ? 'var(--shadow-lg), var(--glow-purple-md), var(--sheen)' : 'var(--shadow-md), var(--sheen)'),
        transform: hover && hov ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        fontFamily: 'var(--font-ui)', color: 'var(--text-body)',
        ...style,
      }}
    >
      {glow !== 'none' ? (
        <span aria-hidden="true" style={{
          position: 'absolute', bottom: -28, right: -28, width: 88, height: 88,
          borderRadius: '50%', background: glowMap[glow], pointerEvents: 'none',
        }} />
      ) : null}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
