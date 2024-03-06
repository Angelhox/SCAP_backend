import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}
  async create(createServicioDto: CreateServicioDto) {
    const { nombre } = createServicioDto;
    const servicioFound = await this.servicioRepository.findOneBy({ nombre });
    if (servicioFound) {
      throw new BadRequestException(
        'Ya existe un servicio con el nombre ' + nombre,
      );
    }
    const newServicio = this.servicioRepository.create(createServicioDto);
    return await this.servicioRepository.save(newServicio);
  }

  async findAll() {
    return await this.servicioRepository.find();
  }

  async findOne(id: number) {
    return await this.servicioRepository.findOneBy({ id });
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    const servicioFound = this.servicioRepository.findOneBy({ id });
    if (!servicioFound) {
      throw new ConflictException('No se ha podido encontrar el servicio');
    }

    return await this.servicioRepository.update(id, updateServicioDto);
  }

  async remove(id: number) {
    const servicioFound = this.servicioRepository.findOneBy({ id });
    if (!servicioFound) {
      throw new ConflictException('No se ha podido encontrar el servicio');
    }
    return await this.servicioRepository.delete({ id });
  }
}
