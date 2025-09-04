import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getMe } from '@/lib/api';

export async function GET() {
  const token = cookies().get('token')?.value;
  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 });
  }
  try {
    const user = await getMe(token);
    return NextResponse.json({ user }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ user: null, error: e?.message || 'Failed to fetch user' }, { status: 200 });
  }
}
