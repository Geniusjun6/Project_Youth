import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.foot_container}>
        <div className={styles.top_contents}>
          <div>
            <Link href="/">
              <img src="/image/logo_white.png" alt="Logo_White" width={50} height={50}></img>
            </Link>
          </div>
          <ul className={styles.footer_menu_list}>
            <li>
              <Link className={styles.footer_menu} href="/about-us">
                회사소개
              </Link>
            </li>
            <li>
              <Link className={styles.footer_menu} href="/contact">
                문의하기
              </Link>
            </li>
            <li>
              <Link className={styles.footer_menu} href="/policy/service">
                이용약관
              </Link>
            </li>
            <li>
              <Link className={styles.footer_menu} href="/policy/privacy">
                개인정보 처리방침
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.corp_info}>
          <span>대표이사 문준식</span>
          <span className="mx-2">|</span>
          <span>이메일 : youth@theyouth.com</span>
          <p />
          <span>서울특별시 강남구 테헤란로 000, 00층</span> <span className="mx-2">|</span>
          <span>대표전화 : 02-000-0000</span>
          <p />
          <span>사업자등록번호 : 000-00-0000</span> <span className="mx-2">|</span>
          <span>통신판매번호 : 2024-서울강남-0000</span> <span className="mx-2">|</span>
          <span>유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호</span>
        </div>
      </div>
    </footer>
  );
}
