export interface SignIn {
  email: string;
  password: string;
}

// SignInRef인터페이스
export interface SignInRefs {
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
}
