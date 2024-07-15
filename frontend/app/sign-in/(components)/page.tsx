import { Metadata } from "next";

import SocialLogIn from "./social-login";
import EmailLogIn from "./email-login";
import TopText from "./top-text";

export const metadata: Metadata = {
  title: "Sign-In"
};

export default function SignIn() {
  return (
    <div className="w-11/12 h-full mx-auto">
      <TopText />
      <SocialLogIn />
      <EmailLogIn />
    </div>
  );
}
