import { Metadata } from "next";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import "./styles/globals.css";

/* FontAwsomeIcon 사용을 위한 설정 */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    template: "%s | 청춘",
    default: "청춘"
  },
  description: "은퇴한 시니어의 새로운 시작을 응원합니다. 우리는 언제나 청춘입니다."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
