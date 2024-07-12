export interface UserProps {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  gender: string;
}

export class User implements UserProps {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  gender: string;

  constructor({ email, password, passwordCheck, name, phone, gender }: UserProps) {
    this.email = email;
    this.password = password;
    this.passwordCheck = passwordCheck;
    this.name = name;
    this.phone = phone;
    this.gender = gender;
  }
}

// redux initialState 용 인터페이스
export interface NewUserState extends UserProps {
  checkEmail: boolean;
  isDuplicateEmail: boolean;
}

// userRefs 인터페이스
export interface UserRefs {
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  passwordCheckRef: React.RefObject<HTMLInputElement>;
  nameRef: React.RefObject<HTMLInputElement>;
  phoneRef: React.RefObject<HTMLInputElement>;
}
