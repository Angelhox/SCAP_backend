import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}
  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const { cedula } = createEmpleadoDto;
    const empleadoFound = await this.empleadoRepository.findOneBy({ cedula });
    if (empleadoFound) {
      throw new BadRequestException(
        'Ya existe un empleado con cédula ' + cedula,
      );
    }
    const newEmpleado = this.empleadoRepository.create(createEmpleadoDto);
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
}
