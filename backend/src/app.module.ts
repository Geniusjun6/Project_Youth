import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmModuleAsyncOptions } from "./config/database.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
    // TypeOrmModule.forRoot(typeOrmModuleAsyncOptions)
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
