import Link from "next/link";
import Image from "next/image";
import CTA_Btn from "../../public/image/CTA-btn.svg";

/* ServiceStep에 들어갈 props 타입 정의 */
interface ServiceStepProps {
  subTitle: string;
  mainTitle: string;
  subscription: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceStep({ subTitle, mainTitle, subscription, href, imageSrc, imageAlt }: ServiceStepProps) {
  return (
    <Link
      href={href}
      className="relative shadow-md bg-bg_white min-w-[366px] max-w-[700px] min-h-[156px] rounded-lg md:min-w-[400px] md:w-[480px] md:h-[350px] md:rounded-3xl md:transition-all md:duration-300 md:ease-in-out md:hover:w-[700px] md:hover:bg-youth_color-s group"
    >
      <div className="absolute w-full h-full p-5 flex flex-col justify-between md:p-10">
        <div>
          <h3 className="font-semibold text-sm md:text-xl text-youth_color-s md:group-hover:text-text_color-gray ">
            {subTitle}
          </h3>
          <h1 className="font-bold md:text-3xl md:mb-2 md:group-hover:text-text_color-gray">{mainTitle}</h1>
          <p className="text-[10px] block md:hidden md:group-hover:block md:group-hover:text-text_color-gray md:text-lg">
            {subscription}
          </p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <Image className="w-6 h-6 md:w-16 md:h-16" src={CTA_Btn} alt="바로가기 버튼" />
          </div>
          <div>
            <Image className="w-16 h-16 md:w-32 md:h-32" src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </Link>
  );
}
