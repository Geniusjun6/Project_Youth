import { Metadata } from "next";
import styles from "../styles/home.module.css";
import ServiceSteps from "./sevice-steps";
import TopBanner from "./top-banner";
import MidText from "./mid-text";

export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <div className={styles.body_container}>
      <TopBanner />
      <MidText />
      <ServiceSteps />
      <Button />
    </div>
  );
}

/** 이력서 작성하기 버튼 */
function Button() {
  return (
    <div className={styles.resume_btn_container}>
      <button>이력서 작성하기</button>
    </div>
  );
}
