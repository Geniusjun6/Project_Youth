import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ProjectYouth",
    database: "youth-app",
    synchronize: true,
    autoLoadEntities: true,
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    logging: false
  })
};
