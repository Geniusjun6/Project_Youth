import { Metadata } from "next";
import styles from "../styles/home.module.css";

export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <div className={styles.body_container}>
      <div className={styles.intro}>
        <h1 className="text-4xl font-bold">
          우리는 모두 <span className="text-youth_color-m">'청춘'</span>입니다.
        </h1>
        <p className="mt-3">새로운 시작, 두려워 마세요.</p>
        <p>
          경험과 지혜가 더해진 지금, 당신의 새로운 <span className="text-youth_color-m font-bold">‘청춘’</span>을
          응원합니다.
        </p>
      </div>
      <ul className={styles.steps}>
        <li>
          <h1>1. 전체 경력 관리</h1>
        </li>
        <li>
          <h1>2. 이력서 작성</h1>
        </li>
        <li>
          <h1>3. 이력서 다운로드</h1>
        </li>
      </ul>
    </div>
  );
}
