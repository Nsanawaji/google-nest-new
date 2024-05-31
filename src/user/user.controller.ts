import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('signup')
  async register(@Body() payload: UserDto) {
    await this.userService.registerUser(payload);
  }
}
