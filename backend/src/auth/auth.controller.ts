import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { LogInDto } from "src/user/dto/user.dto";
import { AuthGuard } from "@nestjs/passport";
import { AccessToken, RefreshToken } from "./interface/token-payload.interface";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 이메일 로그인
   * @param LogInDto
   * @returns
   */
  @Post("log-in")
  async logIn(@Body() logInDto: LogInDto, @Request() req) {
    try {
      const { id, gender, email } = await this.authService.validateUser(logInDto);

      const accessTokenPayload: AccessToken = {
        id,
        gender,
        email
      };

      const accessToken: string = await this.authService.createAccessToken(accessTokenPayload);

      const refreshTokenPayload: RefreshToken = {
        id,
        ip: req.ip
      };

      const refreshToken: string = await this.authService.createRefreshToken(refreshTokenPayload);

      return {
        success: true,
        message: "okay",
        accessToken,
        refreshToken
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }
}
