'use client';
import React from 'react';

interface TimerProps {
  seconds?: number;
  remaining?: number;
  running?: boolean;
  size?: number;
  onComplete?: () => void;
  style?: React.CSSProperties;
}

export function Timer({ seconds = 30, remaining, running = false, size = 88, onComplete, style = {} }: TimerProps) {
  const [time, setTime] = React.useState(remaining != null ? remaining : seconds);

  React.useEffect(() => { if (remaining != null) setTime(remaining); }, [remaining]);

  React.useEffect(() => {
    if (!running) return;
    if (time <= 0) { onComplete?.(); return; }
    const id = setTimeout(() => setTime(t => Math.max(0, t - 1)), 1000);
    return () => clearTimeout(id);
  }, [running, time, onComplete]);

  const pct = Math.max(0, Math.min(1, time / seconds));
  const low = pct <= 0.25;
  const stroke = low ? 'var(--wrong-500)' : (pct <= 0.5 ? 'var(--gold-500)' : 'var(--purple-400)');
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  const mm = String(Math.floor(time / 60)).padStart(2, '0');
  const ss = String(time % 60).padStart(2, '0');

  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--night-600)" strokeWidth="6" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={stroke} strokeWidth="6"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke var(--dur-base) var(--ease-out)' }}
        />
      </svg>
      <span style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: size * 0.26,
        color: low ? 'var(--wrong-400)' : 'var(--text-strong)',
        animation: low ? 'ug-pulse-gold 1s var(--ease-in-out) infinite' : 'none',
      }}>{seconds >= 60 ? `${mm}:${ss}` : time}</span>
    </div>
  );
}
