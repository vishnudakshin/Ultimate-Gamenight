'use client';
import React from 'react';

interface PillProps {
  children?: React.ReactNode;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Pill({ children, icon, active = false, onClick, style = {} }: PillProps) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-sm)', fontWeight: 600,
        lineHeight: 1, padding: '8px 14px', borderRadius: 'var(--radius-pill)',
        cursor: interactive ? 'pointer' : 'default',
        background: active ? 'var(--purple-500)' : 'var(--night-600)',
        color: active ? 'var(--purple-100)' : 'var(--text-body)',
        border: active ? '1px solid var(--purple-400)' : '1px solid var(--border-soft)',
        boxShadow: active ? 'var(--glow-purple-md)' : 'none',
        transform: hover && interactive && !active ? 'translateY(-1px)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)',
        ...style,
      }}
    >
      {icon ? <i className={`ti ${icon}`} style={{ fontSize: 16 }} aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
