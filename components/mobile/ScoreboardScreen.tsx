'use client';
import React from 'react';
import { Avatar } from '@/components/surfaces/Avatar';
import { Badge } from '@/components/core/Badge';
import { Button } from '@/components/core/Button';

const PLAYERS = [
  { name: 'Priya S', score: 1450, delta: 150 },
  { name: 'Vikram K', score: 1200, delta: 100 },
  { name: 'Arjun M', score: 980, delta: 0 },
  { name: 'Meera D', score: 870, delta: 100 },
  { name: 'Rohan T', score: 640, delta: 0 },
];

interface ScoreboardScreenProps {
  onDone?: () => void;
}

export function ScoreboardScreen({ onDone }: ScoreboardScreenProps) {
  return (
    <div style={{ padding: '10px 16px 20px', background: 'var(--grad-stage)', minHeight: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
          color: 'var(--gold-400)', marginBottom: 6 }}>End of round 3</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 30, textTransform: 'uppercase',
          letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>The board</div>
      </div>

      {/* leader spotlight */}
      <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 14,
        background: 'rgba(245,197,24,0.10)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-lg)',
        padding: 16, marginBottom: 16, boxShadow: 'var(--glow-gold-md)' }}>
        <span aria-hidden="true" style={{ position: 'absolute', bottom: -30, right: -20, width: 100, height: 100,
          borderRadius: '50%', background: 'var(--spotlight-gold)' }} />
        <Avatar name="Priya S" size={56} leader />
        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-strong)' }}>Priya S</span>
            <Badge tone="gold" icon="ti-crown">Leader</Badge>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 24, color: 'var(--gold-400)' }}>1,450</div>
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, color: 'var(--gold-500)', position: 'relative' }}>1</span>
      </div>

      {/* the rest */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {PLAYERS.slice(1).map((p, i) => (
          <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 12,
            background: 'var(--night-700)', border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-md)', padding: '10px 14px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16, color: 'var(--text-muted)', width: 18 }}>{i + 2}</span>
            <Avatar name={p.name} size={36} />
            <span style={{ flex: 1, fontWeight: 700, color: 'var(--text-strong)' }}>{p.name}</span>
            {p.delta ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--correct-400)' }}>+{p.delta}</span> : null}
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>{p.score.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <Button variant="primary" full size="lg" onClick={onDone} iconRight="ti-player-play" style={{ marginTop: 18 }}>Next round</Button>
    </div>
  );
}
