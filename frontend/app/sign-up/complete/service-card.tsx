import Image from "next/image";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export default function ServiceCard({ title, imageSrc, imageAlt, href }: ServiceCardProps) {
  return (
    <li className="md:w-80 md:h-80 md:block hidden group">
      <Link
        href={href}
        className="bg-bg_white shadow-md rounded-xl p-8 w-full h-full flex flex-col justify-between group-hover:cursor-pointer group-hover:bg-youth_color-s group-hover:text-text_color-gray"
      >
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex justify-center items-center flex-grow">
          <Image className="w-16 h-16 md:w-32 md:h-32" src={imageSrc} alt={imageAlt} />
        </div>
        <p className="flex items-center justify-end">
          {title} 바로가기 <FontAwesomeIcon icon={faChevronRight} className="ml-2" fixedWidth />
        </p>
      </Link>
    </li>
  );
}
