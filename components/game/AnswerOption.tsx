'use client';
import React from 'react';

type AnswerState = 'idle' | 'selected' | 'correct' | 'wrong' | 'muted';

interface AnswerOptionProps {
  children?: React.ReactNode;
  letter?: string;
  state?: AnswerState;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const states = {
  idle:     { bg: 'var(--night-700)', bd: 'var(--border-soft)', fg: 'var(--text-strong)', tok: 'var(--purple-500)', tokFg: 'var(--purple-100)' },
  selected: { bg: 'rgba(124,58,237,0.18)', bd: 'var(--purple-400)', fg: 'var(--purple-100)', tok: 'var(--purple-400)', tokFg: 'var(--purple-100)' },
  correct:  { bg: 'var(--correct-bg)', bd: 'var(--correct-500)', fg: 'var(--correct-400)', tok: 'var(--correct-500)', tokFg: '#06240F' },
  wrong:    { bg: 'var(--wrong-bg)', bd: 'var(--wrong-500)', fg: 'var(--wrong-400)', tok: 'var(--wrong-500)', tokFg: '#2A0606' },
  muted:    { bg: 'var(--night-800)', bd: 'var(--border-strong)', fg: 'var(--text-faint)', tok: 'var(--night-500)', tokFg: 'var(--text-muted)' },
};

export function AnswerOption({ children, letter, state = 'idle', onClick, disabled = false, style = {} }: AnswerOptionProps) {
  const [hov, setHov] = React.useState(false);
  const s = states[state];
  const revealed = state === 'correct' || state === 'wrong';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || revealed}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
        padding: '14px 16px', borderRadius: 'var(--radius-md)', cursor: revealed ? 'default' : 'pointer',
        background: s.bg, border: `1.5px solid ${s.bd}`, color: s.fg,
        fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-body)', fontWeight: 600,
        boxShadow: state === 'correct' ? 'var(--glow-gold-sm)' : 'none',
        transform: hov && state === 'idle' ? 'translateX(3px)' : 'none',
        animation: state === 'correct' ? 'ug-pop-in var(--dur-slow) var(--ease-bounce)'
                 : state === 'wrong' ? 'ug-shake var(--dur-slow) var(--ease-in-out)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        ...style,
      }}
    >
      {letter ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          width: 30, height: 30, borderRadius: 'var(--radius-sm)', background: s.tok, color: s.tokFg,
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15,
        }}>{letter}</span>
      ) : null}
      <span style={{ flex: 1 }}>{children}</span>
      {state === 'correct' ? <i className="ti ti-check" style={{ fontSize: 20 }} aria-hidden="true" /> : null}
      {state === 'wrong' ? <i className="ti ti-x" style={{ fontSize: 20 }} aria-hidden="true" /> : null}
    </button>
  );
}
