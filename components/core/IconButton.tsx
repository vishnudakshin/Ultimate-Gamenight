'use client';
import React from 'react';

type IconButtonVariant = 'soft' | 'solid' | 'gold' | 'ghost';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  label: string;
}

const sizeMap = { sm: 32, md: 40, lg: 56 };
const iconSizeMap = { sm: 16, md: 19, lg: 26 };

const variants = {
  soft:  { base: { background: 'var(--night-600)', color: 'var(--purple-300)', border: '1px solid var(--border-soft)' },
           hover: { background: 'var(--night-500)', color: 'var(--purple-200)' } },
  solid: { base: { background: 'var(--purple-500)', color: 'var(--purple-100)', border: '1px solid transparent' },
           hover: { background: 'var(--purple-400)', boxShadow: 'var(--glow-purple-md)' } },
  gold:  { base: { background: 'var(--grad-gold)', color: '#2A1A00', border: '1px solid transparent' },
           hover: { boxShadow: 'var(--glow-gold-md)' } },
  ghost: { base: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent' },
           hover: { background: 'rgba(124,58,237,0.14)', color: 'var(--purple-300)' } },
};

export function IconButton({ icon, variant = 'soft', size = 'md', label, disabled = false, style = {}, ...rest }: IconButtonProps) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const dim = sizeMap[size];
  const iconSize = iconSizeMap[size];
  const v = variants[variant];

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transform: press && !disabled ? 'scale(0.92)' : 'scale(1)',
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...v.base, ...(hover && !disabled ? v.hover : {}), ...style,
      }}
      {...rest}
    >
      <i className={`ti ${icon}`} style={{ fontSize: iconSize }} aria-hidden="true" />
    </button>
  );
}
