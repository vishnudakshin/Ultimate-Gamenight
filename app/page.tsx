import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: 48, background: 'var(--night-900)', padding: 32,
    }}>
      {/* wordmark */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: 'var(--ls-wordmark)',
          fontSize: 22, padding: '8px 16px', borderRadius: 8, border: '1.5px solid var(--purple-500)',
          display: 'inline-block', marginBottom: 16, textAlign: 'center' }}>
          <span style={{ color: 'var(--gold-400)' }}>GAME</span><span style={{ color: 'var(--purple-200)' }}>NIGHT</span>
        </div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56,
          textTransform: 'uppercase', letterSpacing: '-0.02em', textAlign: 'center',
          background: 'var(--grad-gold)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
          Ultimate<br />Gamenight
        </h1>
        <p style={{ margin: '12px 0 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: 16 }}>
          The whole game show, in your living room.
        </p>
      </div>

      {/* surface links */}
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/mobile" style={{
          display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center',
          background: 'var(--night-700)', border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-xl)', padding: '28px 36px', textDecoration: 'none',
          color: 'var(--text-strong)', transition: 'all var(--dur-base) var(--ease-out)',
          boxShadow: 'var(--shadow-md), var(--sheen)',
        }}>
          <i className="ti ti-device-mobile" style={{ fontSize: 42, color: 'var(--purple-300)' }} />
          <span style={{ fontWeight: 800, fontSize: 18 }}>Mobile App</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
            Player phone interface<br />Lobby → Game → Scoreboard
          </span>
        </Link>

        <Link href="/stage" style={{
          display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center',
          background: 'rgba(245,197,24,0.08)', border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-xl)', padding: '28px 36px', textDecoration: 'none',
          color: 'var(--text-strong)', transition: 'all var(--dur-base) var(--ease-out)',
          boxShadow: 'var(--glow-gold-sm), var(--shadow-md), var(--sheen)',
        }}>
          <i className="ti ti-device-tv" style={{ fontSize: 42, color: 'var(--gold-400)' }} />
          <span style={{ fontWeight: 800, fontSize: 18 }}>The Stage</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
            TV / big-screen host display<br />Intro → Question → Standings
          </span>
        </Link>
      </div>

      <div style={{ fontSize: 12, color: 'var(--text-faint)', letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase' }}>Ultimate Gamenight · Design System</div>
    </main>
  );
}
