'use client';
import React from 'react';

type ButtonVariant = 'primary' | 'gold' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconRight?: string;
  full?: boolean;
}

const sizes = {
  sm: { fontSize: 13, padding: '8px 14px', gap: 6, icon: 15 },
  md: { fontSize: 15, padding: '12px 22px', gap: 8, icon: 18 },
  lg: { fontSize: 17, padding: '16px 30px', gap: 10, icon: 20 },
};

const variants = {
  primary:   {
    base:  { background: 'var(--purple-500)', color: 'var(--purple-100)', border: '1px solid transparent' },
    hover: { background: 'var(--purple-400)', boxShadow: 'var(--glow-purple-md)' },
    press: { background: 'var(--purple-600)' },
  },
  gold: {
    base:  { background: 'var(--grad-gold)', color: '#2A1A00', border: '1px solid transparent', fontWeight: 800 as number },
    hover: { boxShadow: 'var(--glow-gold-md)' },
    press: { filter: 'brightness(0.94)' },
  },
  secondary: {
    base:  { background: 'var(--night-600)', color: 'var(--text-strong)', border: '1px solid var(--border-soft)' },
    hover: { background: 'var(--night-500)', borderColor: 'var(--purple-400)' },
    press: { background: 'var(--night-700)' },
  },
  ghost: {
    base:  { background: 'transparent', color: 'var(--purple-300)', border: '1px solid transparent' },
    hover: { background: 'rgba(124,58,237,0.14)' },
    press: { background: 'rgba(124,58,237,0.22)' },
  },
};

export function Button({
  children, variant = 'primary', size = 'md', icon, iconRight,
  full = false, disabled = false, style = {}, ...rest
}: ButtonProps) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const s = sizes[size];
  const v = variants[variant];

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, width: full ? '100%' : 'auto',
        fontFamily: 'var(--font-ui)', fontWeight: ('fontWeight' in v.base ? v.base.fontWeight : 700) as number,
        fontSize: s.fontSize, lineHeight: 1, padding: s.padding,
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: press ? 'scale(0.96)' : 'scale(1)',
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...v.base,
        ...(hover && !disabled ? v.hover : {}),
        ...(press && !disabled ? v.press : {}),
        ...style,
      }}
      {...rest}
    >
      {icon ? <i className={`ti ${icon}`} style={{ fontSize: s.icon }} aria-hidden="true" /> : null}
      {children}
      {iconRight ? <i className={`ti ${iconRight}`} style={{ fontSize: s.icon }} aria-hidden="true" /> : null}
    </button>
  );
}
