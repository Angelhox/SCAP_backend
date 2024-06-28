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
import { Rol } from 'src/rol/entities/rol.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
    @InjectRepository(Empleado)
    private readonly empleadosRepository: Repository<Empleado>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    const { usuario } = createUsuarioDto;
    const usuarioFound = await this.usuariosRepository.findOneBy({ usuario });
    if (usuarioFound) {
      throw new BadRequestException('El nombre de usuario ya esta en uso');
    }
    const rol = await this.validateRol(createUsuarioDto.rolesId);
    const empleado = await this.validateEmpleado(createUsuarioDto.empleadosId);
    // Crear una instancia de RegisterDto
    const registerDto = plainToClass(RegisterDto, {
      clave: createUsuarioDto.clave,
    });
    // Pasar la instancia de RegisterDto al método register
    const { clave } = await this.authService.register(registerDto);
    createUsuarioDto.clave = clave;
    const newUsuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      clave: clave,
      rol,
      empleado,
    });
    return await this.usuariosRepository.save(newUsuario);
  }

  async findAll() {
    // return `This action returns all usuarios`;
    return await this.usuariosRepository.find({
      relations: ['rol', 'empleado'],
    });
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
  private async validateRol(id: number) {
    const rolEntity = await this.rolRepository.findOneBy({ id: id });
    if (!rolEntity) {
      throw new BadRequestException('Rol not found');
    }
    return rolEntity;
  }
  private async validateEmpleado(id: number) {
    const empleadoEntity = await this.empleadosRepository.findOneBy({ id: id });
    if (!empleadoEntity) {
      throw new BadRequestException('Empleado not found');
    }
    return empleadoEntity;
  }
}
