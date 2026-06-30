'use client';
import React from 'react';

interface GameTileProps {
  icon?: string;
  title: string;
  sub?: string;
  count?: string;
  spotlight?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function GameTile({ icon = 'ti-photo', title, sub, count, spotlight = false, onClick, style = {} }: GameTileProps) {
  const [hov, setHov] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const accent = spotlight ? 'var(--gold-400)' : 'var(--purple-300)';

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        position: 'relative', overflow: 'hidden', textAlign: 'left', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', gap: 4, width: '100%',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-md)',
        padding: '16px 14px 14px',
        border: spotlight ? '1px solid var(--border-gold)' : '1px solid var(--border-hairline)',
        boxShadow: spotlight
          ? 'var(--shadow-md), var(--glow-gold-sm), var(--sheen)'
          : (hov ? 'var(--shadow-lg), var(--glow-purple-md), var(--sheen)' : 'var(--shadow-md), var(--sheen)'),
        transform: press ? 'scale(0.97)' : (hov ? 'translateY(-3px)' : 'none'),
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        fontFamily: 'var(--font-ui)',
        ...style,
      }}
    >
      <span aria-hidden="true" style={{
        position: 'absolute', bottom: -22, right: -22, width: 66, height: 66, borderRadius: '50%',
        background: spotlight ? 'var(--spotlight-gold)' : 'var(--spotlight-purple)',
        opacity: hov ? 1 : 0.85, transition: 'opacity var(--dur-base)',
      }} />
      <i className={`ti ${icon}`} aria-hidden="true" style={{ fontSize: 22, color: accent, marginBottom: 2 }} />
      <span style={{ fontSize: 'var(--fs-sm)', fontWeight: 700, color: 'var(--text-strong)' }}>{title}</span>
      {sub ? <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-dim)', lineHeight: 1.35 }}>{sub}</span> : null}
      {count ? (
        <span style={{
          marginTop: 4, alignSelf: 'flex-start', fontSize: 'var(--fs-caption)', fontWeight: 700,
          color: accent, background: spotlight ? 'rgba(245,197,24,0.14)' : 'rgba(124,58,237,0.16)',
          borderRadius: 'var(--radius-pill)', padding: '3px 9px',
        }}>{count}</span>
      ) : null}
    </button>
  );
}
