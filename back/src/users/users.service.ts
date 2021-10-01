import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(id: string, user: User): Promise<User> {
    return await this.userRepository.save({ ...user, id: Number(id) });
  }

  async findOne(username: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { identification: username } });
  }
}
