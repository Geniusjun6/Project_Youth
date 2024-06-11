import { Metadata } from "next";
import styles from "../styles/home.module.css";

export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <div className={styles.body_container}>
      {/* Top-Banner 시작 */}
      <div className={styles.top_banner}>
        <div className={styles.banner_gradient}>
          <div className={styles.top_banner_text}>
            <p className={styles.banner_title}>
              우리는 모두 <span className="text-youth_color-m">청춘</span>입니다.
            </p>
            <p className={styles.banner_sub_title}>새로운 시작, 두려워 마세요.</p>
            <p className={styles.banner_sub_title}>경험과 지혜가 더해진 지금, 당신의 새로운 '청춘'을 응원합니다.</p>
          </div>
        </div>
      </div>
      {/* Top-Banner 끝 */}
      {/* Mid-Content 시작 */}
      <div className={styles.mid_content}></div>
    </div>
  );
}
