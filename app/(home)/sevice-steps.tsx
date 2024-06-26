import ServiceStep from "./service-step";

export default function ServiceSteps() {
  return (
    <div className="flex justify-end mt-20 mb-10 space-x-4">
      {/* 경력관리 */}
      <ServiceStep
        href="/career"
        subTitle="Career Management"
        mainTitle="AI와 함께하는 전체 경력 관리"
        subscription="간편한 경력 불러오기와 AI를 통해 쉽게 경력을 관리하세요."
        imageSrc="/image/Career.png"
        imageAlt="경력관리 아이콘"
      />
      {/* 이력서 작성 */}
      <ServiceStep
        href="/resume"
        subTitle="Completion of Resume"
        mainTitle="간편한 이력서 작성"
        subscription="지원 직무와 연관된 라벨의 경력을 선택하여 이력서를 작성해요."
        imageSrc="/image/resume.png"
        imageAlt="이력서 작성 아이콘"
      />
      {/* 이력서 다운로드 */}
      <ServiceStep
        href="/resume"
        subTitle="Download Resume"
        mainTitle="이력서 다운로드"
        subscription="작성한 이력서를 PDF 형태로 다운받을 수 있어요."
        imageSrc="/image/pdf.png"
        imageAlt="이력서 다운로드 아이콘"
      />
    </div>
  );
}
