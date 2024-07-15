import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { compareSync } from "bcrypt";
import { LogInDto } from "src/user/dto/user.dto";
import { User } from "src/user/entity/user.entity";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { AccessToken, RefreshToken } from "./interface/token-payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private jwtService: JwtService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async validateUser(logInDto: LogInDto) {
    const { email, password } = logInDto;

    const user: User = await this.userRepository.findOneBy({ email });
    const isPasswordMatch: boolean = compareSync(password, user?.password ?? "");

    // 유저가 없거나 패스워드가 일치하지 않을 경우
    if (!user || !isPasswordMatch) {
      throw new UnauthorizedException("이메일 및 비밀번호를 확인해주세요.");
    }

    delete user.password;

    return user;
  }

  async createAccessToken(payload: AccessToken): Promise<string> {
    const accessToken: string = this.jwtService.sign(payload, {
      expiresIn: "5m",
      secret: this.configService.get("JWT_ACCESS_SECRET")
    });
    return accessToken;
  }

  async createRefreshToken(payload: RefreshToken): Promise<string> {
    const refresh: string = this.jwtService.sign(payload, {
      expiresIn: "14d",
      secret: this.configService.get("JWT_REFRESH_SECRET")
    });

    return refresh;
  }

  async validateRefreshToken(refreshToken: string, currentIp: string) {
    try {
      const payload: RefreshToken = this.jwtService.verify<RefreshToken>(refreshToken, {
        secret: this.configService.get("JWT_REFRESH_SECRET")
      });

      if (payload.ip !== currentIp) {
        throw new UnauthorizedException("Ip주소가 변경되었을 경우 다시 로그인이 필요합니다.");
      }

      const user: Omit<User, "password"> = await this.userService.findUserById(payload.id);

      if (!user) {
        throw new UnauthorizedException("해당하는 유저를 찾을 수 없습니다. 다시 로그인 해주세요.");
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException("유효하지 않은 토큰입니다. 다시 로그인해주세요.");
    }
  }
}
