import ServiceCard from "./service-card";
import career from "/public/image/career.svg";
import resume from "/public/image/resume.svg";
import pdf from "/public/image/pdf.svg";

export default function ServiceCards() {
  return (
    <ul className="flex flex-col md:flex-row  justify-center items-center mt-5 space-y-2 md:space-x-10 md:mt-10 md:w-full">
      <ServiceCard imageSrc={career} imageAlt="경력관리 아이콘" title="경력관리" href="/career" />
      <ServiceCard imageSrc={resume} imageAlt="이력서 작성 아이콘" title="이력서 작성" href="/resume" />
      <ServiceCard imageSrc={pdf} imageAlt="이력서 다운로드 아이콘" title="이력서 다운로드" href="resume" />
    </ul>
  );
}
