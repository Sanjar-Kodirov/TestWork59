import Link from 'next/link';
import styles from './Header.module.scss';
import { getUserFromCookies } from '@/lib/auth';

export default async function Header() {
  const user = await getUserFromCookies();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>TestWork59</Link>
        <nav>
          {user ? (
            <div className={styles.userBlock}>
              <span>{user.firstName} {user.lastName}</span>
              <form action="/api/logout" method="post">
                <button type="submit">Logout</button>
              </form>
            </div>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
