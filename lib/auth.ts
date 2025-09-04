import { cookies } from 'next/headers';
import type { User } from './types';

export async function getUserFromCookies(): Promise<User | null> {
  const cookieStore = await cookies();
  const user = cookieStore.get('user')?.value;
  if (!user) return null;
  try {
    return JSON.parse(user) as User;
  } catch {
    return null;
  }
}
