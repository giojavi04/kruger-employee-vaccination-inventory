import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await this.userRepository.save(user);
  }

  async findOne(username: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { identification: username } });
  }

  async update(id: number, user: User): Promise<User | null> {
    await this.userRepository.update({ id }, user)
    return await this.userRepository.findOne(id);
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
