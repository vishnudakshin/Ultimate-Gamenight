'use client';
import React from 'react';
import { MarqueeTitle } from '@/components/game/MarqueeTitle';
import { Button } from '@/components/core/Button';
import { Badge } from '@/components/core/Badge';

interface StageIntroProps {
  onNext?: () => void;
}

export function StageIntro({ onNext }: StageIntroProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: 40 }}>
      <Badge tone="gold" icon="ti-bulb">Next up</Badge>
      <MarqueeTitle eyebrow="Round 3 of 5" size="xl" tone="sheen">Quiz Whiz</MarqueeTitle>
      <p style={{ fontSize: 22, color: 'var(--text-body)', margin: 0, maxWidth: 720, textAlign: 'center' }}>
        Ten questions. Every category. Fastest finger takes the bonus — phones ready?
      </p>
      <Button variant="gold" size="lg" onClick={onNext} iconRight="ti-player-play"
        style={{ fontSize: 18, padding: '16px 34px' }}>Bring on question 1</Button>
    </div>
  );
}
