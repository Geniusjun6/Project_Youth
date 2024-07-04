export interface UserProps {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  gender: string;
}

export class User {
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
