export default function NotFound() {
  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h1 style={{ marginBottom: 8 }}>Страница не найдена</h1>
      <p style={{ opacity: 0.8 }}>Страница, которую вы ищете, не существует.</p>
      <a href="/" style={{ display: 'inline-block', marginTop: 16 }}>
        На главную
      </a>
    </div>
  );
}
