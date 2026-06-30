'use client';
import React from 'react';
import { AnswerOption } from '@/components/game/AnswerOption';
import { Timer } from '@/components/game/Timer';
import { Avatar } from '@/components/surfaces/Avatar';
import { Badge } from '@/components/core/Badge';

const ANSWERS = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
const CORRECT = 1;
const ANSWERED = ['Priya S', 'Vikram K', 'Arjun M', 'Meera D'];

interface StageQuestionProps {
  onReveal?: () => void;
}

export function StageQuestion({ onReveal }: StageQuestionProps) {
  const [revealed, setRevealed] = React.useState(false);

  const stateFor = (i: number) => {
    if (!revealed) return 'idle';
    return i === CORRECT ? 'correct' : 'muted';
  };

  return (
    <div style={{ flex: 1, display: 'flex', gap: 40, padding: '92px 44px 78px', alignItems: 'center' }}>
      {/* left: prompt + timer */}
      <div style={{ width: 470, display: 'flex', flexDirection: 'column', gap: 26 }}>
        <Badge tone="purple">Question 4</Badge>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42,
          lineHeight: 1.12, color: 'var(--text-strong)' }}>
          Which planet is the hottest in our solar system?
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <Timer seconds={20} remaining={revealed ? 0 : 7} size={110} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: 8 }}>{ANSWERED.length} of 5 locked in</div>
            <div style={{ display: 'flex' }}>
              {ANSWERED.map((p, i) => (
                <span key={p} style={{ marginLeft: i ? -10 : 0 }}><Avatar name={p} size={36} /></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* right: answers 2×2 */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {ANSWERS.map((a, i) => (
          <AnswerOption key={a} letter={['A', 'B', 'C', 'D'][i]} state={stateFor(i) as 'idle' | 'correct' | 'muted'}
            onClick={() => { if (!revealed) { setRevealed(true); onReveal?.(); } }}
            style={{ fontSize: 24, padding: '26px 24px', borderRadius: 'var(--radius-lg)' }}>{a}</AnswerOption>
        ))}
      </div>
    </div>
  );
}
