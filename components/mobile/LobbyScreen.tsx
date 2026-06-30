'use client';
import React from 'react';
import { Avatar } from '@/components/surfaces/Avatar';
import { Badge } from '@/components/core/Badge';
import { Button } from '@/components/core/Button';
import { Pill } from '@/components/core/Pill';

const PLAYERS = ['Vikram K', 'Priya S', 'Arjun M', 'Meera D', 'Rohan T'];

const ALL_SECTIONS = [
  { t: 'Picture This', i: 'ti-photo' },
  { t: 'Letter Rip', i: 'ti-typography' },
  { t: 'Quiz Whiz', i: 'ti-bulb' },
  { t: 'Read Between the Lines', i: 'ti-eye' },
  { t: 'Charade You Are', i: 'ti-masks-theater' },
  { t: 'Game of Tones', i: 'ti-dice' },
];

interface LobbyScreenProps {
  onStart?: () => void;
}

export function LobbyScreen({ onStart }: LobbyScreenProps) {
  const [secs, setSecs] = React.useState(['Picture This', 'Quiz Whiz', 'Letter Rip']);
  const toggle = (t: string) => setSecs(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);

  return (
    <div style={{ padding: '10px 16px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: 8 }}>Join at gamenight.tv · room</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 40, letterSpacing: '0.18em',
          color: 'var(--gold-400)', textShadow: '0 0 28px rgba(245,197,24,0.35)' }}>PLAY42</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-strong)' }}>In the room</span>
        <Badge tone="purple">{PLAYERS.length}</Badge>
        <span style={{ height: 2, flex: 1, background: 'var(--night-500)', borderRadius: 2 }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
        {PLAYERS.map(p => (
          <div key={p} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, width: 56,
            animation: 'ug-pop-in var(--dur-slow) var(--ease-bounce)' }}>
            <Avatar name={p} size={44} />
            <span style={{ fontSize: 10, color: 'var(--text-muted)', textAlign: 'center' }}>{p.split(' ')[0]}</span>
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, width: 56 }}>
          <span style={{ width: 44, height: 44, borderRadius: '50%', border: '2px dashed var(--border-strong)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-faint)' }}>
            <i className="ti ti-dots" style={{ fontSize: 18 }} /></span>
          <span style={{ fontSize: 10, color: 'var(--text-faint)' }}>waiting</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-strong)' }}>Tonight's lineup</span>
        <span style={{ height: 2, flex: 1, background: 'var(--night-500)', borderRadius: 2 }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
        {ALL_SECTIONS.map(s => (
          <Pill key={s.t} icon={s.i} active={secs.includes(s.t)} onClick={() => toggle(s.t)}>{s.t}</Pill>
        ))}
      </div>

      <Button variant="gold" full size="lg" onClick={onStart} iconRight="ti-player-play"
        disabled={secs.length === 0}>Start the show · {secs.length} rounds</Button>
    </div>
  );
}
