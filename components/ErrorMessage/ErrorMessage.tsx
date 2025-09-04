import styles from './ErrorMessage.module.scss';

export default function ErrorMessage({ message }: { message: string }) {
  return <p className={styles.error}>{message}</p>;
}
