"use client";

import Link from "next/link";
import styles from "../styles/home.module.css";
import { useEffect, useState } from "react";

/** 이력서 작성하기 버튼 */
export default function Button() {
  const [isBottom, setBottom] = useState(false);

  const handleScroll = () => {
    const footerHeight = 240; // Footer의 높이를 설정
    const footerButtonOffset = 50; //
    const scrollTop = window.scrollY;
    console.log("scrollTop: ", scrollTop);
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 현재 스크롤 위치가 Footer 근처인지 확인
    if (scrollTop + windowHeight >= documentHeight - footerHeight - footerButtonOffset) {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${isBottom ? styles.resume_btn_end : styles.resume_btn_scroll}`}>
      <Link href="/resume" className={styles.resume_btn}>
        이력서 작성하기
      </Link>
    </div>
  );
}
