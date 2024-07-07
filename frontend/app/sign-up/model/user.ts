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

  constructor(email: string, password: string, passwordCheck: string, name: string, phone: string, gender: string) {
    this.email = email;
    this.password = password;
    this.passwordCheck = passwordCheck;
    this.name = name;
    this.phone = phone;
    this.gender = gender;
  }
}
