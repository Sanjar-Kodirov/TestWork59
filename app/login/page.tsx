'use client';

import { useFormStatus } from 'react-dom';
import styles from './login.module.scss';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Spinner from '@/components/Spinner/Spinner';
import { loginAction } from './actions';
import { useSearchParams } from 'next/navigation';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} aria-busy={pending} aria-live="polite">
      {pending ? <Spinner /> : 'Войти'}
    </button>
  );
}

export default function LoginPage() {
  const searchParams = useSearchParams();
  const nextPath = searchParams.get('next') || '/';
  const error = searchParams.get('error');

  return (
    <div className={styles.wrapper}>
      <form action={loginAction} className={styles.form} noValidate>
        <h1>Вход</h1>
        <input type="hidden" name="next" value={nextPath} />
        <label>
          <span>Username</span>
          <input
            name="username"
            placeholder="Введите username"
            minLength={3}
            aria-label="Username"
            aria-required
            required
            autoComplete="username"
            autoFocus
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            minLength={3}
            aria-label="Password"
            aria-required
            required
            autoComplete="current-password"
          />
        </label>
        <SubmitButton />
        {error && <ErrorMessage message={error} />}
      </form>
    </div>
  );
}
