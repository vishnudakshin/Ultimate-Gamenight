'use client';
import React from 'react';
import { AnswerOption } from '@/components/game/AnswerOption';
import { Timer } from '@/components/game/Timer';
import { ProgressBar } from '@/components/game/ProgressBar';
import { Button } from '@/components/core/Button';
import { Badge } from '@/components/core/Badge';

const ANSWERS = ['Spotify', 'Deezer', 'SoundCloud', 'Tidal'];
const CORRECT = 0;

interface PictureGameScreenProps {
  onDone?: () => void;
}

export function PictureGameScreen({ onDone }: PictureGameScreenProps) {
  const [picked, setPicked] = React.useState<number | null>(null);
  const [revealed, setRevealed] = React.useState(false);

  const stateFor = (i: number) => {
    if (!revealed) return picked === i ? 'selected' : 'idle';
    if (i === CORRECT) return 'correct';
    if (i === picked) return 'wrong';
    return 'muted';
  };

  return (
    <div style={{ padding: '6px 16px 20px', minHeight: '100%' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <Badge tone="purple" icon="ti-photo">Picture This</Badge>
        <Badge tone="gold">+100 pts</Badge>
      </div>
      <ProgressBar label="Round 1 of 5" value={3} max={8} segments={8} style={{ marginBottom: 16 }} />

      {/* clue image frame */}
      <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        border: '1px solid var(--border-soft)', background: 'var(--night-700)', height: 168,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--spotlight-purple)' }} />
        <i className="ti ti-brand-spotify" style={{ fontSize: 92, color: revealed ? 'var(--correct-400)' : 'var(--purple-300)',
          filter: revealed ? 'none' : 'blur(2px)', opacity: revealed ? 1 : 0.92, position: 'relative',
          transition: 'all var(--dur-slow) var(--ease-out)' }} />
        <span style={{ position: 'absolute', bottom: 10, left: 12, fontSize: 12, fontWeight: 700,
          color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)' }}>Guess the logo</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--text-strong)' }}>
          Which brand is this?
        </span>
        <Timer seconds={15} remaining={revealed ? 0 : 9} size={56} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {ANSWERS.map((a, i) => (
          <AnswerOption key={a} letter={['A', 'B', 'C', 'D'][i]} state={stateFor(i) as 'idle' | 'selected' | 'correct' | 'wrong' | 'muted'}
            onClick={() => !revealed && setPicked(i)}>{a}</AnswerOption>
        ))}
      </div>

      {!revealed ? (
        <Button variant="gold" full size="lg" disabled={picked === null}
          onClick={() => setRevealed(true)} iconRight="ti-lock">Lock it in</Button>
      ) : (
        <Button variant="primary" full size="lg" onClick={onDone} iconRight="ti-arrow-right">Next clue</Button>
      )}
    </div>
  );
}
