'use client';
import React from 'react';

interface StageShellProps {
  children?: React.ReactNode;
  round?: string;
  code?: string;
  section?: string;
}

export function StageShell({ children, round = 'Round 3 of 5', code = 'PLAY42', section = 'Quiz Whiz' }: StageShellProps) {
  return (
    <div style={{
      width: 1280, height: 720, position: 'relative', overflow: 'hidden',
      background: 'var(--grad-stage)', fontFamily: 'var(--font-ui)',
      border: '1px solid var(--night-500)', borderRadius: 18,
    }}>
      {/* corner stage lights */}
      <span aria-hidden="true" style={{ position: 'absolute', top: -120, left: -120, width: 360, height: 360,
        borderRadius: '50%', background: 'var(--spotlight-purple)' }} />
      <span aria-hidden="true" style={{ position: 'absolute', bottom: -140, right: -140, width: 420, height: 420,
        borderRadius: '50%', background: 'var(--spotlight-gold)', opacity: 0.7 }} />

      {/* top strip */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '24px 36px', zIndex: 3 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: 'var(--ls-wordmark)',
          fontSize: 20, padding: '6px 12px', borderRadius: 8, border: '1.5px solid var(--purple-500)' }}>
          <span style={{ color: 'var(--gold-400)' }}>GAME</span><span style={{ color: 'var(--purple-200)' }}>NIGHT</span>
        </span>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 15, fontWeight: 700,
          letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--purple-300)' }}>{section}</span>
          <span style={{ color: 'var(--text-faint)' }}>·</span>
          <span>{round}</span>
        </div>
      </div>

      {/* content */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex' }}>{children}</div>

      {/* footer ticker */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '18px 36px', zIndex: 3,
        borderTop: '1px solid var(--border-hairline)', background: 'rgba(11,7,21,0.35)' }}>
        <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          <i className="ti ti-device-mobile" style={{ marginRight: 8, color: 'var(--purple-300)' }} />
          Join at <strong style={{ color: 'var(--text-strong)' }}>gamenight.tv</strong> with code
          <strong style={{ color: 'var(--gold-400)', marginLeft: 8, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>{code}</strong>
        </span>
        <span style={{ fontSize: 13, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)' }}>Ultimate Gamenight</span>
      </div>
    </div>
  );
}
