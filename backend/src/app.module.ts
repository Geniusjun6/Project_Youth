import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmModuleAsyncOptions } from "./config/database.config";
import { UserModule } from "./user/user.module";
import { join } from "path";
import { AuthModule } from "./auth/auth.module";
import { APP_FILTER } from "@nestjs/core";
import { GlobalExceptionsFilter } from "./common/filter/global.filter";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, "../../.env")
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: GlobalExceptionsFilter }]
})
export class AppModule {}
