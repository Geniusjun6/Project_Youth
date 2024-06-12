import Link from "next/link";
import styles from "../styles/home.module.css";
import { useEffect, useRef, useState } from "react";

export default function ServiceSteps() {
  return (
    <div className={styles.service_steps}>
      {/* 경력관리 */}
      <Link href="/career" className={`${styles.step_container} group`}>
        <div className={styles.step_content}>
          <div className={styles.step_text}>
            <h3>Career Management</h3>
            <h1>AI와 함께하는 전체 경력 관리</h1>
            <p className="hidden group-hover:block">간편한 경력 불러오기와 AI를 통해 쉽게 경력을 관리하세요.</p>
          </div>
          <div className={styles.step_img}>
            <div>
              <img src="/image/CTA-btn.png" alt="바로가기 버튼"></img>
            </div>
            <div>
              <img src="/image/Career.png" alt="경력관리 아이콘"></img>
            </div>
          </div>
        </div>
      </Link>
      {/* 이력서 작성 */}
      <Link href="/resume" className={`${styles.step_container} group`}>
        <div className={styles.step_content}>
          <div className={styles.step_text}>
            <h3>Completion of Resume</h3>
            <h1>간편한 이력서 작성</h1>
            <p className={`${styles.add_text} hidden group-hover:block`}>
              지원 직무와 연관된 라벨의 경력을 선택하여 이력서를 작성해요.
            </p>
          </div>
          <div className={styles.step_img}>
            <div>
              <img src="/image/CTA-btn.png" alt="바로가기 버튼"></img>
            </div>
            <div>
              <img src="/image/resume.png" alt="경력관리 아이콘"></img>
            </div>
          </div>
        </div>
      </Link>
      {/* 이력서 다운로드 */}
      <Link href="/resume" className={`${styles.step_container} group`}>
        <div className={styles.step_content}>
          <div className={styles.step_text}>
            <h3>Download Resume</h3>
            <h1>이력서 다운로드</h1>
            <p className={`${styles.add_text} hidden group-hover:block`}>
              작성한 이력서를 PDF 형태로 다운받을 수 있어요.
            </p>
          </div>
          <div className={styles.step_img}>
            <div>
              <img src="/image/CTA-btn.png" alt="바로가기 버튼"></img>
            </div>
            <div>
              <img src="/image/pdf.png" alt="경력관리 아이콘"></img>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
