export default function RootLoading() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 16,
      padding: 16,
    }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 260,
            borderRadius: 12,
            background: 'var(--card)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.06) 50%, rgba(0,0,0,0) 100%)',
              transform: 'translateX(-100%)',
              animation: 'shimmer 1.2s infinite',
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
