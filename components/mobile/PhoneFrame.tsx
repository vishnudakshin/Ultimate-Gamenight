'use client';
import React from 'react';

type TabId = 'home' | 'play' | 'fab' | 'scores' | 'room';

interface PhoneFrameProps {
  children?: React.ReactNode;
  tab?: string;
  onTab?: (id: string) => void;
}

const tabs: { id: TabId; icon: string; label: string }[] = [
  { id: 'home', icon: 'ti-home', label: 'Home' },
  { id: 'play', icon: 'ti-device-gamepad-2', label: 'Play' },
  { id: 'fab', icon: 'ti-plus', label: '' },
  { id: 'scores', icon: 'ti-trophy', label: 'Scores' },
  { id: 'room', icon: 'ti-users', label: 'Room' },
];

export function PhoneFrame({ children, tab = 'home', onTab }: PhoneFrameProps) {
  return (
    <div style={{
      width: 360, background: 'var(--night-850)', borderRadius: 44,
      border: '1.5px solid var(--night-500)', overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)', fontFamily: 'var(--font-ui)', position: 'relative',
    }}>
      {/* status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 22px 6px', fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6 }}>
          <i className="ti ti-signal-4g" /><i className="ti ti-wifi" /><i className="ti ti-battery-3" />
        </span>
      </div>
      {/* screen */}
      <div style={{ height: 640, overflowY: 'auto', overflowX: 'hidden' }}>{children}</div>
      {/* tab bar */}
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        background: 'var(--surface-bar)', borderTop: '1px solid var(--border-hairline)', padding: '10px 0 14px' }}>
        {tabs.map(t => t.id === 'fab' ? (
          <button key={t.id} type="button" onClick={() => onTab?.('play')} aria-label="Host a game" style={{
            width: 48, height: 48, marginTop: -22, borderRadius: '50%', border: '3px solid var(--night-850)',
            background: 'var(--grad-gold)', color: '#2A1A00', boxShadow: 'var(--glow-gold-md)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="ti ti-plus" style={{ fontSize: 24 }} />
          </button>
        ) : (
          <button key={t.id} type="button" onClick={() => onTab?.(t.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 3, color: tab === t.id ? 'var(--purple-300)' : 'var(--text-faint)' }}>
            <i className={`ti ${t.icon}`} style={{ fontSize: 21 }} />
            <span style={{ fontSize: 9, fontWeight: 600 }}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
