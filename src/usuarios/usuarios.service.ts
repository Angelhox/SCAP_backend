import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { plainToClass } from 'class-transformer';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
    private readonly authService: AuthService,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    const { usuario } = createUsuarioDto;
    const usuarioFound = await this.usuariosRepository.findOneBy({ usuario });
    if (usuarioFound) {
      throw new BadRequestException('El nombre de usuario ya esta en uso');
    }
    // Crear una instancia de RegisterDto
    const registerDto = plainToClass(RegisterDto, {
      clave: createUsuarioDto.clave,
    });
    // Pasar la instancia de RegisterDto al método register
    const { clave } = await this.authService.register(registerDto);
    createUsuarioDto.clave = clave;
    const newUsuario = this.usuariosRepository.create(createUsuarioDto);
    return await this.usuariosRepository.save(newUsuario);
  }

  findAll() {
    // return `This action returns all usuarios`;
    return this.usuariosRepository.find({ relations: ['rol', 'empleado'] });
  }

  findOne(id: number) {
    return `This actions returns a #${id} usuario`;
  }
  findOneByUser(usuario: string) {
    return this.usuariosRepository.findOne({
      where: { usuario },
      relations: ['rol', 'empleado'],
    });
  }
  findOneByUserWithPass(usuario: string) {
    return this.usuariosRepository.findOne({
      where: { usuario },
      select: ['id', 'usuario', 'clave', 'fechaModificacion'],
      relations: ['rol'],
    });
  }
  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
