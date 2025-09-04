'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { login } from '@/lib/api';

export type LoginFormState = {
  error: string | null;
  next?: string;
};

export async function loginAction(formData: FormData): Promise<void> {
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '').trim();
  const next = String(formData.get('next') || '') || '/';

  if (username.length < 3 || password.length < 3) {
    const message = encodeURIComponent('Username и Password должны быть не короче 3 символов');
    redirect(`/login?error=${message}&next=${encodeURIComponent(next)}`);
  }

  try {
    const { user, token } = await login(username, password);

    const store = cookies();

    store.set('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    store.set('user', JSON.stringify(user), {
      httpOnly: false,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (e: any) {
    const message = encodeURIComponent(
      e?.response?.data?.message || e?.message || 'Ошибка авторизации'
    );
    redirect(`/login?error=${message}&next=${encodeURIComponent(next)}`);
  }

  redirect(next);
}
