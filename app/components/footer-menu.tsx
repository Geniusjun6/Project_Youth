import Link from "next/link";

interface FooterMenuProps {
  menuName: string;
  href: string;
}

export default function FooterMenu({ menuName, href }: FooterMenuProps) {
  return (
    <li>
      <Link className="hover:underline hover:font-bold" href={href}>
        {menuName}
      </Link>
    </li>
  );
}
