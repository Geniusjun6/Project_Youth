"use client";

import Link from "next/link";
import styles from "../styles/home.module.css";
import { useEffect, useState } from "react";

/** 이력서 작성하기 버튼 */
export default function Button() {
  const [isAtCriteria, setIsAtCriteriaHeight] = useState<boolean>(false);

  const handleScroll: () => void = () => {
    const criteriaHeight: number = 800; // 기준 높이를 설정
    const scrollTop: number = window.scrollY;
    const windowHeight: number = window.innerHeight;
    const documentHeight: number = document.documentElement.scrollHeight;

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

  /* tailwind CSS */
  const scrollEnd: string = "flex h-[52] w-full justify-center items-center transition-all duration-300";
  const scrolling: string = "fixed bottom-[80px] left-0 w-full flex justify-center p-4 transition-all duration-300";

  return (
    <div className={`${isAtCriteria ? scrollEnd : scrolling}`}>
      <Link
        href="/resume"
        className="w-[800px] min-w-max py-3 shadow-md rounded-[15px] bg-youth_color-m text-text_color-gray font-semibold text-lg text-center hover:bg-youth_color-s"
      >
        이력서 작성하기
      </Link>
    </div>
  );
}
