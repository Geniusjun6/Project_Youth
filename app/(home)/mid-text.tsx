import styles from "../styles/home.module.css";

export default function MidText() {
  return (
    <div className={styles.mid_content}>
      <p className="text-2xl font-bold text-text_color-gray2">앞으로 더욱 더 빛날 청춘을 함께하겠습니다.</p>
      <div className={styles.mid_main_text}>
        <p>
          AI와 함께하는 <span className="text-youth_color-m">전체 경력관리</span>와
        </p>
        <p>
          라벨링을 활용한 <span className="text-youth_color-m">간편한 이력서 작성</span>
        </p>
        <p>
          작성한 <span className="text-youth_color-m">이력서 다운로드</span>까지
        </p>
      </div>
    </div>
  );
}
