import { NextResponse } from 'next/server';
import { login } from '@/lib/api';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body || {};
    if (!username || !password || username.length < 3 || password.length < 3) {
      return NextResponse.json({ message: 'Некорректные данные' }, { status: 400 });
    }

    const { user, token } = await login(username, password);

    const res = NextResponse.json({ user });
    res.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
    res.cookies.set('user', JSON.stringify(user), {
      httpOnly: false,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (e: any) {
    const message = e?.response?.data?.message || e?.message || 'Ошибка авторизации';
    return NextResponse.json({ message }, { status: 401 });
  }
}
