import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { Cargo } from 'src/cargos/entities/cargo.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) {}
  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const { cedula } = createEmpleadoDto;
    const empleadoFound = await this.empleadoRepository.findOneBy({ cedula });
    if (empleadoFound) {
      throw new BadRequestException(
        'Ya existe un empleado con cédula ' + cedula,
      );
    }
    const cargo = await this.validateCargo(createEmpleadoDto.cargosId);
    const newEmpleado = this.empleadoRepository.create({
      ...createEmpleadoDto,
      cargo,
    });
    return await this.empleadoRepository.save(newEmpleado);
  }

  findAll() {
    return 'This action return all cargos';
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
  private async validateCargo(id: number) {
    const cargoEntity = await this.cargoRepository.findOneBy({ id: id });
    if (!cargoEntity) {
      throw new BadRequestException('Cargo not found');
    }
    return cargoEntity;
  }
}
