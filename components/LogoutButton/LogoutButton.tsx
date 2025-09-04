'use client';

import { useFormStatus } from 'react-dom';

export default function LogoutButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} aria-busy={pending} aria-live="polite">
      {pending ? 'Выхожу…' : 'Выйти'}
    </button>
  );
}
