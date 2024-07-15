import { BaseEntity } from "src/common/entity/base.entity";
import { Column, Entity } from "typeorm";
import { Gender } from "./user.gender.enum";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @Column({ type: "varchar", nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", nullable: false }) // 비밀번호 저장 시 HASH 처리 필요
  password: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "varchar", nullable: false })
  phone: string;

  @Column({ type: "enum", enum: Gender, nullable: false })
  gender: Gender;
}
