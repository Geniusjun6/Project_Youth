"use client";

import Link from "next/link";
import { useState } from "react";
import NavMenu from "./nav-menu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-40 fixed top-0 left-0 right-0 shadow-md bg-youth_color-m p-4 mb-4 content-center text-text_color-gray text-xl">
      <ul className="flex justify-between w-11/12 mx-auto;">
        <div className="flex content-center space-x-10 shrink-0;">
          <li>
            <Link href="/">
              <img src="/image/logo_white.png" alt="Logo" width={70} height={70} />
            </Link>
          </li>
          <button className="md:hidden block;" onClick={toggleMenu}>
            <svg
              className="w-6 h-6;"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`flex content-center space-x-10 shrink-0 ${isOpen ? "show" : "hide"}`}>
          <NavMenu menuName={"경력 관리하기"} href={"/career"} />
          <NavMenu menuName={"이력서 작성하기"} href={"/resume"} />
          <NavMenu menuName={"문의하기"} href={"/contact"} />
        </div>
        <div className={`flex content-center space-x-10 shrink-0 ${isOpen ? "show" : "hide"}`}>
          <NavMenu menuName={"로그인"} href={"/sign-in"} />
        </div>
      </ul>
    </nav>
  );
}
