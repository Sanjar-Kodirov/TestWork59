"use client";

export default function RootError({ error }: { error: Error & { digest?: string } }) {
  return (
    <div style={{ padding: 16 }}>
      <h2>Ошибка загрузки страницы</h2>
      <pre>{error.message}</pre>
    </div>
  );
}
