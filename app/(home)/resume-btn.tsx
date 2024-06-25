"use client";

import Link from "next/link";
import styles from "../styles/home.module.css";
import { useEffect, useState } from "react";

/** 이력서 작성하기 버튼 */
export default function Button() {
  const [isAtCriteria, setIsAtCriteriaHeight] = useState(false);

  const handleScroll = () => {
    const criteriaHeight = 800; // 기준 높이를 설정
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 현재 스크롤 위치가 기준 근처인지 확인
    if (scrollTop + windowHeight >= documentHeight - criteriaHeight) {
      setIsAtCriteriaHeight(true);
    } else {
      setIsAtCriteriaHeight(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${isAtCriteria ? styles.resume_btn_end : styles.resume_btn_scroll}`}>
      <Link href="/resume" className={styles.resume_btn}>
        이력서 작성하기
      </Link>
    </div>
  );
}
