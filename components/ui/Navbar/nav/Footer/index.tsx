import Link from 'next/link';
import styles from './style.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://www.instagram.com/dragomir_mihai99/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
        Instagram
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100008379436358" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
        Facebook
      </Link>
      <Link href="https://millenniumhotel.ro/ro/restaurant-atic/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
        Atic
      </Link>
    </div>
  );
}
