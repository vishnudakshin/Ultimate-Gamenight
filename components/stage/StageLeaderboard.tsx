'use client';
import React from 'react';
import { Avatar } from '@/components/surfaces/Avatar';
import { Button } from '@/components/core/Button';

const TOP = [
  { name: 'Vikram K', score: 1300, place: 2 as const, h: 150 },
  { name: 'Priya S', score: 1600, place: 1 as const, h: 200 },
  { name: 'Arjun M', score: 1080, place: 3 as const, h: 116 },
];
const REST = [
  { name: 'Meera D', score: 950 },
  { name: 'Rohan T', score: 720 },
];

const podiumColor: Record<1 | 2 | 3, string> = {
  1: 'var(--gold-500)',
  2: 'var(--purple-300)',
  3: 'var(--purple-400)',
};

interface StageLeaderboardProps {
  onNext?: () => void;
}

export function StageLeaderboard({ onNext }: StageLeaderboardProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 30, padding: '92px 44px 78px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
          color: 'var(--gold-400)', marginBottom: 8 }}>End of round 3</div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, textTransform: 'uppercase',
          letterSpacing: '-0.02em', background: 'var(--grad-gold)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
          The Standings
        </h1>
      </div>

      {/* podium */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 22 }}>
        {TOP.map(p => (
          <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Avatar name={p.name} size={p.place === 1 ? 76 : 60} leader={p.place === 1} />
            <span style={{ fontSize: p.place === 1 ? 20 : 16, fontWeight: 800, color: 'var(--text-strong)' }}>{p.name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: p.place === 1 ? 26 : 20,
              color: podiumColor[p.place] }}>{p.score.toLocaleString()}</span>
            <div style={{ width: 150, height: p.h, borderRadius: '12px 12px 0 0',
              background: p.place === 1 ? 'var(--grad-gold)' : 'var(--night-600)',
              border: p.place === 1 ? 'none' : '1px solid var(--border-soft)',
              boxShadow: p.place === 1 ? 'var(--glow-gold-md)' : 'none',
              display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 14,
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44,
              color: p.place === 1 ? '#2A1A00' : 'var(--text-muted)' }}>{p.place}</div>
          </div>
        ))}
      </div>

      {/* rest */}
      <div style={{ display: 'flex', gap: 14 }}>
        {REST.map((p, i) => (
          <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--night-700)',
            border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-pill)', padding: '8px 18px 8px 8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)', width: 22, textAlign: 'center' }}>{i + 4}</span>
            <Avatar name={p.name} size={32} />
            <span style={{ fontWeight: 700, color: 'var(--text-strong)' }}>{p.name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-body)' }}>{p.score.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <Button variant="gold" size="lg" onClick={onNext} iconRight="ti-player-play"
        style={{ fontSize: 18, padding: '16px 34px' }}>Next round</Button>
    </div>
  );
}
