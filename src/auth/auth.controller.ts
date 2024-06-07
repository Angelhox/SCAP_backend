import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Auth } from './decorators/auth.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log('Recibido en controlle: ', loginDto);

    return this.authService.login(loginDto);
  }
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
  @Get('check')
  @Auth(Role.AUDITOR)
  check(@ActiveUser() user: UserActiveInterface) {
    return user;
  }
}
