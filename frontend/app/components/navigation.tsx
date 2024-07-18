"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "/public/image/logo.svg";
import { useSignInStore } from "../sign-in/(util)/sign-in.store";
import { deleteTokens } from "./(service)/nav.service";
import { deleteRefreshToken } from "./(repository)/nav.repository";

export default function Navigation() {
  const [isOpenMenu, setIsOpen] = useState(false);

  const { isSignIn, setLogOut } = useSignInStore();

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpenMenu);
  };

  const handleLogOut = async () => {
    const accessToken: string | null = localStorage.getItem("accessToken");

    // DB에 리프레시 토큰 삭제
    await deleteRefreshToken(accessToken);

    // 클라이언트 측 토큰 삭제
    deleteTokens();

    // 로그인 상태 변경
    setLogOut();
  };

  useEffect(() => {
    isOpenMenu ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
  }, [isOpenMenu]);

  return (
    <nav className="w-full z-40 fixed top-0 left-0 right-0 shadow-md bg-youth_color-m p-4 mb-4 content-center text-text_color-gray text-sm md:text-xl">
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
          {isSignIn ? (
            <div className="flex items-center space-x-4 text-lg md:text-2xl">
              <button
                onClick={handleLogOut}
                className="p-4 text-lg rounded-md md:flex hidden hover:bg-youth_color-s/45 hover:font-bold cursor-pointer"
              >
                로그아웃
              </button>
              <FontAwesomeIcon className="hover:bg-youth_color-s/45 cursor-pointer p-4 rounded-md" icon={faUser} />
            </div>
          ) : (
            <div className="flex">
              <NavMenu menuName={"로그인"} href={"/sign-in"} />
            </div>
          )}

          <button className="flex md:hidden text-xl justify-center items-center p-2">
            {isOpenMenu ? (
              <FontAwesomeIcon className="text-xl" onClick={toggleMenu} icon={faX} />
            ) : (
              <FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
            )}
          </button>
        </div>
      </ul>
      {/* 모바일 메뉴 */}
      <ul className={`${isOpenMenu ? "flex" : "hidden"} flex-col px-3 py-2 md:hidden`}>
        <hr className="mb-4" />
        <NavMenu menuName="경력 관리하기" href="/career" css="p-4" />
        <NavMenu menuName="이력서 작성하기" href="/resume" css="p-4" />
        <NavMenu menuName="문의하기" href="/contact" css="p-4" />
      </ul>
      <div
        onClick={toggleMenu}
        className={`${isOpenMenu ? "fixed" : "hidden"} mt-[269px] inset-0 bg-bg_gradient bg-opacity-50`}
      ></div>
    </nav>
  );
}
