import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('create')
  async create(user: User) {
    return this.userService.create(user);
  }

  @Public()
  @Get('generate-admin')
  async generateAdmin() {
    const find = await this.userService.findOne(1721306361);

    if (find) {
      return 'El usuario administrador ya fué creado!';
    }

    const user = {
      identification: 1721306361,
      firstName: 'Javier',
      lastName: 'Montalvo',
      email: 'giojavi04@gmail.com',
      isAdmin: true,
      birthDate: null,
      direction: null,
      phone: null,
    }

    return this.userService.create(user);
  }
}
