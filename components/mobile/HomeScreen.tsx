'use client';
import React from 'react';
import { Badge } from '@/components/core/Badge';
import { Avatar } from '@/components/surfaces/Avatar';
import { GameTile } from '@/components/game/GameTile';

const sections = [
  { icon: 'ti-photo', title: 'Picture This', sub: 'Logos, flags, places', count: '40 clues' },
  { icon: 'ti-typography', title: 'Letter Rip', sub: 'Connections, Wordle', count: '12 packs' },
  { icon: 'ti-bulb', title: 'Quiz Whiz', sub: 'Classic trivia', count: '120 Qs', spotlight: true },
  { icon: 'ti-eye', title: 'Read Between the Lines', sub: 'Rebus puzzles', count: '30 rebus' },
  { icon: 'ti-masks-theater', title: 'Charade You Are', sub: 'Act it, guess it', count: '60 cards' },
  { icon: 'ti-dice', title: 'Game of Tones', sub: 'Hues & Cues + more', count: '8 games' },
];

interface HomeScreenProps {
  onPlay?: () => void;
}

export function HomeScreen({ onPlay }: HomeScreenProps) {
  return (
    <div style={{ padding: '4px 16px 20px' }}>
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0 14px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: 'var(--ls-wordmark)',
          fontSize: 14, padding: '4px 9px', borderRadius: 6, border: '1.5px solid var(--purple-500)' }}>
          <span style={{ color: 'var(--gold-400)' }}>GAME</span><span style={{ color: 'var(--purple-200)' }}>NIGHT</span>
        </span>
        <Avatar name="Vikram K" size={32} />
      </div>

      {/* hero */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-stage)',
        border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', padding: '18px 18px 20px', marginBottom: 18 }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: -30, right: -20, width: 120, height: 120,
          borderRadius: '50%', background: 'var(--spotlight-gold)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            <Badge tone="live">On air</Badge>
            <Badge tone="gold" icon="ti-users">5 in the room</Badge>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, lineHeight: 1.08,
            textTransform: 'uppercase', color: 'var(--text-strong)', letterSpacing: '-0.02em', marginBottom: 14 }}>
            Friday<br /><span style={{ background: 'var(--grad-gold)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Game Night</span>
          </div>
          <button type="button" onClick={onPlay} style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--purple-500)', color: 'var(--purple-100)', border: 'none', borderRadius: 'var(--radius-pill)',
            padding: '11px 20px', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            <i className="ti ti-player-play" /> Start the show
          </button>
        </div>
      </div>

      {/* section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-strong)' }}>Pick your poison</span>
        <span style={{ height: 2, flex: 1, background: 'var(--night-500)', borderRadius: 2 }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {sections.map(s => (
          <GameTile key={s.title} icon={s.icon} title={s.title} sub={s.sub} count={s.count}
            spotlight={s.spotlight} onClick={onPlay} />
        ))}
      </div>
    </div>
  );
}
