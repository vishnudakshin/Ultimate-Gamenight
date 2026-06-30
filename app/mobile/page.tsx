'use client';
import React from 'react';
import Link from 'next/link';
import { PhoneFrame } from '@/components/mobile/PhoneFrame';
import { HomeScreen } from '@/components/mobile/HomeScreen';
import { LobbyScreen } from '@/components/mobile/LobbyScreen';
import { PictureGameScreen } from '@/components/mobile/PictureGameScreen';
import { ScoreboardScreen } from '@/components/mobile/ScoreboardScreen';

type Screen = 'home' | 'lobby' | 'game' | 'scores';

const tabFor: Record<Screen, string> = {
  home: 'home', lobby: 'play', game: 'play', scores: 'scores',
};

export default function MobilePage() {
  const [screen, setScreen] = React.useState<Screen>('home');

  const handleTab = (t: string) => {
    if (t === 'play') setScreen('lobby');
    else if (t === 'scores') setScreen('scores');
    else setScreen('home');
  };

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--night-900)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 20,
    }}>
      <Link href="/" style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none',
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', alignSelf: 'flex-start' }}>
        ← Back
      </Link>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 18, color: 'var(--text-strong)' }}>
          Mobile App
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['home', 'lobby', 'game', 'scores'] as Screen[]).map(s => (
            <button key={s} type="button" onClick={() => setScreen(s)} style={{
              padding: '5px 12px', borderRadius: 'var(--radius-pill)', fontSize: 12, fontWeight: 600,
              cursor: 'pointer', border: 'none',
              background: screen === s ? 'var(--purple-500)' : 'var(--night-600)',
              color: screen === s ? 'var(--purple-100)' : 'var(--text-muted)',
            }}>{s}</button>
          ))}
        </div>
      </div>

      <PhoneFrame tab={tabFor[screen]} onTab={handleTab}>
        {screen === 'home' && <HomeScreen onPlay={() => setScreen('lobby')} />}
        {screen === 'lobby' && <LobbyScreen onStart={() => setScreen('game')} />}
        {screen === 'game' && <PictureGameScreen onDone={() => setScreen('scores')} />}
        {screen === 'scores' && <ScoreboardScreen onDone={() => setScreen('home')} />}
      </PhoneFrame>
    </div>
  );
}
