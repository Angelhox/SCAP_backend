import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsuariosService))
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}
  async register({ clave }: RegisterDto) {
    console.log('clave: ', clave);
    const hashedPassword = await bcryptjs.hash(clave, 12);
    return {
      message: 'User created successfully',
      clave: hashedPassword,
    };
  }
  async login({ usuario, clave }: LoginDto) {
    console.log('Recibido: ', usuario, clave);
    const user = await this.usuariosService.findOneByUserWithPass(usuario);
    if (!user) {
      throw new UnauthorizedException('El usuario es incorrecto o no existe !');
    }
    const isPassworValid = await bcryptjs.compare(clave, user.clave);
    console.log('Clave: ', clave, ' ', user.clave);
    if (!isPassworValid) {
      throw new UnauthorizedException('La contraseña es incorrecta !');
    }
    const { rol } = user.rol;
    const payload = { usuario: user.usuario, rol: user.rol.rol };
    const token = await this.jwtService.signAsync(payload);
    return { token, usuario, rol };
  }
}
