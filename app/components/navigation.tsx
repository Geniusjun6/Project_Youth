import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_container}>
        <div className={styles.contents}>
          <li>
            <Link href="/">
              <img src="/image/logo_white.png" alt="Logo" width={70} height={70} />
            </Link>
          </li>
        </div>
        <div className={styles.contents}>
          <li>
            <Link className={styles.menu} href="/career">
              경력 관리하기
            </Link>
          </li>
          <li>
            <Link className={styles.menu} href="/resume">
              이력서 작성하기
            </Link>
          </li>
          <li>
            <Link className={styles.menu} href="/contact">
              문의하기
            </Link>
          </li>
        </div>
        <div className={styles.contents}>
          <li>
            <Link className={styles.menu} href="/sign-in">
              로그인
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
