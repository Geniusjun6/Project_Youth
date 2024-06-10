import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Hello Chungchun</h1>
    </div>
  );
}
