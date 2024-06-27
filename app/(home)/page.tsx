import { Metadata } from "next";
import ServiceSteps from "./sevice-steps";
import TopBanner from "./top-banner";
import MidText from "./mid-text";
import Button from "./resume-btn";

export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <TopBanner />
      <MidText />
      <ServiceSteps />
      <Button />
    </div>
  );
}
