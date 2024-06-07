import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navContainer}>
        <div className={styles.contents}>
          <li>
            <Link href="/">
              <img src="/image/logo_white.png" alt="Logo" width={60} height={60} />
            </Link>
          </li>
        </div>
        <div className={styles.contents}>
          <li className={styles.menu}>
            <Link href="/career">경력 관리하기</Link>
          </li>
          <li className={styles.menu}>
            <Link href="/resume">이력서 작성하기</Link>
          </li>
          <li className={styles.menu}>
            <Link href="/contact">문의하기</Link>
          </li>
          <li className={styles.menu}>
            <Link href="/sign-in">로그인</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
