import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🍃Garden Haven🍃</h1>
      <nav className={styles.nav}>
        <Link href="/" target="_parent" className={styles.link}>Home</Link>
        <Link href="/About" target="_parent" className={styles.link}>About</Link>
        <Link href="/Contact" target="_parent" className={styles.link}>Contact</Link>
      </nav>
    </header>
  );
}
