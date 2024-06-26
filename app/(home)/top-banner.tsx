export default function TopBanner() {
  return (
    <div>
      <div className="relative bg-cover bg-center bg-main-top-banner rounded-[30px] h-[800px] shadow-md">
        <div className="absolute flex flex-col w-full h-full bg-gradient-to-r from-bg_gradient/75 rounded-[30px]">
          <div className="pl-20 flex flex-col justify-center h-full text-text_color-gray">
            <p className="mt-[-150px] text-6xl font-bold mb-5">
              우리는 모두 <span className="text-youth_color-m">청춘</span>입니다.
            </p>
            <p className="text-2xl">새로운 시작, 두려워 마세요.</p>
            <p className="text-2xl">경험과 지혜가 더해진 지금, 당신의 새로운 '청춘'을 응원합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
