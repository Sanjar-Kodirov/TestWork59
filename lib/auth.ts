import { cookies } from 'next/headers';
import type { User } from './types';
import { getMe } from './api';

export async function getUserFromCookies(): Promise<User | null> {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;
  try {
    const user = await getMe(token);
    return user;
  } catch {
    return null;
  }
}
