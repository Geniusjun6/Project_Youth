import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmModuleAsyncOptions } from "./config/database.config";
import { UserModule } from "./user/user.module";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, "../../.env")
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    UserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
