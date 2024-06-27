import Link from "next/link";

interface NavMenuProps {
  menuName: string;
  href: string;
  css?: string;
}

export default function NavMenu({ menuName, href, css }: NavMenuProps) {
  return (
    <li>
      <Link
        className={`block h-full content-center rounded-md px-4 hover:bg-youth_color-s/45 hover:font-bold cursor-pointer ${css}`}
        href={href}
      >
        {menuName}
      </Link>
    </li>
  );
}
