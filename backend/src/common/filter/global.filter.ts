import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  constructor(private readonly configService: ConfigService) {}

  async catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception instanceof HttpException) {
      return response.status(exception.getStatus()).json(exception.getResponse());
    } else {
      // 기본 에러 응답
      response.status(500).json({
        success: false,
        message: "서버에 문제가 있습니다. 관리자에게 문의하세요."
      });
    }
  }
}
