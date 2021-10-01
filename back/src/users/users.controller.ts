import { Controller, Get } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get('generate-admin')
  async generateAdmin() {
    const find = await this.userService.findOne(1721306361);

    if (find) {
      return 'User was created!';
    }

    const hashedPassword = await bcrypt.hash('secret', 12);

    const user = {
      identification: 1721306361,
      firstName: 'Javier',
      lastName: 'Montalvo',
      email: 'giojavi04@gmail.com',
      password: hashedPassword,
      isAdmin: true,
      birthDate: null,
      direction: null,
      phone: null,
    }

    return this.userService.create(user);
  }
}
