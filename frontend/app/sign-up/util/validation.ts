/** 이메일 유효성 검사 */
export const validateEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

/** 비밀번호 유효성 검사 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);
};
