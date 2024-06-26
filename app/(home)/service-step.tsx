import Link from "next/link";
import Image from "next/image";

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
      className="relative min-w-[400px] w-[480px] h-[350px] rounded-3xl shadow-md bg-bg_white transition-all duration-300 ease-in-out hover:w-[700px] hover:bg-youth_color-s group"
    >
      <div className="absolute w-full h-full p-10 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-xl text-youth_color-s group-hover:text-text_color-gray ">{subTitle}</h3>
          <h1 className="font-bold text-3xl mb-2 group-hover:text-text_color-gray">{mainTitle}</h1>
          <p className="hidden group-hover:block group-hover:text-text_color-gray">{subscription}</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <Image src="/image/CTA-btn.png" alt="바로가기 버튼" width={50} height={50} layout="intrinsic" />
          </div>
          <div>
            <Image src={imageSrc} alt={imageAlt} width={100} height={100} layout="intrinsic" />
          </div>
        </div>
      </div>
    </Link>
  );
}
