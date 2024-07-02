import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";
import { Gender } from "../entity/user.gender.enum";

export class CreateUserDto {
  /**
   * 이메일
   * @example "test@test.com"
   * @requires true
   */
  @IsEmail({}, { message: "이메일 형식이 올바르지 않습니다." })
  @IsNotEmpty({ message: "이메일을 작성해주세요." })
  email: string;

  /**
   * 비밀번호
   * @example "Test123!"
   * @requires true
   */
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 0
    },
    { message: "비밀번호는 최소 8자리 이상 대문자, 숫자, 특수기호를 1글자 이상 포함해야 합니다." }
  )
  @IsNotEmpty({ message: "비밀번호를 입력해주세요." })
  password: string;

  /**
   * 비밀번호 확인용
   * @example "Test123!"
   * @requires true
   */
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 0
    },
    { message: "비밀번호는 최소 8자리 이상 대문자, 숫자, 특수기호를 1글자 이상 포함해야 합니다." }
  )
  @IsNotEmpty({ message: "비밀번호를 입력해주세요." })
  passwordCheck: string;

  /**
   * 이름
   * @example "테스트"
   * @requires true
   */
  @IsString({ message: "이름을 다시 입력해주세요." })
  @IsNotEmpty({ message: "이름을 입력해주세요." })
  name: string;

  /**
   * 전화번호
   * @example "010-5850-3898"
   * @requires true
   */
  @IsPhoneNumber("KR", { message: "전화번호를 다시 입력해주세요." })
  @IsNotEmpty({ message: "전화번호를 입력해주세요." })
  phone: string;

  /**
   * 성별
   * @example "male"
   * @requires true
   */
  @IsEnum(Gender)
  @IsNotEmpty({ message: "성별을 입력해주세요." })
  gender: Gender;
}
