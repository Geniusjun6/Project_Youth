import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

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
        message: error.response.message
      };
    }
  }
}
