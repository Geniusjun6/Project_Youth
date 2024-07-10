import Link from "next/link";

export default function SignInBtn() {
  return (
    <div className="w-full mt-10 md:mt-10 flex justify-center items-center">
      <Link href="/career">
        <button
          className="
          w-80
          md:w-[700px]
            p-3
            shadow-md
            rounded-lg
            md:rounded-lg
            text-sm
            md:text-lg
            bg-youth_color-m
            text-text_color-gray
            font-semibold
            text-center
            hover:bg-youth_color-s"
        >
          경력관리 시작하기
        </button>
      </Link>
    </div>
  );
}
