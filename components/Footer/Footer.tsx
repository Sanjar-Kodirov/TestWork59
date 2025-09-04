import styles from './Footer.module.scss';
import { getUserFromCookies } from '@/lib/auth';

export default async function Footer() {
  const user = await getUserFromCookies();
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>
          © {year} {user ? `• Logged as ${user.email}` : ''}
        </span>
      </div>
    </footer>
  );
}
