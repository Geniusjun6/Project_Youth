import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/user.dto";
import { ConfigService } from "@nestjs/config";
import { hashSync } from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService
  ) {}

  /* 회원가입 */
  async signUpUser(createUserDto: CreateUserDto) {
    const { email, password, name, phone, gender }: CreateUserDto = createUserDto;

    const hashRound: number = this.configService.get<number>("PASSWORD_HASH_ROUND");
    const hashedPassword: string = hashSync(password, Number(hashRound));

    await this.userRepository.save({
      email,
      password: hashedPassword,
      name,
      phone,
      gender
    });
  }

  /* 이메일로 유저 찾기 */
  async findUserByEmail(email: string) {
    const user: User = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException("해당하는 유저를 찾을 수 없습니다.");
    }

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  /* ID로 유저 찾기 */
  async findUserById(id: number) {
    const user: User = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException("해당하는 유저를 찾을 수 없습니다.");
    }

    const { password, ...result }: User = user;

    return result;
  }
}
