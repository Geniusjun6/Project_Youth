import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <Link href="/career">경력 관리하기</Link>
        </li>
        <li>
          <Link href="/resume">이력서 작성하기</Link>
        </li>
        <li>
          <Link href="/contact">문의하기</Link>
        </li>
        <li>
          <Link href="/sign-in">로그인</Link>
        </li>
      </ul>
    </nav>
  );
}
