import "./globals.css";

export const metadata = {
  title: "청춘",
  description: "은퇴한 시니어의 새로운 시작을 응원합니다. 우리는 언제나 청춘입니다."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
