"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logoutAction() {
  const store = cookies();
  store.set('token', '', { path: '/', maxAge: 0 });
  store.set('user', '', { path: '/', maxAge: 0 });
  redirect('/');
}
