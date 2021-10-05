import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsDate, Max, IsInt, IsBoolean } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  @IsInt()
  @Max(10)
  identification: number;

  @Column({
        length: 100
    })
  firstName: string;

  @Column({
        length: 100
    })
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  @IsDate()
  birthDate?: string;

  @Column({ nullable: true })
  direction?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ default: false, nullable: true })
  @IsBoolean()
  isVaccine?: boolean;

  @Column({ nullable: true })
  vaccine?: string;

  @Column({ nullable: true })
  @IsDate()
  vaccineDate?: string;

  @Column({ nullable: true })
  @IsInt()
  vaccineTimes?: string;

  @Column({ default: false })
  @IsBoolean()
  isAdmin: boolean;

  @Column({ default: new Date() })
  @IsDate()
  createdAt?: Date;
}