import ServiceStep from "./service-step";
import career from "/public/image/career.svg";
import resume from "/public/image/resume.svg";
import pdf from "/public/image/pdf.svg";

export default function ServiceSteps() {
  return (
    <div className="flex flex-col space-y-2 mt-6 mb-5 items-center md:flex-row md:justify-end md:mt-20 md:mb-10 md:space-x-4">
      {/* 경력관리 */}
      <ServiceStep
        href="/career"
        subTitle="Career Management"
        mainTitle="AI와 함께하는 전체 경력 관리"
        subscription="간편한 경력 불러오기와 AI를 통해 쉽게 경력을 관리하세요."
        imageSrc={career}
        imageAlt="경력관리 아이콘"
      />
      {/* 이력서 작성 */}
      <ServiceStep
        href="/resume"
        subTitle="Completion of Resume"
        mainTitle="간편한 이력서 작성"
        subscription="지원 직무와 연관된 라벨의 경력을 선택하여 이력서를 작성해요."
        imageSrc={resume}
        imageAlt="이력서 작성 아이콘"
      />
      {/* 이력서 다운로드 */}
      <ServiceStep
        href="/resume"
        subTitle="Download Resume"
        mainTitle="이력서 다운로드"
        subscription="작성한 이력서를 PDF 형태로 다운받을 수 있어요."
        imageSrc={pdf}
        imageAlt="이력서 다운로드 아이콘"
      />
    </div>
  );
}
