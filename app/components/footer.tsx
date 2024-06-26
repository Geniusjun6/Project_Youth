import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-youth_color-m p-4 h-60 content-center text-text_color-gray min-w-[1200px]">
      <div className="content-center w-11/12 mx-auto">
        <div className="flex content-center justify-between">
          <div>
            <Link href="/">
              <img src="/image/logo_white.png" alt="Logo_White" width={50} height={50}></img>
            </Link>
          </div>
          <ul className="flex space-x-10 items-center">
            <li>
              <Link className="hover:underline hover:font-bold" href="/about-us">
                회사소개
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:font-bold" href="/contact">
                문의하기
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:font-bold" href="/policy/service">
                이용약관
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:font-bold" href="/policy/privacy">
                개인정보 처리방침
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <span>대표이사 문준식</span>
          <span className="mx-2">|</span>
          <span>이메일 : youth@theyouth.com</span>
          <p />
          <span>서울특별시 강남구 테헤란로 000, 00층</span> <span className="mx-2">|</span>
          <span>대표전화 : 02-000-0000</span>
          <p />
          <span>사업자등록번호 : 000-00-0000</span> <span className="mx-2">|</span>
          <span>통신판매번호 : 2024-서울강남-0000</span> <span className="mx-2">|</span>
          <span>유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호</span>
        </div>
      </div>
    </footer>
  );
}
