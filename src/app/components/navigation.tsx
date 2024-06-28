"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "/public/image/logo.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    isOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <nav className="w-screen z-40 fixed top-0 left-0 right-0 shadow-md bg-youth_color-m p-4 mb-4 content-center text-text_color-gray text-sm md:text-xl">
      <ul className="flex justify-between w-11/12 min-w-[320px] mx-auto z-30">
        <div className="flex content-center space-x-10">
          <li className="flex justify-center items-center">
            <Link href="/">
              <Image className="md:w-[60px] md:h-[60px] w-12 h-12" src={logo} alt="로고" />
            </Link>
          </li>
        </div>
        <div className="hidden md:flex content-center space-x-10 shrink-0">
          <NavMenu menuName={"경력 관리하기"} href={"/career"} />
          <NavMenu menuName={"이력서 작성하기"} href={"/resume"} />
          <NavMenu menuName={"문의하기"} href={"/contact"} />
        </div>
        <div className="flex space-x-3">
          <div className="flex">
            <NavMenu menuName={"로그인"} href={"/sign-in"} />
          </div>
          <button className="flex md:hidden text-xl justify-center items-center p-2">
            {isOpen ? (
              <FontAwesomeIcon className="text-xl" onClick={toggleMenu} icon={faX} />
            ) : (
              <FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
            )}
          </button>
        </div>
      </ul>
      {/* 모바일 메뉴 */}
      <ul className={`${isOpen ? "flex" : "hidden"} flex-col px-3 py-2 md:hidden`}>
        <hr className="mb-4" />
        <NavMenu menuName="경력 관리하기" href="/career" css="p-4" />
        <NavMenu menuName="이력서 작성하기" href="/resume" css="p-4" />
        <NavMenu menuName="문의하기" href="/contact" css="p-4" />
      </ul>
      <div
        onClick={toggleMenu}
        className={`${isOpen ? "fixed" : "hidden"} mt-[269px] inset-0 bg-bg_gradient bg-opacity-50`}
      ></div>
    </nav>
  );
}
