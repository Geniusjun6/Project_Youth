import { Body, Controller, Post, Query, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { LogInDto } from "src/user/dto/user.dto";
import { AuthGuard } from "@nestjs/passport";
import { AccessToken, RefreshToken } from "./interface/token-payload.interface";
import { User } from "src/user/entity/user.entity";

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
      const { id, gender, email } = await this.authService.validateUserByEmailAndPassword(logInDto);

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

  /**
   * 액세스 토큰 및 리프레시 토큰 재발급
   * @param refreshToken 리프레시 토큰 그대로 입력
   * @param req
   */
  @Post("generate-tokens")
  async generateTokens(@Query("refreshToken") refreshToken: string, @Request() req) {
    try {
      const { id, gender, email }: Omit<User, "password"> = await this.authService.validateRefreshToken(
        refreshToken,
        req.ip
      );

      const accessTokenPayload: AccessToken = {
        id,
        gender,
        email
      };

      const newAccessToken: string = await this.authService.createAccessToken(accessTokenPayload);

      const refreshTokenPayload: RefreshToken = {
        id: id,
        ip: req.ip
      };

      const newRefreshToken: string = await this.authService.createRefreshToken(refreshTokenPayload);

      return {
        success: true,
        message: "okay",
        acceessToken: newAccessToken,
        refreshToken: newRefreshToken
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }
}
