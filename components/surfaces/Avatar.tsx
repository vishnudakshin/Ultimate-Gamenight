'use client';
import React from 'react';

interface AvatarProps {
  name?: string;
  src?: string;
  size?: number;
  leader?: boolean;
  style?: React.CSSProperties;
}

export function Avatar({ name = '', src, size = 40, leader = false, style = {} }: AvatarProps) {
  const initials = name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: '50%', flexShrink: 0,
        background: src ? `center/cover no-repeat url(${src})` : 'var(--grad-purple)',
        color: 'var(--purple-100)', fontFamily: 'var(--font-ui)', fontWeight: 700,
        fontSize: Math.round(size * 0.36), letterSpacing: '0.02em',
        border: leader ? '2px solid var(--gold-500)' : '2px solid var(--purple-300)',
        boxShadow: leader ? 'var(--glow-gold-sm)' : 'none',
        overflow: 'hidden',
        ...style,
      }}
    >
      {!src ? initials : null}
    </span>
  );
}
