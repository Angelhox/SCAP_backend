import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { CreateEmpleadoUsuarioDto } from './dto/create-empleado.usuario.dto';
import { UpdateEmpleadoUsuarioDto } from './dto/update-empleado.usuario.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { EmpleadosService } from 'src/empleados/empleados.service';
import { CreateEmpleadoDto } from 'src/empleados/dto/create-empleado.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Cargo } from 'src/cargos/entities/cargo.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Rol } from 'src/rol/entities/rol.entity';

@Injectable()
export class EmpleadoUsuarioService {
  constructor(
    @Inject(forwardRef(() => UsuariosService))
    private readonly usuariosService: UsuariosService,
    @Inject(forwardRef(() => EmpleadosService))
    private readonly empleadosService: EmpleadosService,
    private dataSource: DataSource,
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}
  async createWithQueryRunner(
    createEmpleadoUsuarioDto: CreateEmpleadoUsuarioDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    queryRunner.startTransaction();
    const { cedula } = createEmpleadoUsuarioDto.empleado;
    const empleadoFound = await this.empleadoRepository.findOneBy({ cedula });
    if (empleadoFound) {
      throw new BadRequestException(
        'Ya existe un empleado con cédula ' + cedula,
      );
    }
    const { usuario } = createEmpleadoUsuarioDto.usuario;
    const usuarioFound = await this.usuarioRepository.findOneBy({ usuario });
    if (usuarioFound) {
      throw new BadRequestException('El nombre de usuario ya esta en uso');
    }
    const cargo = await this.validateCargo(
      createEmpleadoUsuarioDto.empleado.cargosId,
    );
    const rol = await this.validateRol(
      createEmpleadoUsuarioDto.usuario.rolesId,
    );

    try {
      const newEmpleado = this.empleadoRepository.create({
        ...createEmpleadoUsuarioDto.empleado,
        cargo,
      });
      const savedEmpleado = await queryRunner.manager.save(newEmpleado);
      const newUsuario = this.usuarioRepository.create({
        ...createEmpleadoUsuarioDto.usuario,
        rol,
        empleado: savedEmpleado,
      });
      await queryRunner.manager.save(newUsuario);
      return await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        'Error al crear empleado y usuario: ' + error.message,
      );
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return `This action returns all emple              adoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleadoUsuario`;
  }

  update(id: number, updateEmpleadoUsuarioDto: UpdateEmpleadoUsuarioDto) {
    return `This action updates a #${id} empleadoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleadoUsuario`;
  }
  private async validateCargo(id: number) {
    const cargoEntity = await this.cargoRepository.findOneBy({ id: id });
    if (!cargoEntity) {
      throw new BadRequestException('Cargo not found');
    }
    return cargoEntity;
  }
  private async validateRol(id: number) {
    const rolEntity = await this.rolRepository.findOneBy({ id: id });
    if (!rolEntity) {
      throw new BadRequestException('Rol not found');
    }
    return rolEntity;
  }
}
