import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  async all() {
    return this.userService.getAll();
  }

  @Post('create')
  async create(@Body() createUser: User) {
    const find = await this.userService.findOne(createUser.identification);

    if (find) {
      return 'El usuario ya existe en la base de datos!';
    }
    return this.userService.create(createUser);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateUser: User) {
    return this.userService.update(+id, updateUser);
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
      password: 'secret',
      isAdmin: true,
      birthDate: null,
      direction: null,
      phone: null,
    }

    return this.userService.create(user);
  }
}
