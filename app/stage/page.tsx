'use client';
import React from 'react';
import Link from 'next/link';
import { StageShell } from '@/components/stage/StageShell';
import { StageIntro } from '@/components/stage/StageIntro';
import { StageQuestion } from '@/components/stage/StageQuestion';
import { StageLeaderboard } from '@/components/stage/StageLeaderboard';

type StageScreen = 'intro' | 'question' | 'leaderboard';
const FLOW: StageScreen[] = ['intro', 'question', 'leaderboard'];

const meta = {
  round: 'Round 3 of 5',
  section: 'Quiz Whiz',
};

export default function StagePage() {
  const [idx, setIdx] = React.useState(0);
  const go = (d: number) => setIdx(v => Math.max(0, Math.min(FLOW.length - 1, v + d)));
  const screen = FLOW[idx];

  return (
    <div style={{
      minHeight: '100vh', background: '#060410', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', maxWidth: 1280, justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none',
          letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase' }}>
          ← Back
        </Link>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)' }}>The Stage</span>
          {FLOW.map((s, i) => (
            <button key={s} type="button" onClick={() => setIdx(i)} style={{
              padding: '5px 12px', borderRadius: 'var(--radius-pill)', fontSize: 12, fontWeight: 600,
              cursor: 'pointer', border: 'none',
              background: idx === i ? 'rgba(245,197,24,0.2)' : 'var(--night-600)',
              color: idx === i ? 'var(--gold-400)' : 'var(--text-muted)',
            }}>{s}</button>
          ))}
          <button type="button" onClick={() => go(-1)} disabled={idx === 0}
            style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border-soft)',
              background: 'rgba(124,58,237,0.2)', color: 'var(--purple-100)', cursor: idx === 0 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: idx === 0 ? 0.4 : 1 }}>‹</button>
          <button type="button" onClick={() => go(1)} disabled={idx === FLOW.length - 1}
            style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border-soft)',
              background: 'rgba(124,58,237,0.2)', color: 'var(--purple-100)', cursor: idx === FLOW.length - 1 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: idx === FLOW.length - 1 ? 0.4 : 1 }}>›</button>
        </div>
      </div>

      {/* scale the 1280×720 stage to fit viewport */}
      <div style={{ width: '100%', maxWidth: 1280, display: 'flex', justifyContent: 'center' }}>
        <div style={{ transformOrigin: 'top center', transform: 'scale(1)' }}>
          <StageShell {...meta}>
            {screen === 'intro' && <StageIntro onNext={() => go(1)} />}
            {screen === 'question' && <StageQuestion onReveal={() => {}} />}
            {screen === 'leaderboard' && <StageLeaderboard onNext={() => setIdx(0)} />}
          </StageShell>
        </div>
      </div>
    </div>
  );
}
