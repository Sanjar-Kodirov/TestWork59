import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const url = new URL('/', request.url);
  const res = NextResponse.redirect(url, { status: 303 });
  res.cookies.set('token', '', { path: '/', maxAge: 0 });
  res.cookies.set('user', '', { path: '/', maxAge: 0 });
  return res;
}
