import { redirect } from 'next/navigation';
import { getUserFromCookies } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const user = await getUserFromCookies();
  if (!user) {
    redirect('/login?next=/account');
  }

  return (
    <section style={{ maxWidth: 720, margin: '24px auto', padding: '0 16px' }}>
      <h1 style={{ marginBottom: 8 }}>Account</h1>
      <p style={{ opacity: 0.8, marginBottom: 16 }}>Personal information</p>
      <div
        style={{
          display: 'grid',
          gap: 8,
          padding: 16,
          borderRadius: 12,
          background: 'var(--card)',
        }}
      >
        <div>
          <strong>Username: </strong>
          <span>{user.username}</span>
        </div>
        <div>
          <strong>Name: </strong>
          <span>
            {user.firstName} {user.lastName}
          </span>
        </div>
        <div>
          <strong>Email: </strong>
          <span>{user.email}</span>
        </div>
      </div>
    </section>
  );
}
