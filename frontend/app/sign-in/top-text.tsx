export default function TopText() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold md:text-3xl">우리는 모두 한때 청춘이었습니다.</h1>
      <p className="mt-2 text-md md:text-lg">새로운 시작, 두려워 마세요.</p>
      <p className="flex space-x-1 text-md md:text-lg">
        <span className="hidden md:flex md:mr-1">경험과 지혜가 더해진 지금,</span> 당신의 새로운
        <span className="font-bold text-youth_color-s">'청춘'</span>을 응원합니다.
      </p>
    </div>
  );
}
