import Link from 'next/link';
import styles from './Header.module.scss';
import { getUserFromCookies } from '@/lib/auth';
import { logoutAction } from '@/app/actions/logout';
import LogoutButton from '@/components/LogoutButton/LogoutButton';

export default async function Header() {
  const user = await getUserFromCookies();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          TestWork59
        </Link>
        <nav>
          {user ? (
            <div className={styles.userBlock}>
              <span>
                {user.firstName} {user.lastName}
              </span>
              <form action={logoutAction}>
                <LogoutButton />
              </form>
            </div>
          ) : (
            <Link href="/login">Вход</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
