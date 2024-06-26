import Link from "next/link";
import Image from "next/image";

export default function ServiceSteps() {
  return (
    <div className="flex justify-end mt-20 mb-10 space-x-4">
      {/* 경력관리 */}
      <Link
        href="/career"
        className="relative min-w-[400px] w-[480px] h-[350px] rounded-3xl shadow-md bg-bg_white transition-all duration-300 ease-in-out hover:w-[700px] hover:bg-youth_color-s group"
      >
        <div className="absolute w-full h-full p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl text-youth_color-s group-hover:text-text_color-gray ">
              Career Management
            </h3>
            <h1 className="font-bold text-3xl mb-2 group-hover:text-text_color-gray">AI와 함께하는 전체 경력 관리</h1>
            <p className="hidden group-hover:block group-hover:text-text_color-gray">
              간편한 경력 불러오기와 AI를 통해 쉽게 경력을 관리하세요.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <Image src="/image/CTA-btn.png" alt="바로가기 버튼" width={50} height={50} layout="intrinsic" />
            </div>
            <div>
              <Image src="/image/Career.png" alt="경력관리 아이콘" width={100} height={100} layout="intrinsic" />
            </div>
          </div>
        </div>
      </Link>
      {/* 이력서 작성 */}
      <Link
        href="/resume"
        className="relative min-w-[400px] w-[480px] h-[350px] rounded-3xl shadow-md bg-bg_white transition-all duration-300 ease-in-out hover:w-[700px] hover:bg-youth_color-s group"
      >
        <div className="absolute w-full h-full p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl text-youth_color-s group-hover:text-text_color-gray ">
              Completion of Resume
            </h3>
            <h1 className="font-bold text-3xl mb-2 group-hover:text-text_color-gray">간편한 이력서 작성</h1>
            <p className="hidden group-hover:block group-hover:text-text_color-gray">
              지원 직무와 연관된 라벨의 경력을 선택하여 이력서를 작성해요.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <Image src="/image/CTA-btn.png" alt="바로가기 버튼" width={50} height={50} layout="intrinsic" />
            </div>
            <div>
              <Image src="/image/resume.png" alt="경력관리 아이콘" width={100} height={100} layout="intrinsic" />
            </div>
          </div>
        </div>
      </Link>
      {/* 이력서 다운로드 */}
      <Link
        href="/resume"
        className="relative min-w-[400px] w-[480px] h-[350px] rounded-3xl shadow-md bg-bg_white transition-all duration-300 ease-in-out hover:w-[700px] hover:bg-youth_color-s group"
      >
        <div className="absolute w-full h-full p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl text-youth_color-s group-hover:text-text_color-gray ">
              Download Resume
            </h3>
            <h1 className="font-bold text-3xl mb-2 group-hover:text-text_color-gray">이력서 다운로드</h1>
            <p className="hidden group-hover:block group-hover:text-text_color-gray">
              작성한 이력서를 PDF 형태로 다운받을 수 있어요.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <Image src="/image/CTA-btn.png" alt="바로가기 버튼" width={50} height={50} layout="intrinsic" />
            </div>
            <div>
              <Image src="/image/pdf.png" alt="이력서 다운로드 아이콘" width={100} height={100} layout="intrinsic" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
