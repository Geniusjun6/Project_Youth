export default function TopBanner() {
  return (
    <div className="bg-cover bg-center bg-main-top-banner rounded-2xl h-60 min-w-[320px] shadow-md md:h-[800px] md:rounded-[30px]">
      <div className="flex flex-col w-full h-full rounded-2xl bg-gradient-to-r from-bg_gradient/75 md:rounded-[30px]">
        <div className="pl-10 flex flex-col justify-center text-center text-text_color-gray md:text-start h-full md:pl-20 ">
          <h1 className="text-lg font-bold md:mb-5 md:text-6xl md:mt-[-150px]">
            우리는 모두 <span className="text-youth_color-m">청춘</span>입니다.
          </h1>
          <p className="hidden md:block md:text-2xl">새로운 시작, 두려워 마세요.</p>
          <p className="hidden md:block md:text-2xl">경험과 지혜가 더해진 지금, 당신의 새로운 '청춘'을 응원합니다.</p>
        </div>
      </div>
    </div>
  );
}
