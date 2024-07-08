import { BadRequestException, Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags, PickType } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * 이메일 회원가입
   * @param createUserDto
   * @returns
   */
  @Post("sign-up")
  async signUpUser(@Body() createUserDto: CreateUserDto) {
    const { password, passwordCheck } = createUserDto;

    if (password !== passwordCheck) {
      throw new BadRequestException("비밀번호를 확인해주세요.");
    }

    try {
      await this.userService.signUpUser(createUserDto);
      return {
        success: true,
        message: "okay"
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  /**
   * 이메일로 유저 찾기
   * @param email 사용자 이메일
   * @returns 사용자 존재 여부(boolean)
   */
  @Get("find-user")
  async findUserByEmail(@Query("email") email: string) {
    try {
      const isExitUser: boolean = await this.userService.findUserByEmail(email);

      return {
        success: true,
        message: "okay",
        data: isExitUser
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }
}
