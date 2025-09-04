"use client";

import { FormEvent, useState } from 'react';
import styles from './login.module.scss';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Spinner from '@/components/Spinner/Spinner';

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const u = username.trim();
    const p = password.trim();
    if (u.length < 3 || p.length < 3) {
      setError('Username и Password должны быть не короче 3 символов');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: u, password: p }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || 'Ошибка авторизации');
      }
      const data = await res.json();
      setUser(data.user);
      router.replace('/');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.form} noValidate>
        <h1>Login</h1>
        <label>
          <span>Username</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите username"
            minLength={3}
            aria-label="Username"
            aria-required
            aria-invalid={!!error && username.trim().length < 3}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            minLength={3}
            aria-label="Password"
            aria-required
            aria-invalid={!!error && password.trim().length < 3}
            required
          />
        </label>
        {error && <ErrorMessage message={error} />}
        <button type="submit" disabled={loading} aria-busy={loading} aria-live="polite">
          {loading ? (
            <>
              <Spinner /> <span style={{ marginLeft: 8 }}>Загрузка…</span>
            </>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
}
