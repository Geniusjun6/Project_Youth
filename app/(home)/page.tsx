import { Metadata } from "next";
import styles from "../styles/home.module.css";
import ServiceSteps from "./sevice-steps";
import TopBanner from "./top-banner";
import MidText from "./mid-text";
import Button from "./resume-btn";

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
